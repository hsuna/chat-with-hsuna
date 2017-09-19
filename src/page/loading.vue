<template>
  <div class="loading-content">
    <mt-spinner class="loading-circle" type="fading-circle" color="#fff"></mt-spinner>
    <p class="loading-progress">{{progress}}%</p>
  </div>
</template>

<script>
  import { Spinner } from 'mint-ui';

  export default {
    data() {
      return {
        progress: 0
      }
    },
    created() {
      var that = this;
      this.$http.get('/static/ajax/config.json', {
        progress(evt) {
          that.progress = evt.total && Math.floor(100*evt.loaded/evt.total);
        }
      }).then(response => {
        // success callback
      }, response => {
        // error callback
      });
    },
    components: {
      Spinner
    }
  }
</script>

<style>
  .loading-content {
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    background-color: #89cff0;
  }
  .loading-circle{
    display: inline-block;
    margin: 49% auto 0;
  }
</style>
