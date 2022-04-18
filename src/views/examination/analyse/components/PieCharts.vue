<template>
  <div>
    <el-card style="height: 425px">
      <div id="pie-charts" style="height: 400px;width: 100%" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PieCharts',
  mounted() {
    this.myEcharts()
  },
  methods: {
    myEcharts() {
      var myChart = this.$echarts.init(document.getElementById('pie-charts'))
      // 配置图表
      var option = {
        legend: { show: false },
        series: [
          {
            name: '成绩分布',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: true,
            itemStyle: { borderColor: '#fff', borderWidth: 2 },
            color: [
              '#52A8FF',
              '#00B389',
              '#E27272',
              '#FFC53D',
              '#006EFE',
              '#F5855F',
              '#C099FC',
              '#FFA940',
              '#29EFC4',
              '#F8AEA4'
            ],
            label: {
              // alignTo: 'labelLine', // ! 文字对齐方式
              formatter: function(e) {
                const {
                  data: { value, name, percent }
                } = e
                return `{x|}{a|${name}}\n{b|${value}个}{c|${percent}}`
              },
              minMargin: 5,
              lineHeight: 15,
              rich: {
                x: { width: 10, height: 10, backgroundColor: 'inherit', borderRadius: 5 },
                a: { fontSize: 14, color: 'inherit', padding: [0, 20, 0, 8] },
                b: { fontSize: 12, align: 'left', color: '#666666', padding: [8, 0, 0, 18] },
                c: { fontSize: 12, align: 'left', color: '#666666', padding: [8, 0, 0, 8] }
              }
            },
            data: [
              { value: 2, name: '优秀(>=90)', percent: '10.53%' },
              { value: 9, name: '良好(>=80)', percent: '47.37%' },
              { value: 5, name: '中等(>=70)', percent: '26.31%' },
              { value: 2, name: '及格(>=60)', percent: '10.52%' },
              { value: 1, name: '不及格(<60)', percent: '5.26%' }
            ]
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
