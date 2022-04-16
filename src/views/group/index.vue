<template>
  <div>
    <el-card style="margin: 20px">
      <el-tabs v-model="activeName">
        <el-tab-pane label="已加入" name="joined">
          <Joined />
        </el-tab-pane>
        <el-tab-pane label="我管理的" name="manager">
          <Manage />
        </el-tab-pane>
        <el-tab-pane label="审批试卷" name="check">
          <Check />
        </el-tab-pane>
      </el-tabs>
      <create-group v-if="activeName!=='check'" />
    </el-card>
  </div>
</template>

<script>
import Joined from '@/views/group/components/Joined'
import Manage from '@/views/group/components/Manage'
import CreateGroup from '@/views/group/components/CreateGroup'
import Check from './components/Check.vue'

export default {
  name: 'Index',
  components: {
    Joined,
    Manage,
    CreateGroup,
    Check
  },
  data() {
    return {
      activeName: 'joined'
    }
  }
}
</script>

<style scoped>

</style>
