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
            '<60',
            '',
            '60-69',
            '',
            '70-79',
            '',
            '80-89',
            '',
            '90-100',
            '',
            '',
            '',
            '',
            ''
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
