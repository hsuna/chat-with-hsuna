<template>
  <div class="loading-content">
    <div class="loading-inner">
      <mt-spinner class="loading-circle" type="fading-circle" color="#fff"></mt-spinner>
      <p class="loading-progress">{{progress}}%</p>
    </div>
  </div>
</template>

<script>
  import { Spinner } from 'mint-ui';

  export default {
    props:["progress"],
    data() {
      return {
      }
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
  .loading-inner{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .loading-circle{
    display: inline-block;
  }
</style>
