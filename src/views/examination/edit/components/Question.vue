<template>
  <div>
    <el-row type="flex" justify="center">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="组卷方式">
          <el-radio-group v-model="form.way">
            <el-radio label="1" border>智能组卷</el-radio>
            <el-radio label="2" border>人工组卷</el-radio>
            <el-radio label="3" border>从现有模板导入</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-row>

    <!--  智能组卷-->
    <el-row type="flex" justify="center" />

  </div>
</template>

<script>
export default {
  name: 'Question',
  data() {
    return {
      form: {
        way: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
