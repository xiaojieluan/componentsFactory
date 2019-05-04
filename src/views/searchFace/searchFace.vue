<template>
  <div>
    <back-to-home></back-to-home>
    <div>
      <h3>功能演示</h3>
      <div class="description">
        <p>即刻体验Face++的人脸搜索能力。请上传本地图片或提供图片URL。对于左侧的人脸，
          Face++会在集合中找出最相似的五个人脸。</p>
        <p>请登录您的账号，以便管理您的人脸集合。</p>
        <p>该功能演示是基于Search API和FaceSet API组搭建的。如果您对技术能力有特别要求，
          请查看下方的产品目录或联系我们。</p>
      </div>

      <div class="showFuntion">
        <div class="left">
          <div class="img">
            <img id="image" src='static/img/face-2.jpg'
          alt="url错误，请检查url，不能输入本地url"></div>
          <upload-item @handlePicture="handleChangePic"
          @showUrlImg="handlechangURLPic"></upload-item>
          <select-pic-list @clickPicture="handleClickPicture"></select-pic-list>
        </div>
        <div class="right">
          <h3>Response JSON</h3>
          <div id="result-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import uploadItem from '@/components/uploadItem'
 import selectPicList from '@/components/selectPicList'
 import backToHome from '@/components/backToHome'
export default {
  name: "search-face",
  components:{
    uploadItem,
    selectPicList,
    backToHome
  },
  methods:{
    handleChangePic(reader){
      //console.log(reader)
      let image = document.getElementById('image')
      reader.onload = function(){ //需要onload中写，不然取得的值可能为空
        image.src = reader.result
      }
    },
    handlechangURLPic(url){
      let image = document.getElementById('image') //不能访问本地图片
      image.src = url

    },
    handleClickPicture:function(src){
      document.getElementById('image').src = src
    }
  }
}
</script>

<style scoped lang="stylus">
.showFuntion{
  display:flex;
  flex-direction: row;
  justify-content: center;
}
.left{
  width:40%;
  /*height:30px;*/
  margin-right:5%;
  //border:1px solid black;
}
.right{
  width:40%;
  /*height:30px;*/
  border:1px solid #ccc;
  background-color :#eee;
}
  .img{
    position:relative;
    width:100%;
    height:0;
    padding-top: 100%; //padding-bottom都可以
    /*margin-bottom:20px;*/
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

</style>
