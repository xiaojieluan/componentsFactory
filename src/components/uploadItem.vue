<template>
  <div id="upload">
    <input type="file" id="btn_file" style="display:none">
    <button @click="handleSelectFile" class="upload_file">上传文件</button>
    <input type="url" id="input_url" placeholder="请点击检测按钮检测">
    <button type="button" class="btn_check" @click="handlePicture">检测</button>
  </div>
</template>

<script>
export default {
  name: "upload-item",
  methods: {
    handleSelectFile: function () {
      document.getElementById('btn_file').click()
    },
    handlePicture: function () {
      if (document.getElementById('input_url').value === '') {
        let imgFile = document.getElementById('btn_file').files[0]
        let reader = new FileReader();
        //将文件以Data URL形式读入页面
        reader.readAsDataURL(imgFile);
        this.$emit('handlePicture', reader)
      } else {
        let imgUrl = document.getElementById('input_url').value
        this.$emit('showUrlImg',imgUrl)
      }
    }
  }
}
</script>

<style scoped>
  #upload{
    display:flex;
    flex-direction: row;
    justify-content: center;
    padding-top:20px;
    padding-bottom:20px;
  }
  .upload_file{
    color:#333333;
    background-color: #fff;
    padding:10px 30px;
    margin-right:10px;
    outline:none;
    border:1px solid #ccc;
  }
  #input_url{
    padding:10px;
    flex-grow:1;
    outline:none;

  }
  .btn_check{
    color:#fff;
    background-color: #3399FF;
    padding:10px 30px;
    outline:none;
    border:none;
  }

</style>
