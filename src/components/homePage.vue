<template>
   <div id="main">
     <el-button type="primary" @click="toFlexExamplePage">测试flex弹性布局</el-button>
     <el-button type="primary" @click="toMoveBallPage">小球反射运动</el-button>
     <el-button type="primary" @click="toCentereDisplay">水平垂直居中多种解法</el-button>
   </div>
</template>

<script>
export default {
  name: 'home-page',
  methods:{
    toFlexExamplePage:function(){
      this.$router.push({
        path:'/flex'
      })
    },
    toMoveBallPage:function(){
      this.$router.push({
        path:'/ball'
      })
    },
    toCentereDisplay:function(){
      this.$router.push({
        path:'/centered'
      })
    }

  }
}
</script>

<style scoped>

</style>
