<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer> 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default{
  data(){
    return{
    }
  },
  components:{
    'app-header' : Header,
    'app-footer' : Footer,
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;  
  text-align: center;
  font-size:14px;
}

</style>