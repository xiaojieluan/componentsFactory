<template>
   <div id="main">
     <div class="one">
       <p>1、元素已知宽高，采用relative和absolute定位</p>
       <div class="outer1">
         <div class="inner1"></div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'centered-display'
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
</style>
