<template>
  <div>
    <el-button size="mini" @click="backHome"
    style="position:absolute;top:5px;left:5px;">返回主页</el-button>
  </div>
</template>

<script>
export default {
  name: 'back-to-home',
  methods:{
    backHome:function(){
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
