<template>
  <div>
    <chat-head></chat-head>
    <chat-body :chats="chats"></chat-body>
    <chat-foot @sendmsg="sendMessage"></chat-foot>
  </div>
</template>

<script>
  import ChatHead from '../components/chat/ChatHead'
  import ChatBody from '../components/chat/ChatBody'
  import ChatFoot from '../components/chat/ChatFoot'

  export default {
    props:["chatdata"],
    data() {
      return {
        chats: []
      }
    },
    created (){
    },
    methods:{
      sendMessage(){

      }
    },
    components: {
      ChatHead,
      ChatBody,
      ChatFoot
    }
  }
</script>
