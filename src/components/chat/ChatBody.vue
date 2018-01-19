<template>
  <div class="chat-body" :class="{active:selectVisible}">
    <div id="msgRowConent" class="msg-rows">
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
    watch: {
      chatList(){
        var msgRowConent = document.getElementById('msgRowConent');
        msgRowConent.scrollTop = msgRowConent.scrollHeight;
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
    padding-top: 4.1rem;
    padding-bottom: 4.8rem;
    transition: padding-bottom 500ms;
    -webkit-transition: padding-bottom 500ms;

    &.active{
      padding-bottom: 20.6rem;
    }
  }
  .msg-rows{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding-bottom: 2rem;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #F2F2F2;

    .msg-row{
      margin-bottom: .4rem;
    }
  }
</style>
