<template>
  <span class="icon-text">
    <template v-for="it in iconTexts">
      <span v-if="it.name == 'text'">{{it.content}}</span>
      <icon v-else-if="it.name == 'icon'" :name="it.content" scale="2.6"></icon>
    </template>
  </span>
</template>

<script>
  export default{
    props: ['content'],
    computed: {
      iconTexts(){
        let ICON_REG = /\[\/([\w]+)\]/gi;
        let rdata, rindex = 0;

        let list = [], checkPushList = function (text, type) {
          if (text && '' != text) {
            list.push({
              name: type,
              content: text
            });
          }
        }
        if(this.content){
          while (rdata = ICON_REG.exec(this.content)) {
            checkPushList(this.content.substring(rindex, rdata.index), 'text');
            checkPushList(rdata[1], 'icon');
            rindex = rdata.index + rdata[0].length;
          }
          checkPushList(this.content.substr(rindex), 'text');
        }

        return list;
      }
    }
  }
</script>

<style lang="scss">
  .icon-text{
    .svg-icon{
      -webkit-transform: translateY(.1em);
      transform: translateY(.1em);
    }
  }
</style>
