<template>
  <div>
		<ul>
			<h1>Menu</h1>
			<li v-for="selected in itemsSelected" v-bind:key="selected.name">
				{{selected[0]}} x {{selected[1]}}
			</li>
		</ul>
		<button v-on:click="isClicked();findTotal();sendOrder()"> Add Order </button>
		<p v-show= "this.clicked == true">
			SubTotal: ${{this.subtotal}} <br> 
			Grand Total: ${{finalPrice}}
		</p> 
	</div>
</template>

<script>
import database from '../firebase.js'

export default {

	props: {
		itemsSelected:{
			type: Array
		}
	},

	data(){
		return{
			clicked:false,
			subtotal:0,
		}
	},

	methods:{
		isClicked:function(){
			this.clicked = true;
		},

		findTotal:function(){
			console.log(this.clicked)
			var localsubtotal = 0;
			for (let i = 0; i < this.itemsSelected.length; i++){
				const qty = this.itemsSelected[i][1];
				const price = this.itemsSelected[i][2];
				localsubtotal += qty*price;
			}
			this.subtotal = localsubtotal
			console.log(this.subtotal)
		},

		sendOrder:function(){
			let orders = {
				"Prawn omelette" : 0,
				"Dry Beef Hor Fun" : 0,
				"Sambal KangKung" : 0,
				"Pork Fried Rice": 0,
				"Mapo Tofu" : 0,
				"Cereal Prawn" : 0
			};
			for(let i = 0; i < this.itemsSelected.length; i++){
				if(Object.keys(orders).includes(this.itemsSelected[i][0])){
					orders[this.itemsSelected[i][0]] = this.itemsSelected[i][1]
				}
			}
			console.log(orders);
			database.collection('orders').add(orders).then(()=>location.reload())

			
		}
	},

	computed:{
		finalPrice:function(){
			return (this.subtotal*1.07).toFixed(2);
		}
	}

}
</script>

<style scoped>
h1{
	font-size: 30px;
	padding-left: 45px;
	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

li {
	font-size: 25px;
}

button{
	font-size: 25px;
	margin-left:60px;
	background-color: pink;
	border-radius: 25px;
}

p {
	padding-left: 20px;
	font-size: 25px;
}



</style>