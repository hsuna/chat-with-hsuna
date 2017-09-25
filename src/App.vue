<template>
  <loading v-if="loadData.status == 'loading'" :progress="loadData.progress"></loading>
  <chat v-else-if="loadData.status == 'chat'" :chatdata="chatData"></chat>
  <error v-else-if="loadData.status == 'error'" :error="error"></error>
</template>


<script>
  import Loading from './page/loading.vue';
  import Chat from './page/chat.vue';
  import Error from './page/error.vue';

  var LOAD_STATUS = {
    LOADING: 'loading',
    SUCCEED: 'chat',
    ERROR: 'error'
  };

  export default {
    data() {
      return {
        loadData: {
          status: LOAD_STATUS.LOADING,
          progress: 0
        },
        chatData: {}
      }
    },
    created() {
      var that = this;
      this.$http.get('/static/ajax/config.json', {
        emulateJSON: true,
        progress(evt) {
          that.loadData.progress = evt.total && Math.floor(100*evt.loaded/evt.total);
        }
      }).then(response => {
    console.log(response);
        this.loadData.status = LOAD_STATUS.SUCCEED;
        this.chatData = response.body;
      }, response => {
        this.loadData.status = LOAD_STATUS.ERROR;
      });
    },
    components: {
      Loading,
      Chat,
      Error
    }
  };
</script>
