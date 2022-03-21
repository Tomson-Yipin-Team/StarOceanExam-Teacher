<template>
  <div>
    <!--群组列表-->
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
        <el-button-group>
          <el-button @click="onSee(scope.$index,scope.row)">
            查看
          </el-button>
          <el-button @click="onExit(scope.$index,scope.row)">
            退出
          </el-button>
          <el-button @click="shareGroup(scope.$index,scope.row)">
            分享
          </el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
    <!--查看弹窗-->
    <el-dialog title="群组信息" :visible.sync="dialogTableVisible">
      <el-table :data="dialogData">
        <el-table-column #default="scope" label="教师id" width="250">
          {{ scope.row.userId }}
        </el-table-column>
        <el-table-column #default="scope" label="教师姓名">
          {{ scope.row.name }}
        </el-table-column>
        <el-table-column #default="scope" label="操作" fixed="right" width="200">
          <el-button v-if="scope.row.userId !== '1'" @click="passMessage(scope.$index,scope.row)">
            PM
          </el-button>
          <el-button v-if="scope.row.userId !== '1'" @click="deleteGroupUser(scope.$index,scope.row)">
            删除
          </el-button>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!--分享群组-->
    <el-dialog title="分享群组" :visible.sync="showShare" width="30%">
      <el-row>
        <el-col :span="16">
          <el-input v-model="shareURL">
            <template slot="prepend">Https://</template>
          </el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button @click="copy">
            复制到剪贴板
          </el-button>
        </el-col>
      </el-row>
      <el-divider />
      <el-row type="flex" justify="center">
        <img src="https://source.jujuh.top/picture/%E4%BA%8C%E7%BB%B4%E7%A0%81.png">
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import TeacherGroups from '@/api/groups'

export default {
  name: 'Manage',
  data() {
    return {
      groups: TeacherGroups.manager,
      dialogTableVisible: false,
      dialogData: undefined,
      showShare: false,
      shareURL: ''
    }
  },
  methods: {
    onSee(index, row) {
      this.dialogData = row.users
      this.dialogTableVisible = true
      console.log(index, row)
    },
    // 退出教师群组
    onExit(index, row) {
      this.$confirm('您是该教师组的管理员，退出将解散该群组， 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.groups.splice(index, 1)
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消'
        })
      })
    },
    passMessage(index, row) {
      console.log(index, row)
    },
    onDelete(index, row) {
      console.log(index, row)
    },
    // 删除教师
    deleteGroupUser(index, row) {
      this.$confirm('此操作将永久删除此教师, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.dialogData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    //  分享
    shareGroup(index, row) {
      this.shareURL = row.shareURL
      this.showShare = true
    },
    //  复制
    copy() {
      this.$notify({
        title: '分享',
        message: '已复制到剪贴板',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>

</style>
