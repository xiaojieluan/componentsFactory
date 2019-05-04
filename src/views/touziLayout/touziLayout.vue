<template>
  <div>
    <back-to-home></back-to-home>
  <div id="main">
    <div class="box box0">
      <span></span>
    </div>
    <div class="box box1">
      <span v-for="index in 2" :key="index"></span>
    </div>
    <div class="box box2">
      <span class="item1"></span>
      <span class="item2"></span>
      <span class="item3"></span>
    </div>
    <div class="box box3">
      <div class="row">
        <span v-for="index in 2" :key="index"></span>
      </div>
      <div class="row">
        <span v-for="index in 2" :key="index"></span>
      </div>
    </div>
    <div class="box box4">
      <div class="row">
        <span v-for="index in 2" :key="index"></span>
      </div>
      <div class="row">
        <span></span>
      </div>
      <div class="row">
        <span v-for="index in 2" :key="index"></span>
      </div>
    </div>
    <div class="box box5">
      <div class="row">
        <span v-for="index in 2" :key="index"></span>
      </div>
      <div class="row">
        <span v-for="index in 2" :key="index"></span>
      </div>
      <div class="row">
        <span v-for="index in 2" :key="index"></span>
      </div>
    </div>
    <div class="box box6">
      <div class="row">
        <span v-for="index in 3" :key="index"></span>
      </div>
      <div class="row">
        <span></span>
      </div>
      <div class="row">
        <span v-for="index in 3" :key="index"></span>
      </div>
    </div>
    <div class="box box6">
      <div class="row">
        <span v-for="index in 3" :key="index"></span>
      </div>
      <div class="row">
        <span v-for="index in 2" :key="index"></span>
      </div>
      <div class="row">
        <span v-for="index in 3" :key="index"></span>
      </div>
    </div>
    <div class="box box6">
      <div class="row">
        <span v-for="index in 3" :key="index"></span>
      </div>
      <div class="row">
        <span v-for="index in 3" :key="index"></span>
      </div>
      <div class="row">
        <span v-for="index in 3" :key="index"></span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import backToHome from '@/components/backToHome'
export default {
  name: 'touzi-layout',
 components:{
   backToHome
 }
}
</script>

<style scoped lang="stylus">
  #main{
    width:80%;
    margin:10px auto;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-around;
  }
  .box{
    border:1px solid #666;
    border-radius: 10%;
    width:80px;
    height:80px;
    display:flex;
    box-sizing :border-box;
    padding:5px;
    justify-content :space-around;
  }
  span{
    display:inline-block;
    width:10px;
    height:10px;
    background-color: #666;
    border-radius: 50%;
  }
  .box0{
    flex-direction: row;
    align-items: center;
    /*justify-content: center;*/
  }
  .box1{
    flex-direction: row;
    align-items: center;
    /*justify-content: space-around;*/
  }
  .box2{
    /*justify-content: space-around;*/
    align-items :center;
    .item1{
      align-self: flex-start;
    }
    .item3{
      align-self: flex-end;
    }
  }
.box3,.box4,.box5,.box6{
  flex-direction :column;
  /*justify-content: space-around;*/
}
  .row{
    display:flex;
    justify-content :space-around;
  }
</style>
