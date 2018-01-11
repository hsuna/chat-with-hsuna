<template>
  <div class="chat-foot">
    <div class="cf-options">
      <div class="cf-help">
        <i class="icon-hsuna cwh-help"></i>
      </div>
      <div class="cf-input" @click="selectToggleClick">
      </div>
      <div class="cf-select-btn" :class="{active:selectVisible}" @click="selectToggleClick">
        <i class="icon-hsuna cwh-top-arrows"></i>
        <i class="icon-hsuna cwh-bottom-arrows"></i>
      </div>
    </div>
    <div id="selectListContent" class="cf-select-content" :class="{active:selectVisible}">
      <ul class="cf-select-list">
        <li v-for="(item, index) in selectList" @click="selectListClick(index)">{{item.text}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
  import ChatControl from '../../control/ChatControl'

  export default {
    data() {
      return {
        selectVisible: !1,
        selectList:ChatControl.instance.getSelectList()
      }
    },
    methods: {
      selectToggleClick(){
        if(ChatControl.instance.isChating()) return;
        this.selectVisible = !this.selectVisible;
        if(this.selectVisible){
          document.getElementById('selectListContent').scrollTop = 0;
        }
        this.$emit('selectVisible', this.selectVisible);
      },
      selectListClick(index){
        this.selectVisible = !1;
        ChatControl.instance.updateList(this.selectList[index]);
        this.$emit('selectVisible', this.selectVisible);
      }
    },
    components: {
    }
  }
</script>
<style lang="scss">
  .chat-foot{
    position: fixed;
    z-index: 3;
    left: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-shadow: 0 -.1rem .1rem #ccc;

    :before{
      border-top: 0;
    }
  }

  .cf-options{
    display: -webkit-flex;
    display: flex;
    padding: .8rem;

    .cf-input{
      -webkit-flex: 1;
      flex: 1;

      margin: 0 .5rem;
      border: .1rem solid #4688F8;
      border-radius: .5rem;
    }

    .cf-select-btn{
      .cwh-bottom-arrows{
        display: none;
      }

      &.active{
        .cwh-top-arrows{
          display: none;
        }
        .cwh-bottom-arrows{
          display: block;
        }
      }
    }

    .icon-hsuna{
      line-height: 1;
      vertical-align: bottom;
      color: #4688F8;
    }

    .cwh-help{
      font-size: 2.8rem;
    }
    .cwh-top-arrows,
    .cwh-bottom-arrows{
      font-size: 3rem;
    }
  }

  .cf-select-content{
    height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    transition:height 500ms;
    -webkit-transition:height 500ms;
    background-color: #4688F8;

    &.active{
      height: 16rem;
    }

    .cf-select-list{
      padding: .2rem .8rem;

      li{
        margin: .6rem 0;
        padding: .6rem;
        list-style: none;
        border-radius: .5rem;
        background-color: #fff;
      }
    }
  }
</style>
