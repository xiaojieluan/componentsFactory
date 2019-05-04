<template>
  <div>
    <back-to-home></back-to-home>
  <div id="main">
    <div>
      <h3>无边框的三角形</h3>
        <p>向上的三角形</p>
        <div class="up"></div>
        <p>向下的三角形</p>
        <div class="down"></div>
      <h3>有边框的三角形</h3>
        <p>向左的三角形</p>
        <div class="left"><span></span></div>
        <p>向右的三角形</p>
        <div class="right"><span></span></div>
      <h3>气泡框的三角形</h3>
       <div class="bubble">
          <a href="#">芃芃其麦</a>
          <div class="popup">
            <span><em></em></span>气泡框三角形
          </div>
       </div>
      <h3>直角三角形</h3>
      <div class="right-tri1"><span></span></div>
      <div class="right-tri2"><span></span></div>
    </div>

  </div>
  </div>
</template>

<script>
  import backToHome from '@/components/backToHome'
export default {
  name: 'triangle',
  components:{
    backToHome
  }
}
</script>

<style scoped>
.up{
  width:0;
  height:0;
  border-width:0 30px 30px;
  border-style:solid;
  border-color:transparent transparent #333;/*透明 透明  灰*/
  margin:0 auto;
  position:relative;
}
.down{
  width:0;
  height:0;
  border-width:30px 30px 0 30px;
  border-style:solid;
  border-color:#333 transparent transparent;/*灰 透明 透明*/
  margin:0 auto;
  position:relative;
}
.left{
  width:0;
  height:0;
  border-width:30px 30px 30px 0;
  border-style:solid;
  border-color:transparent #333 transparent transparent;/*透明 灰 透明 透明 */
  margin:40px auto;
  position:relative;
}
.left span{
  display:block;
  width:0;
  height:0;
  border-width:28px 28px 28px 0;
  border-style:solid;
  border-color:transparent #fc0 transparent transparent;/*透明 黄 透明 透明 */
  position:absolute;
  top:0;
  left:0;
  box-shadow:0 0 2px rgba(0,0,0,1); /*给left的span加一个阴影*/
}
.right{
  width:0;
  height:0;
  border-width:30px 0 30px 30px;
  border-style:solid;
  border-color:transparent transparent transparent #333;/*透明 透明 透明 灰*/
  margin:0 auto;
  position:relative;
}
  .right span{
    display:block;
    width:0;
    height:0;
    border-width:28px 0 28px 28px;
    border-style:solid;
    border-color:transparent transparent transparent #fc0;/*透明 透明 透明 黄*/
    position:absolute;
    top:-28px;
    left:-29px;
  }
  .bubble{
    width:200px;
    height:80px;
    margin:0 auto 20px;
    position:relative;
  }
  a{
    color:#333;
    font-weight:bold;
    text-decoration:none;
  }
  .popup{
    width:100px;
    background:#fc0; /*黄色*/
    padding:10px 20px;
    color:#333;
    border-radius:4px;
    position:absolute;
    top:30px;
    left:30px;
    border:1px solid #333;
  }
  .popup span { /*span设置成三角形外面的边框*/
    display:block;/* 要设置成block才能设置宽高*/
    width:0;
    height:0;
    border-width:0 10px 10px; /*上0下10，左右10*/
    border-style:solid;
    border-color:transparent transparent #333; /*上transparent 左右transparent 下灰*/
    position:absolute;
    top:-10px; /*span是div子元素，要往上移border-width*/
    left:50%;/* 三角形居中显示 */
    margin-left:-10px;/* 三角形居中显示 */
  }
  em{/*em设置成里边黄色的三角形*/
    display:block;
    width:0;
    height:0;
    border-width:0 10px 10px;
    border-style:solid;
    border-color:transparent transparent #fc0;
    position:absolute;
    top:1px;/*em是span的子元素，所以向下一点就行，top为1px*/
    left:-10px;
  }
  .right-tri1{
    width:0;
    height:0;
    border-width:30px;
    border-style:solid;
    border-color:transparent #fc0 #fc0 transparent;
    margin: 0 auto;
  }
  .right-tri2{
    width:0;
    height:0;
    border-width:30px;
    border-style:solid;
    border-color:transparent transparent #fc0 transparent;
    margin: 0 auto;
  }
</style>
