<template>
  <div id="main">
    <div id="box">
      <div id="ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'move-ball',
  mounted:function(){
    let box = document.getElementById("box");
    let ball = document.getElementById("ball");
    ball.style.backgroundColor = this._getRandomColor()

    //球的坐标
    /*
    ball.style.left = Math.random()*990 +'px';
    ball.style.top = Math.random()*990 +'px';
    console.log( ball.style.left,ball.style.top);
*/

    //box长宽
    let width = box.clientWidth;
    let height = box.clientHeight;
    let speed_x = Math.floor(Math.random()*10);  //水平速度
    let speed_y = Math.floor(Math.random()*10);  //垂直速度

    let x = 0; //水平偏移量
    let y = 0;  //垂直偏移量

    function moveBall(){
      x += speed_x;
      y += speed_y;
      let kx = width - ball.offsetWidth;
      let ky = height - ball.offsetHeight;

      //水平
      if(kx<=x || x<=0){
        speed_x = -speed_x;
      }
      if(ky <= y || y<=0){
        speed_y = -speed_y;
      }
      ball.style.transform = 'translate(' + x + 'px,' + y + 'px)'
    }
    setInterval(function(){
      moveBall();
    },10);

  },
  methods:{
    //私有方法，随意生成一种颜色
    _getRandomColor(){
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    }
  }
}
</script>

<style scoped>
  #box{
    width:1000px;
    height:500px;
    position:relative;
    overflow: hidden;
    border:1px solid black;
  }
  #ball{
    width:10px;
    height:10px;
    border-radius: 5px;
    position:absolute;
    /*background-color: red;*/
  }

</style>
