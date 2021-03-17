<template>
  <div>
      <bar-chart></bar-chart>
			<line-chart></line-chart>
  </div>
</template>

<script>
import barchart from './Charts/BarChart.vue'
import linechart from './Charts/LineChart.vue'
export default {
    components:{
      'bar-chart' : barchart,
      'line-chart' : linechart
    }
}
</script>