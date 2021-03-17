<template>
  <div>
    <button v-on:click="increment();" > + </button> <span class="counter"> {{counter}} </span> <button v-on:click="decrement()"> - </button>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type:Object
    }
  },
  data(){
    return{
      counter: 0
    }
  },

  methods: {
    increment: function(){
      if(this.counter < 10){
        this.counter ++
      } else{
        this.counter = 10;
        alert("You cannot buy more than 10 items.")
      }
      this.$emit('counter',this.item,this.counter)
    },
    decrement: function(){
      if(this.counter >= 0){
        this.counter --
      } else{
        this.counter = 0
      }
      this.$emit('counter',this.item,this.counter)
    }
  }

}
</script>

<style scoped>
  button{
    font-size: 25px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;  
    text-align: center;
    color:black;
    background-color:rgb(194, 175, 238);
    border-radius: 10px;
  }

  .counter{
    font-size: 25px;
  }
</style>