import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
 extends: Bar,
 
 data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Food",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#FFA500"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            scales:{
              yAxes:[
                {ticks:{min:0}}
              ]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },

  methods: {
    fetchItems: function () {
      let data={};
      /*
			let data = {
				"Cereal Prawn" : 0,
				"Dry Beef Hor Fun" : 0,
				"Mapo Tofu" : 0,
				"Pork Fried Rice" : 0,
				"Prawn omelette" : 0,
				"Sambal KangKung" : 0
			};
      */
      database.collection('orders').get().then(querySnapShot => {
        //let data = {};
        querySnapShot.forEach(doc => { 
          if(!(Object.keys(data) in doc.data()) && Object.keys(data).length != Object.keys(doc.data()).length){
            var key;
            for(key in doc.data()){
              data[key] = doc.data()[key]
            }
          } else{
            var x;
            for(x in doc.data()){
              data[x] += doc.data()[x]
            }
          }
        })
        console.log(data)
        var eachKey;
        for (eachKey in data){
          this.datacollection.labels.push(eachKey)
          this.datacollection.datasets[0].data.push(data[eachKey])
        }
        this.renderChart(this.datacollection,this.options)
			});
		}
  },
  created () {
    this.fetchItems()
  }
}