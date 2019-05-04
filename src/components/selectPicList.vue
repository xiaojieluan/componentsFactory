<template>
    <div id="list">
      <!--<span @click="toLeft">&lt</span>-->
      <div id="showlist">
        <div class="imglist" v-for="image in imageList" :key="image.id">
          <img :src="image.src" @click="clickPicture(image.src)">
        </div>
      </div>
      <!--<span @click="toRight">&gt</span>-->
    </div>
</template>

<script>
export default {
  name: 'select-pic-list',
  data(){
    const imageList = [
      {id:1,src:'static/img/face-1.jpg'},
      {id:3,src : 'static/img/face-3.jpg'},
      {id:4,src: 'static/img/face-4.jpg'},
      {id:5,src: 'static/img/face-5.jpg'},
      {id:6,src: 'static/img/face-6.jpg'}
      ]
    return {
      imageList:imageList
    }
  },
  methods:{
    clickPicture:function(src){
      console.log(src)
       this.$emit('clickPicture',src)
    }
  }
}
</script>

<style scoped>
#list{
  padding-top:20px;
  /*padding-bottom:20px;*/
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

}
#showlist{
  flex-grow:1;
  display: flex;
  flex-wrap:nowrap;
  overflow: hidden;
  margin:0 5px;
}
  .imglist{
    width:25%;
  }
  img{
    width:80%;
    margin:0 auto;
  }
</style>
