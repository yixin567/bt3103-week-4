<template>
  <div class="chart">
    <h1 class = "line-chart-title"><u>LineChart</u></h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./LineChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>
.line-chart-title{
  text-align: center;
	font-weight: 100;
}
</style>