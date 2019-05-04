<template>
   <div id="main">
     <el-button type="primary" @click="toFlexExamplePage">测试flex弹性布局</el-button>
     <el-button type="primary" @click="toMoveBallPage">小球反射运动</el-button>
     <el-button type="primary" @click="toCentereDisplay">水平垂直居中多种解法</el-button>
     <el-button type="primary" @click="toTriangle">CSS实现一个三角形</el-button>
     <br /><br />
     <el-button type="primary" @click="toSearchFace">人脸搜索上传图片</el-button>
     <el-button type="primary" @click="toTouziLayout">flex实现骰子布局</el-button>
     <el-button type="primary" @click="toAnimation">CSS3 animation动画的实现</el-button>
     <el-button type="primary" @click="toTransition">CSS3 transition动画的实现</el-button>
     <br /><br />
     <el-button type="primary" @click="toTransform">CSS3 transform变换</el-button>
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
    },
    toTriangle:function(){
      this.$router.push({
        path:'/triangle'
      })
    },
    toSearchFace:function(){
      this.$router.push({
        path:'/searchface'
      })
    },
    toTouziLayout:function(){
      this.$router.push({
        path:'/touzi'
      })
    },
    toAnimation:function(){
      this.$router.push({
        path:'/animation'
      })
    },
    toTransition:function(){
      this.$router.push({
        path:'/transition'
      })
    },
    toTransform:function(){
      this.$router.push({
        path:'/transform'
      })
    }


  }
}
</script>

<style scoped>

</style>
