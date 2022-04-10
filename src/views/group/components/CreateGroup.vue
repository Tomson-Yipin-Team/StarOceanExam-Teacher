<template>
  <div>
    <el-row type="flex" justify="end">
      <el-button type="primary" @click="createNewGroup">创建新的群组</el-button>
    </el-row>

    <el-dialog title="创建群组" width="30%" :visible.sync="dialogTableVisible">
      <el-form ref="basicForm" label-position="left" label-width="100px" :model="form" :rules="rules">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import groups from '@/api/groups'

export default {
  name: 'CreateGroup',
  data() {
    return {
      dialogTableVisible: false,
      form: {
        name: ''
      },
      manager: groups.manager,
      rules: {
        name: [
          { required: true, message: '请输入群组名称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    createNewGroup() {
      this.dialogTableVisible = true
    },
    submitForm() {
      const newGroup = {
        id: '114',
        name: this.form.name,
        users: [{
          name: '方慧敏',
          userId: '1'
        }],
        manager: {
          name: '方慧敏',
          userId: '1'
        }
      }
      groups.manager.push(newGroup)
      console.log(groups.manager)
    }
  }
}
</script>

<style scoped>

</style>
