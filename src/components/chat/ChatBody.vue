<template>
  <div class="chat-body">
    <div class="cb-bg">
      <template v-for="chat in chatList">
        <selfMsg v-if="chat.type == 'self'">
          <template slot="msg">{{chat.content}}</template>
        </selfMsg>
        <otherMsg v-if="chat.type == 'other'">
          <template slot="msg">{{chat.content}}</template>
        </otherMsg>
      </template>
    </div>
  </div>
</template>

<script>
  import selfMsg from '../msg/SelfMsg.vue'
  import otherMsg from '../msg/OtherMsg.vue'

  import ChatControl from '../../control/ChatControl.js'

  export default {
    data() {
      return {
        chatList:ChatControl.instance.getChatList()
      }
    },
    components: {
      selfMsg,
      otherMsg
    }
  }
</script>

<style>
  .chat-body{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 3.7rem;
    padding-bottom: 4.2rem;
  }
  .cb-bg{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 1rem 0;
    background-color: #F2F2F2;
  }
  .cb-bg>div{
    padding: .8rem;
  }
</style>
