<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="考试名称">
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item label="试卷类型">
        <el-select v-model="form.region" placeholder="请选择试卷类型">
          <el-option label="A卷" value="shanghai" />
          <el-option label="B卷" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="开考课程">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="开考专业">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="开考班级">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="考试时间">
        <el-col :span="6">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择考试日期" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="4">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择考试开始时间" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="4">
          <el-time-picker v-model="form.date3" type="fixed-time" placeholder="选择考试结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-form-item label="是否允许工具箱">
        <el-switch v-model="form.delivery" />
      </el-form-item>

      <el-form-item v-if="form.delivery" label="功能">

        <el-checkbox-group v-model="form.type">
          <el-checkbox label="铅笔批注" name="type" />
          <el-checkbox label="荧光笔批注" name="type" />
          <el-checkbox label="时钟计时" name="type" />
          <el-checkbox label="草稿纸 " name="type" />
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="组卷批注">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        date3: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [{
        value: '1',
        label: '英语'
      }, {
        value: '2',
        label: '数学'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

