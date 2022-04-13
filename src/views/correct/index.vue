<template>
  <div id="correct-container">
    <el-row :gutter="20" style="margin: 10px">

      <el-col :span="8">
        <panel-group panel-name="等待批阅" :panel-number="40" svg-name="log" color-style="#40c9c6" />
      </el-col>
      <el-col :span="8">
        <panel-group panel-name="正在批阅" :panel-number="5" svg-name="pie-five" color-style="#40c9c6" />
      </el-col>
      <el-col :span="8">
        <panel-group panel-name="今日完成" :panel-number="16" svg-name="skill" color-style="#40c9c6" />
      </el-col>
    </el-row>

    <paper-list style="margin: 10px" />
  </div>
</template>

<script>
import PanelGroup from '@/views/correct/components/PanelGroup'
import PaperList from '@/views/correct/components/PaperList'

export default {
  name: 'Index',
  components: {
    PanelGroup,
    PaperList
  }
}
</script>

<style scoped>
#correct-container{
  /*padding: 32px;*/
  /*background-color: rgb(240, 242, 245);*/
  /*position: relative;*/
}
</style>
