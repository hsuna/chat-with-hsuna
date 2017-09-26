<template>
  <loading v-if="loadData.status == 'loading'" :progress="loadData.progress"></loading>
  <chat v-else-if="loadData.status == 'chat'"></chat>
  <error v-else-if="loadData.status == 'error'" :error="error"></error>
</template>


<script>
  import Loading from './page/loading.vue';
  import Chat from './page/chat.vue';
  import Error from './page/error.vue';

  import ChatControl from './control/ChatControl'

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
        }
      }
    },
    created() {
      this.$http.get('/static/ajax/config.json', {
        emulateJSON: true,
        progress:evt=>{
          this.loadData.progress = evt.total && Math.floor(100*evt.loaded/evt.total);
        }
      }).then(response => {
        this.loadData.status = LOAD_STATUS.SUCCEED;
        ChatControl.instance.initConfig(response.body);
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
