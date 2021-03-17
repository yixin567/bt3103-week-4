<template>  
	<div id=app>
  <h1>{{msg}}</h1>
	<ul class="ul-order">
		<li v-for= "order in orders" v-bind:key= "order[0]" class="li-order">
			<ul class="ul-innerOrder">
				<li v-for= "(val,key) in order[1]" :key= "key" class="li-innerOrder">
					{{key}} : {{val}} <br>
				</li>
			</ul>
			<br><br>
			<button v-bind:id= "order[0]" v-on:click= "deleteItem($event)"> Delete </button>
			<button v-bind:id= "order[0]" v-on:click= "route($event)"> Modify </button>
		</li>
	</ul>
  </div>

</template>

<script>
import database from '../firebase.js'

export default {
  data(){
    return{
        msg: "Orders",
        orders:[]
    }
  },

  methods: {
    fetchItems:function(){
      database.collection('orders').get().then((querySnapShot) => {
        querySnapShot.forEach(doc => {
          this.orders.push([doc.id, doc.data()])
      });
      })
    },
		deleteItem:function(event){
			let doc_id = event.target.getAttribute("id");
			database.collection('orders').doc(doc_id).delete().then(()=> {location.reload()});
		},
		route:function(event){
			let doc_id = event.target.getAttribute("id");
			this.$router.push({ name: 'modify', params: {doc_id} })
		}
  },


 created(){
    this.fetchItems()    
  },
}
</script>

<style scoped>
.ul-order {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
.li-order {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
	list-style-type: none;
}

.ul-innerOrder{
	list-style-type: none;
}


button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
  margin: 10px;
  
}
</style>
