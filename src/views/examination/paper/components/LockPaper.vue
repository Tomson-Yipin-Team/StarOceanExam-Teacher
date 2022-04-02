<template>
  <div class="container">
    <div class="text">
      请注意,您正在封存
      <div id="paper-name">[{{ name }}]</div>
      试卷封存后，所有操作均需要密码
    </div>
    <div class="form-box">
      <el-form class="form" label-width="120px">
        <el-form-item label="请输入密码">
          <el-input v-model="password" show-password placeholder="请输入密码" style="width: 250px " />
        </el-form-item>
        <el-form-item label="请再次输入密码">
          <el-input v-model="confirmPassword" show-password placeholder="请确认密码" />
        </el-form-item>
        <el-form-item />
      </el-form>

    </div>
    <div class="button">
      <el-button type="primary" plain>取消</el-button>
      <el-button type="primary" @click="confirm">确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LockPaper',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    confirm() {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>
.text{
  text-align: center;
  font-size: 1.2em;
  color: #5a5e66;
  margin-bottom: 20px;
}

.container{
  text-align: center;
}
.form-box{
  width: 100%;
  display: flex;
  justify-content: center;
}
.button{
  display: flex;
  justify-content: right;
  margin-right: 20px;
}
</style>
