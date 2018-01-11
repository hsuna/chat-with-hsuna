<template>
  <div>
    <chat-head></chat-head>
    <chat-body :selectVisible="selectVisible"></chat-body>
    <chat-foot v-on:selectVisible="selectVisibleHandler"></chat-foot>
  </div>
</template>

<script>
  import ChatHead from '../components/chat/ChatHead'
  import ChatBody from '../components/chat/ChatBody'
  import ChatFoot from '../components/chat/ChatFoot'

  export default {
    data() {
      return {
        selectVisible: !1
      }
    },
    methods: {
      selectVisibleHandler(val) {
        this.selectVisible = val;
      }
    },
    components: {
      ChatHead,
      ChatBody,
      ChatFoot
    }
  }
</script>
