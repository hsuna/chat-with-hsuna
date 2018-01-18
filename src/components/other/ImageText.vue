<template v-for="ita in imageTexts">
  <span v-if="ita.name == 'text'">{{ita.content}}</span>
  <icon v-if="ita.name == 'icon'" name="ita.content"></icon>
</template>

<script>
  export default{
    props: ['content'],
    data()
  {
    return {
      imageTexts: getImgTxtList(this.content)
    }
  }
  }

  function getImgTxtList(content) {
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

    while (rdata = ICON_REG.exec(content)) {
      checkPushList(content.substring(rindex, rdata.index), 'text');
      checkPushList(rdata[1], 'icon');
      rindex = rdata.index + rdata[0].length;
    }
    checkPushList(content.substr(rindex), 'text');

    return list;
  }
</script>

<style lang="scss">

</style>
