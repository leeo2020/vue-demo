<template>
  <div id="app">
    <div class="navs">
    <div v-for="item in routers" :key="item.id">
      <router-link
              v-if="!item.isNotNav"
              :to="item.path"
              v-text="item.text"
              tag="div" exact-active-class="on"></router-link>
    </div>
    </div>
    <div class="content">
      <router-view name="default"></router-view>
      <router-view name="xxx"></router-view>
    </div>
  </div>
</template>

<script>
  import arr from './pages/index'
  let routers=[]
  arr.map((ele)=>{
    routers.push({
      path:ele.path,
      text:ele.text
    })
  })
  export default {
    name: 'App',
    data(){
      return {
        routers
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  html,body{
    padding:0;
    margin:0;
    width:100%;
    height:100%;
  }
  .navs{
    box-sizing: border-box;
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    width:200px;
    padding-top:30px;
    background-color:#111;
  }

  .navs div{
    text-align:center;
    line-height:35px;
    color:#fff;
    cursor:pointer;
  }
  .navs div.on{
    color:hotpink;
  }
  .content{
    position:absolute;
    left:200px;
    right:0;
    top:0;
    bottom:0;
    background-color:#eee;
  }
</style>
