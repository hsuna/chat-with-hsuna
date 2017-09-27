<template>
  <div class="other-wrap">
    <div class="other-wrap-head">
      <slot name="head"></slot>
    </div>
    <div class="other-wrap-info">
      <div class="msg"><slot name="msg"></slot></div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .other-wrap{
    color: #000;
  }
  .other-wrap-head{
    width: 4.2rem;
    height: 4.2rem;
    float: left;
  }
  .other-wrap-info{
    margin-left: 5.2rem;
    margin-right: 4rem;
  }
  .other-wrap-info .name{
    margin-top: .4rem;
    line-height: 1;
    font-size: 1.2rem;
    color: #999;
  }
  .other-wrap-info .msg{
    display: inline-block;
    position: relative;
    margin-top:.6rem;
    padding: .1rem .6rem;
    border-radius: .4rem;
    font-size: 1.4rem;
    text-align: left;
    word-break:break-all;
    background-color: #a0e24d;
  }
  .other-wrap-info .msg:before{
    content: '';
    position: absolute;
    top: .8rem;
    left: -.4rem;
    display: block;
    width: 0;
    height: 0;
    border-top: .4rem solid transparent;
    border-right: .4rem solid #a0e24d;
    border-bottom: .4rem solid transparent;
  }
</style>
