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
  name: 'transition-example',
  components:{
    backToHome
  }
}
</script>

<style scoped>
.one {
 width:100px;
  height:100px;
  background-color: #666699;
  transition:width 2s ;

}
  .one:hover{
    width:600px;
  }
</style>
