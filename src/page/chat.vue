<template>
  <div>
    <chat-head></chat-head>
    <chat-body></chat-body>
    <chat-foot></chat-foot>
  </div>
</template>

<script>
  import ChatHead from '../components/chat/ChatHead'
  import ChatBody from '../components/chat/ChatBody'
  import ChatFoot from '../components/chat/ChatFoot'

  export default {
    data() {
      return {
        chatinfo:chatinfo.get()
      }
    },
    created (){
    },
    methods:{
      sendMessage(content){
        var user = userinfo.get();
        this.$socket.emit('message', Object.assign(user, {content}));
      }
    },
    components: {
      ChatHead,
      ChatBody,
      ChatFoot
    }
  }
</script>
