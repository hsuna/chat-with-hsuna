<template>
  <div class="chat-body" :class="{active:selectVisible}">
    <div class="msg-rows">
      <template v-for="chat in chatList">
        <div class="msg-row">
          <hsuna-msg v-if="chat.name == 'hsuna'" :chat="chat">
          </hsuna-msg>
          <me-msg v-if="chat.name == 'me'">
            <template slot="msg">{{chat.content}}</template>
          </me-msg>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import HsunaMsg from '../msg/HsunaMsg.vue'
  import MeMsg from '../msg/MeMsg.vue'

  import ChatControl from '../../control/ChatControl.js'

  export default {
    props: ['selectVisible'],
    data() {
      return {
        chatList:ChatControl.instance.getChatList()
      }
    },
    components: {
      HsunaMsg,
      MeMsg
    }
  }
</script>

<style lang="scss">
  .chat-body{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 3.7rem;
    padding-bottom: 4.2rem;
    transition: padding-bottom 500ms;
    -webkit-transition: padding-bottom 500ms;

    &.active{
      padding-bottom: 20.2rem;
    }
  }
  .msg-rows{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1rem 0;
    background-color: #F2F2F2;

    .msg-row{
      margin-bottom: .4rem;
    }
  }
</style>
