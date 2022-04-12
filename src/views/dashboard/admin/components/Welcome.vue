<template>
  <div>
    <el-card :body-style="cardStyle" class="container">
      <div slot="header">
        <h1>欢迎回来！ {{ name }} 老师</h1>
      </div>
      <div id="students" style="height: 350px" class="chart" />
      <div id="papers" style="height: 350px" class="chart" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: '方慧敏',
      cardStyle: {
        padding: '0px'
      }
    }
  },
  mounted() {
    this.studentsChart()
    this.PaperChart()
  },
  methods: {
    studentsChart() {
      var myChart = this.$echarts.init(document.getElementById('students'))
      // 配置图表
      var option = {
        title: {
          text: '学生数量',
          x: 'center',
          y: 'bottom',
          textStyle: {
            color: '#8c8c8c',
            fontSize: 15
          }
        },
        legend: {
          data: ['已加入学生', '待审核学生']
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          name: '周',
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          name: '人数',
          type: 'value'
        },
        series: [
          {
            name: '已加入学生',
            data: [23, 27, 42, 45, 48, 63, 63],
            type: 'bar',
            smooth: true,
            itemStyle: { normal: { label: { show: true }}}
          },
          {
            name: '待审核学生',
            data: [23, 4, 15, 3, 3, 15, 2],
            type: 'bar',
            smooth: true,
            itemStyle: { normal: { label: { show: true }}}
          }
        ]
      }
      myChart.setOption(option)
    },
    PaperChart() {
      var myChart = this.$echarts.init(document.getElementById('papers'))
      // 配置图表
      var option = {
        title: {
          text: '考试',
          x: 'center',
          y: 'bottom',
          textStyle: {
            color: '#8c8c8c',
            fontSize: 15
          }
        },
        legend: {
          data: ['完成的考试', '即将开始的考试']
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          name: '周',
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          name: '人数',
          type: 'value'
        },
        series: [
          {
            name: '完成的考试',
            data: [1, 0, 1, 2, 1, 0, 1],
            type: 'line',
            smooth: true,
            itemStyle: { normal: { label: { show: true }}}
          },
          {
            name: '即将开始的考试',
            data: [3, 4, 3, 2, 1, 5, 6],
            type: 'line',
            smooth: true,
            itemStyle: { normal: { label: { show: true }}}
          }
          // ,
          // {
          //   name: '等待批阅',
          //   data: [1, 3, 4, 1, 2, 0, 1],
          //   type: 'line',
          //   smooth: true,
          //   itemStyle: { normal: { label: { show: true }}}
          // }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
.chart{
  margin-top: 10px;
  margin-bottom: 10px;
}
.container{
  margin-bottom: 20px;
}
</style>
