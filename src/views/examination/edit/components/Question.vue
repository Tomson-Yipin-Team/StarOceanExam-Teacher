<template>
  <div>
    <el-row type="flex" justify="center">
      <el-form ref="form" :model="form" label-width="120px">
        <!--组件方式-->
        <el-form-item label="组卷方式">
          <el-radio-group v-model="form.way">
            <el-radio label="1" border>智能组卷</el-radio>
            <el-radio label="2" border>从卷库导入</el-radio>
          </el-radio-group>
        </el-form-item>
        <!--选择试卷-->
        <el-form-item v-if="form.way === '2'" label="选择试卷">
          <el-select v-model="value" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <!--  智能组卷-->
        <el-form :inline="true" :model="formInline">
          <el-form-item v-if="form.way === '1'" label=" 试卷总分" style="margin-left:0px">
            <el-input v-model="form.socre" placeholder="请填写试卷总分" style="width:100%" />
          </el-form-item>

          <el-form-item v-if="form.way === '1'" label="难度系数" style="margin-left:0px">
            <el-select v-model="form.diff" placeholder="请选择难度系数">
              <el-option label="0.3" value="0.3" />
              <el-option label="0.4" value="0.4" />
              <el-option label="0.5" value="0.5" />
              <el-option label="0.6" value="0.6" />
              <el-option label="0.7" value="0.7" />
              <el-option label="0.75" value="0.75" />
              <el-option label="0.8" value="0.8" />
              <el-option label="0.85" value="0.85" />
              <el-option label="0.9" value="0.9" />
            </el-select>
          </el-form-item>
        </el-form>

      </el-form>
    </el-row>

    <el-row type="flex" justify="center" />

  </div>
</template>

<script>
export default {
  name: 'Question',
  data() {
    return {
      form: {
        socre: '',
        way: '1',
        diff: ''
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
