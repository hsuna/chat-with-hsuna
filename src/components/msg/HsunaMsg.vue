<template>
  <div class="other-wrap">
    <div class="other-wrap-info">
      <div class="msg"><slot name="msg"></slot></div>
    </div>
  </div>
</template>

<style lang="scss">
  .other-wrap{
    color: #000;
  }

  .other-wrap-info{
    margin-left: 5.2rem;
    margin-right: 4rem;

    .msg{
      display: inline-block;
      position: relative;
      margin-top:.6rem;
      padding: .1rem .6rem;
      border-radius: .4rem;
      font-size: 1.4rem;
      text-align: left;
      word-break:break-all;
      background-color: #fff;
      /*animation:mymove 1s 1;
      -webkit-animation:mymove 1s 1;*/
      transition: width,height 1s;
      -webkit-transition: width,height 1s;
      width: 0px;
      height: 0px;

      &.active{
        width: 100px;
        height: 100px;
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
    from {width:0px; height:0; overflow: hidden;}
    to {width:inherit; height: inherit;}
  }

  @-webkit-keyframes mymove /*Safari and Chrome*/
  {
    from {width:0px; height:0; overflow: hidden;}
    to {width:inherit; height: inherit;}
  }
</style>
