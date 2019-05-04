<template>
  <div>
  <back-to-home></back-to-home>
  <div id="main">
    <div class="one"></div>
  </div>
  </div>
</template>

<script>
  import backToHome from '@/components/backToHome'
export default {
  name: 'animation-example',
  components:{
    backToHome
  }
}
</script>

<style scoped>
  /*
  @keyframes change {
    from{
      width:80px;
      height:80px;
      background-color: #CCCCFF;
      left:0;
      top:0;

    }
    to{
      width:50px;
      height:120px;
      background-color: #FFCCFF;
      left:600px;
      top:200px;
    }
  }
.one{
  position:absolute;
  left:0;
  top:0;
  animation:change 5s ease 2s infinite alternate;
}*/
  #main{
    width:80%;
    height:400px;
    border:2px solid #990000;
    margin:10px auto;
  }
  @keyframes move {
    0%{
      width:0;
      height:0;
      top:400px;
      left:0;
    }
    100%{
      width:50%;
      height:340px;
      top:60px;
    }
  }
  .one{
    position:relative;
    background-color: #990000;
    animation:move 2s 1;
    animation-fill-mode:forwards;
  }
</style>
