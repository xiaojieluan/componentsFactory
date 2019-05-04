<template>
  <div>
    <back-to-home></back-to-home>
 <div id="main">
   <div class="img img1"><img src="static/img/4.jpg"></div>
   <div class="img img2"><img src="static/img/17.jpg"></div>
 </div>
  </div>
</template>

<script>
  import backToHome from '@/components/backToHome'
export default {
    name: 'transform-example',
  components:{
    backToHome
  }
}
</script>

<style scoped>
  #main{
    width:30%;
    margin:0 auto;
  }
.img{
  box-sizing: border-box;
  width:100%;
  border:1px solid #666;
  /*margin-top: 50px;*/
  box-shadow: 2px 3px 5px 4px #ccc;
  /*x轴 y轴 阴影模糊度 扩展半径 颜色 内外阴影*/
  /*font-size: 0;*/
  line-height: 0;
}
  img{
   width:100%;
    /*display:block;*/
    /*vertical-align: middle;*/
  }
  .img1{
    /*transform:rotate(30deg);*/
    transform: rotate3d(3,2,5,15deg);
  }
  .img2{
    /*transform:rotate(-15deg);*/
  }
</style>
