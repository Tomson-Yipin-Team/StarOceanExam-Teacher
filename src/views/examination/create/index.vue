<template>
  <div>
    <el-row>
      <!--题目列表-->
      <el-col :xs="8" :sm="8" :md="6" :lg="6" :xl="6">
        <el-card v-if="showInfo" class="card">
          <div slot="header" style="float: bottom;text-align: center">
            试卷信息
          </div>
          <PaperInfo />
        </el-card>
        <el-card class="card">
          <div slot="header" style="float: bottom;text-align: center">
            题目列表
          </div>
          <Tree style="text-align: center"/>
        </el-card>
      </el-col>
      <!--题目预览-->
      <el-col :xs="10" :sm="10" :md="16" :lg="16" :xl="16" :offset="1">
        <paper />
      </el-col>
    </el-row>

  </div>
</template>

<script>

import Tree from './components/Tree'
import Paper from './components/Paper'
import PaperInfo from './components/PaperInfo'

export default {
  name: 'Index',
  components: { Tree, Paper, PaperInfo },
  data() {
    return {
      name: this.$route.query.name,
      showInfo: true
    }
  },
  watch: {
    name: {
      immediate: true,
      handler() {
        if (this.name === undefined) {
          this.showInfo = false
        }
      }
    }
  }
}
</script>

<style scoped>
.card{
  /*display: flex;*/
  justify-content: center;
  align-items: center;
}
</style>
