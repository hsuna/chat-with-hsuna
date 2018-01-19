<template>
  <div class="hsuna-wrap">
    <div class="hsuna-wrap-info">
      <div class="msg">
        <ImageText class="text" v-if="chat.type == 'text'" :content="chat.content"></ImageText>
        <img class="img" v-if="chat.type == 'image'" :src="chat.path" />
      </div>
    </div>
  </div>
</template>

<script>
  import ImageText from '../other/ImageText.vue';

  export default {
    props: ['chat'],
    components: {
      ImageText
    }
  }
</script>

<style lang="scss">
  .hsuna-wrap{
    color: #000;
  }

  .hsuna-wrap-info{
    margin-left: 5.2rem;
    margin-right: 4rem;

    .msg{
      display: inline-block;
      position: relative;
      margin-top: 1rem;
      padding: .2rem .6rem;
      border-radius: .4rem;
      font-size: 1.4rem;
      text-align: left;
      word-break:break-all;
      background-color: #fff;
      transform-origin: 0 0 0;
      -webkit-transform-origin: 0 0 0;
      animation:mymove .4s 1;
      -webkit-animation:mymove .4s 1;

      .img{
        width: 10rem;
        height: auto;
        margin: .6rem .2rem;
      }

      &:before{
        content: '';
        position: absolute;
        top: .8rem;
        left: -.4rem;
        display: block;
        width: 0;
        height: 0;
        border-top: .4rem solid transparent;
        border-right: .4rem solid #fff;
        border-bottom: .4rem solid transparent;
      }
    }
  }

  @keyframes mymove
  {
    from {transform: scale(0);}
    to {transform: scale(1);}
  }

  @-webkit-keyframes mymove /*Safari and Chrome*/
  {
    from {-webkit-transform: scale(0);}
    to {-webkit-transform: scale(1);}
  }
</style>
