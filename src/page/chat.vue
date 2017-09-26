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
      }
    },
    components: {
      ChatHead,
      ChatBody,
      ChatFoot
    }
  }
</script>
