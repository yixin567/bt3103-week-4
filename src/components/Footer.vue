<template>
  <div class="footer">
    <footer>
        <p v-html="copyRtSymbol"></p>             
    </footer>
    
  </div>
</template>

<script>
export default {
  
  data(){
    return{
        
        copyRtSymbol:'&copy;BT3103'
        }
  }
}
</script>

<style scoped>
footer{
    background:rgb(106, 61, 211);
    padding:5px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
    text-align:center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 40px;
    vertical-align: middle;
}
p{
    align-content: center;
    color:ivory;
}
</style>