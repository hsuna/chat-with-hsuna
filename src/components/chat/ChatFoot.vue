<template>
  <div class="chat-foot">
    <div class="cf-options">
      <div class="cf-help">
        <icon name="help" scale="3.4"></icon>
      </div>
      <div class="cf-input" @click="selectToggleClick">
      </div>
      <div class="cf-select-btn" :class="{active:selectVisible}" @click="selectToggleClick">
        <icon class="top-arrows" name="top-arrows" scale="3.4"></icon>
        <icon class="bottom-arrows" name="bottom-arrows" scale="3.4"></icon>
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
      .bottom-arrows{
        display: none;
      }

      &.active{
        .top-arrows{
          display: none;
        }
        .bottom-arrows{
          display: block;
        }
      }
    }

    .svg-icon{
      -webkit-transform: translateY(.2rem);
      transform: translateY(.2rem);
    }
    .svg-icon path{
      fill:rgba(70, 136, 248, 1);
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
        padding: .4rem;
        list-style: none;
        border-radius: .5rem;
        background-color: #fff;
      }
    }
  }
</style>
