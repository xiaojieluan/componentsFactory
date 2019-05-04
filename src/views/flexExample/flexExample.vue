<template>
  <div>
    <back-to-home></back-to-home>
   <div id="main">
     <div class="first">
       <div class="flex one">1</div>
       <div class="flex two">2</div>
       <div class="flex three">3</div>
     </div>
   </div>
  </div>
</template>

<script>
  import backToHome from '@/components/backToHome'
export default {
  name: 'flex-example',
  components:{
    backToHome
  },
  mounted:function(){
    const divlists = document.getElementsByClassName('flex');
    console.log(divlists);
    //随意生成一种颜色
    for(let i=0;i<divlists.length;i++){
      divlists[i].style.backgroundColor = this._getRandomColor()
    }
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
.flex{
  width:200px;
  height:100px;
  line-height: 100px;
}
  .first{
    display:flex;
    flex-direction: row;
    flex-wrap:wrap-reverse;
    justify-content: space-around;
    align-items: stretch;
  }

</style>
