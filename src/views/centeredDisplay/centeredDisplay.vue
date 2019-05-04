<template>
  <div>
    <back-to-home></back-to-home>
   <div id="main">
     <div class="one">
       <p>1、元素已知宽高，采用relative和absolute定位</p>
       <div class="outer1">
         <div class="inner1"></div>
       </div>
     </div>
     <div class="two">
       <p>2、元素未知宽度，采用position和transform结合使用</p>
       <div class="outer2">
         <div class="inner2"></div>
       </div>
     </div>
     <div class="three">
       <p>3、采用flex布局</p>
       <div class="outer3">
         <div class="inner3"></div>
       </div>
     </div>
     <div class="three">
       <p>4、table-cell布局</p>
       <div class="outer3">
         <div class="inner3"></div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
  import backToHome from '@/components/backToHome'
export default {
  name: 'centered-display',
  components:{
    backToHome
  }
}
</script>

<style scoped lang="stylus">
.outer1{
  width:1000px;
  height:400px;
  background-color:#8297b2;
  margin:0 auto;
  .inner1{
    width:500px;
    height:200px;
    background-color:#d58948;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-250px;
    margin-top:-100px;
  }
}
.outer2{
  width:1000px;
  height:400px;
  background-color:#8297b2;
  margin:0 auto;
  .inner2{
    width:500px;
    height:200px;
    background-color:#d58948;
    position:absolute;
    transform :translate(50%,50%);
  }
}
.outer3{
  width:1000px;
  height:400px;
  background-color:#8297b2;
  margin:0 auto;
  display: flex;//flex布局
  justify-content: center;//使子项目水平居中
  align-items: center;//使子项目垂直居中
  .inner3{
    width:500px;
    height:200px;
    background-color:#d58948;
  }
}
.outer4{
  width:1000px;
  height:400px;
  background-color:#8297b2;
  margin:0 auto;
  display:table;
  text-align:center; /*水平居中*/
  vertical-align :middle; /*垂直居中*/
  .inner4{
    width:500px;
    height:200px;
    background-color:#d58948;
    display:table-cell;
  }
}
</style>
