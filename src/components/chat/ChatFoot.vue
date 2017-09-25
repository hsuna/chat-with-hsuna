<template>
  <div class="chat-foot">
    <div class="cf-options">
      <div class="cf-help">
        <i class="icon-hsuna cwh-help"></i>
      </div>
      <div class="cf-input">
      </div>
      <div class="cf-select-btn">
        <i class="icon-hsuna cwh-top-arrows"></i>
      </div>
    </div>
    <div class="cf-select-list">
    </div>
  </div>
</template>


<script>
  export default {
    data() {
    return {
      popupVisible: !1,
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

  .cf-help{

  }
</style>
