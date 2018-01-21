<template>
  <div class="me-wrap">
    <div class="me-wrap-info">
      <div class="msg">
        <ImageText class="text" :content="chat.content"></ImageText>
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
    .me-wrap{
      text-align: right;
      color: #000;

      .me-wrap-head{
        width: 4.2rem;
        height: 4.2rem;
        float: right;
      }

      .me-wrap-info {
        margin-left: 4rem;
        margin-right: 5.2rem;

        .name {
          margin-top: .4rem;
          line-height: 1;
          font-size: 1.2rem;
          color: #999;
        }

        .msg {
          display: inline-block;
          position: relative;
          margin-top: 1rem;
          padding: .2rem .6rem;
          border-radius: .4rem;
          font-size: 1.4rem;
          text-align: left;
          word-break: break-all;
          background-color: #b2ebff;
          transform-origin: 100% 0 0;
          -webkit-transform-origin: 100% 0 0;
          animation:mymove .4s 1;
          -webkit-animation:mymove .4s 1;

          &:before {
            content: '';
            position: absolute;
            top: .8rem;
            left: 100%;
            display: block;
            width: 0;
            height: 0;
            border-top: .4rem solid transparent;
            border-left: .4rem solid #b2ebff;
            border-bottom: .4rem solid transparent;
          }
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
