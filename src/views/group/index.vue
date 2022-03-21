<template>
  <div>
    <el-card>
      <el-tabs>
        <el-tab-pane label="已加入">
          <Joined />
        </el-tab-pane>
        <el-tab-pane label="我管理的">
          <Manage />
        </el-tab-pane>
      </el-tabs>
      <create-group />
    </el-card>
  </div>
</template>

<script>
import Joined from '@/views/group/components/Joined'
import Manage from '@/views/group/components/Manage'
import CreateGroup from '@/views/group/components/CreateGroup'
export default {
  name: 'Index',
  components: {
    Joined,
    Manage,
    CreateGroup
  }
}
</script>

<style scoped>

</style>
