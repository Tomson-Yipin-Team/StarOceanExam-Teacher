<template>
  <div>
    <el-card :body-style="{padding:'0px'}">
      <div id="student-chart" style="height: 450px;width: 100%" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'StudentChart',
  mounted() {
    this.myEcharts()
  },
  methods: {
    myEcharts() {
      var myChart = this.$echarts.init(document.getElementById('student-chart'))
      // 配置图表
      var option = {
        xAxis: {
          type: 'category',
          data: [
            '2019-01',
            '2019-02',
            '2019-03',
            '2019-04',
            '2019-05',
            '2019-06',
            '2019-07',
            '2022-01',
            '2022-02',
            '2022-03',
            '2022-04',
            '2022-05',
            '2022-06',
            '2022-07'
          ]
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
