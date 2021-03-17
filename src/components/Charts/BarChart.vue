<template>
  <div class="chart">
    <h1 class = "bar-chart-title"><u>Dashboard</u></h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>
.bar-chart-title{
  text-align: center;
  font-weight: 100;

}
</style>