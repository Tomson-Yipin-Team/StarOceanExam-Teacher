<template>
  <div>
    <el-row>
      <el-form>
        <el-form-item label="试卷名称">
          <el-input v-model="name" style="width: 200px" />
        </el-form-item>
        <el-form-item label="选择试题" label-width="120px">
          <el-cascader
            v-model="value"
            :options="questions"
            :props="cascaderProps"
          />
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <el-button type="primary" plain @click="handleSubmit">提交</el-button>
    </el-row>
  </div>
</template>

<script>
import questionContent from '@/api/question-content'
export default {
  name: 'ChooseQuestion',
  data() {
    return {
      questions: questionContent.timuku,
      value: [],
      cascaderProps: {
        expandTrigger: 'hover',
        label: 'name',
        value: 'id',
        children: 'questions',
        multiple: true
      },
      name: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        path: '/examination/create',
        query: {
          name: 'normal'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
