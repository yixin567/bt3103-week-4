<template>
  <div>
    <ul class="ul-food">
			<li v-for="(val,key) in datapacket" :key="key" class="li-food">
				{{key}} : {{val}}
				<br><br>
				<input v-bind:id= "key" placeholder="0" type="number" min="0">
			</li>
		</ul>
		<button v-on:click="updateOrder()"> Update Order </button>
  </div>
</template>

<script>
import database from '../firebase.js'

export default {

	props:{
		doc_id:{
			type: String
		},
	},

	data(){
    return{
      datapacket:[],
	}
  },
	methods: {
    fetchItems:function(){
      database.collection('orders').doc(this.doc_id).get().then((snapshot) => {
				this.datapacket = snapshot.data();
			})
		},


		updateOrder:function(){
			var changeddp = this.datapacket;
			var name;
			for (name in changeddp){
				var newNum = document.getElementById(name).value;
				changeddp[name] = newNum == 0 ? 0 :parseInt(newNum);
			}
			database.collection('orders').doc(this.doc_id).set(changeddp).then(() => this.$router.push({path:"/orders"}))
		}
	}	,
	created(){
    this.fetchItems()    
  },
}
</script>

<style scoped>

.ul-food {
  list-style-type: none;
	padding:0;
}

.li-food{
	margin-top: 20px;
}

button{
	margin-bottom: 20px;
  width: 100px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>