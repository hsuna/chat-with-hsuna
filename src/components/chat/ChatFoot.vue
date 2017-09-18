<template>
  <div class="chat-foot weui-cell">
    <div class="weui-cell__bd">
      <div style="margin-right:1rem;">
        <textarea class="weui-textarea" rows="1" v-model="message"></textarea>
      </div>
    </div>
    <div class="weui-cell__fd">
      <button type="button" class="weui-btn weui-btn_primary" @click="sendClick">发送</button>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
    return {
      message:''
    }
  },
  created () {

  },
  methods: {
    sendClick:function(){
      if('' == this.message.trim()){
        this.$toast({content: '发送信息不能为空'})
        return;
      }
      this.$emit('sendmsg', this.message);
      this.message = '';
    }
  },
  components: {
  }
  }
</script>
<style>
  .chat-foot{
    position: fixed;
    z-index: 3;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: .8rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-shadow: 0 -.1rem .1rem #ccc;
  }

  .chat-foot:before{
    border-top: 0;
  }

  .chat-foot .weui-cell__bd textarea {
    border-bottom: 1px solid #ccc;
    font-size: 1.6rem;
  }

  .chat-foot .weui-cell__bd textarea:focus{
    border-bottom-color: #1AAD19;
  }

  .chat-foot .weui-cell__fd button {
    line-height: 2
  }
</style>
