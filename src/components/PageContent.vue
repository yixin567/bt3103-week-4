<template>
  <div>
    <ul>
      <li v-for="item in itemsList" v-bind:key="item.name" >
        <h2> {{item.name}}</h2>
        <h3> ${{item.price}} </h3>
        <img v-bind:src="item.imageURL">
        <counter v-on:counter="onCounter" v-bind:item="item" class="counter"></counter>
      </li>
    </ul>
    <basket v-bind:itemsSelected = "itemsSelected" class="basket"></basket>
  </div>
</template>

<script>
import QuantityCounter from './QuantityCounter'
import Basket from './Basket'
import database from '../firebase.js'

export default {
  data(){
    return{
      itemsSelected: [],
      itemsList:[]
    }
  },

  methods: {
    fetchItems:function(){
      database.collection('menu').get().then((querySnapShot) => {
        let item= {}
        querySnapShot.forEach(doc => {
          item = doc.data()
          item.show = false
          item.id = doc.id
          this.itemsList.push(item)
      });
      })
     },

    onCounter: function (item, count) {
      if (this.itemsSelected.length === 0 && count > 0) {
        this.itemsSelected.push([item.name, count, item.price]);
        console.log(this.itemsSelected)
      } else {
        var contain = false;
        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item[0];
          if(item_name === item.name && count > 0){
            this.itemsSelected.splice(i,1,[item.name,count,item.price]);
            contain = true;
          } else if(item_name === item.name && count == 0){
            this.itemsSelected.splice(i,1);
            contain = true;
          } 
        }
        //if the food is not contained in the list already
        if(!contain){
            this.itemsSelected.push([item.name,count,item.price])  
            console.log(this.itemsSelected)  
        }
      }
    }
  },
  created(){
    this.fetchItems()    
  },

  components: {
    "counter": QuantityCounter,
    "basket": Basket
  }
}
</script>

<style scoped>
div {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
ul {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

img {
  width: 135px;
  height: 135px;
}

h3 {
  font-size: 30px;
}

h2 {
  font-size: 30px;
}

.counter{
  align-content: center;
  margin-left: 60px;
}

.basket {
  position: absolute;
  top: 23%;
  left: 78%;
}

</style>