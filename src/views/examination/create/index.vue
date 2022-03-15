<template>
  <div>
    <el-row>
      <!--题目列表-->
      <el-col :xs="8" :sm="8" :md="6" :lg="6" :xl="6" :offset="1">
        <el-card>
          <div slot="header" style="float: bottom;text-align: center">
            题目列表
          </div>
          <Tree />
        </el-card>
      </el-col>
    <!--题目预览-->
      <el-col :xs="10" :sm="10" :md="14" :lg="14" :xl="14" :offset="1">
        <paper></paper>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import Tree from './components/Tree'
import Paper from '@/views/examination/create/components/paper';

export default {
  name: 'Index',
  components: { Tree, Paper }
}
</script>

<style scoped>

</style>
