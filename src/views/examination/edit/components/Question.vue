<template>
  <div>
    <el-row type="flex" justify="center">
      <el-form ref="form" :model="form" label-width="120px">
        <!--组件方式-->
        <el-form-item label="组卷方式">
          <el-radio-group v-model="form.way">
            <el-radio label="1" border>智能组卷</el-radio>
            <el-radio label="2" border>从现有模板导入</el-radio>
          </el-radio-group>
        </el-form-item>
        <!--选择试卷-->
        <el-form-item label="选择试卷" v-if="form.way === '2'">
          <el-select v-model="value" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="123" v-if="form.way === '1'">

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
        way: '1'
      }, options: [{
        value: '1000075885',
        label: '2021-2022-1普本大学英语三期末考试'
      }, {
        value: '1000075886',
        label: '2021-2022-2普本大学英语三期末考试'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
