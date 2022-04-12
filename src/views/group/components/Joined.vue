<template>
  <div>
    <el-table
      :data="groups"
      border
    >
      <el-table-column #default="scope" label="名称">
        {{ scope.row.name }}
      </el-table-column>
      <el-table-column #default="scope" label="人数" width="200px">
        {{ scope.row.users.length }}
      </el-table-column>
      <el-table-column #default="scope" label="管理员" width="200px">
        {{ scope.row.manager.name }}
      </el-table-column>
      <el-table-column #default="scope" label="操作" width="300px" fixed="right">
        <el-button @click="onSee(scope.$index,scope.row)">
          查看
        </el-button>
        <el-button @click="onExit(scope.$index,scope.row)">
          退出
        </el-button>
      </el-table-column>
    </el-table>

    <el-dialog title="群组信息" :visible.sync="dialogTableVisible">
      <el-table :data="dialogData">
        <el-table-column #default="scope" label="教师id" width="250">
          {{ scope.row.userId }}
        </el-table-column>
        <el-table-column #default="scope" label="教师姓名">
          {{ scope.row.name }}
        </el-table-column>
        <el-table-column #default="scope" label="课程组内角色" fixed="right" width="200">
          <!-- <el-button v-if="scope.row.userId !== '1'" @click="passMessage(scope.$index,scope.row)">
            PM
          </el-button> -->
          {{ scope.row.role }}
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import TeacherGroups from '@/api/groups'

export default {
  name: 'Joined',
  data() {
    return {
      groups: TeacherGroups.gourps,
      dialogTableVisible: false,
      dialogData: undefined
    }
  },
  methods: {
    onSee(index, row) {
      this.dialogData = row.users
      this.dialogTableVisible = true
      console.log(index, row)
    },
    onExit(index, row) {
      console.log(index, row)
    },
    passMessage(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>

</style>
