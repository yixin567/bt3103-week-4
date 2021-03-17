import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
      datacollection: {
        labels: [],
        datasets: [
					{ 
					data: [],
					label: "West",
					borderColor: "red",
          fill: false
					},
					{
					data: [],
					label: "National",
					borderColor: "blue",
          fill: false
					},
					{
					data: [],
					label: "East",
					borderColor: "purple",
					fill: false
					},
					{
					data: [],
					label: "Central",
					borderColor: "green",
					fill: false
					},
					{
					data: [],
					label: "South",
					borderColor: "#CBC3E3",
					fill: false
					},
					{
					data: [],
					label: "North",
					borderColor: "#40e0d0",
					fill: false
					}
				]
        },
      options: {
        title: {
        display: true,
        text: 'PSI Twenty Four Hourly (By Region)'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    fetchItems: function () {
      axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-22`)
      .then(response => {

        var data;
        for(data in response.data.items){
					this.datacollection.labels.push(response.data.items[data].timestamp);
					console.log(response.data.items[data].readings.psi_twenty_four_hourly)
					this.datacollection.datasets[0].data.push(response.data.items[data].readings.psi_twenty_four_hourly.west)
					this.datacollection.datasets[1].data.push(response.data.items[data].readings.psi_twenty_four_hourly.national)
					this.datacollection.datasets[2].data.push(response.data.items[data].readings.psi_twenty_four_hourly.east)
					this.datacollection.datasets[3].data.push(response.data.items[data].readings.psi_twenty_four_hourly.central)
					this.datacollection.datasets[4].data.push(response.data.items[data].readings.psi_twenty_four_hourly.south)
					this.datacollection.datasets[5].data.push(response.data.items[data].readings.psi_twenty_four_hourly.north)
				}
					//Object.keys(response.data.items[data].readings))

        //this.datacollection.labels.push(data[0])
        //this.datacollection.datasets[0].data.push(data[1])
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}