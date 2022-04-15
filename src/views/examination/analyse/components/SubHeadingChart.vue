<template>
  <div>
    <el-card :body-style="{ padding: '0px' }">
      <div id="sub-heading-charts" style="height: 450px; width: 100%" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SubHeading',
  mounted() {
    this.myEcharts()
  },
  methods: {
    myEcharts() {
      var myChart = this.$echarts.init(
        document.getElementById('sub-heading-charts')
      )
      // 配置图表
      // 创建数据
      var data = [
        {
          name: '听力sectionA', // 班级名称
          excellent: '7', // 优秀人数
          good: '6.15', // 良好人数
          medium: '4' // 中等人数
        },
        {
          name: '听力sectionB', // 班级名称
          excellent: '8', // 优秀人数
          good: '6.63', // 良好人数
          medium: '3' // 中等人数
        },
        {
          name: '听力sectionC', // 班级名称
          excellent: '20', // 优秀人数
          good: '17.36', // 良好人数
          medium: '10' // 中等人数
        },
        {
          name: '十五选十', // 题目
          excellent: '5', // 最高分
          good: '4.15', // 平均分
          medium: '2.5' // 最低分
        },
        {
          name: '段落信息匹配题', // 题目
          excellent: '10', // 最高分
          good: '8', // 平均分
          medium: '6' // 最低分
        },
        {
          name: '阅读理解', // 题目
          excellent: '20', // 最高分
          good: '16.42', // 平均分
          medium: '12' // 最低分
        },
        {
          name: '句子翻译', // 题目
          excellent: '13', // 最高分
          good: '9.73', // 平均分
          medium: '4' // 最低分
        },
        {
          name: '书面表达', // 题目
          excellent: '13', // 最高分
          good: '10.78', // 平均分
          medium: '5' // 最低分
        }
      ]

      var dataList = []
      var excellentdata = []
      var gooddata = []
      var mediumdata = []
      var passdata = []
      var faileddata = []

      var lengendData = ['最高分', '平均分', '最低分']
      data.forEach(function(item, index) {
        dataList.push(item.name)
        excellentdata.push(item.excellent)
        gooddata.push(item.good)
        mediumdata.push(item.medium)
        passdata.push(item.pass)
        faileddata.push(item.failed)
      })

      var option = {
        color: ['#0cb4d7', '#80d5ac', '#eb7c6f'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: lengendData
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: [
          {
            name: '分数',
            type: 'value'
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: dataList,
            axisLine: {
              show: true
            },
            axisTick: {
              show: true
            }
          }
        ],
        series: [
          {
            name: lengendData[0],
            type: 'bar',
            barWidth: 24,
            data: excellentdata,
            itemStyle: {
              normal: {
                show: true,
                label: {
                  show: true,
                  textStyle: {
                    color: '#FFF'
                  }
                }
              }
            }
          },
          {
            name: lengendData[1],
            type: 'bar',
            barWidth: 24,
            data: gooddata,
            itemStyle: {
              normal: {
                show: true,
                label: {
                  show: true,
                  textStyle: {
                    color: '#FFF'
                  }
                }
              }
            }
          },
          {
            name: lengendData[2],
            type: 'bar',
            barWidth: 24,
            data: mediumdata,
            itemStyle: {
              normal: {
                show: true,
                label: {
                  show: true,
                  textStyle: {
                    color: '#FFF'
                  }
                }
              }
            }
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
