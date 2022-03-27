<template>
  <div>
    <el-row type="flex" justify="center">
      <el-form label-width="120px">
        <el-form-item label="试卷名称">
          <el-input v-model="name" style="width: 500px" />
        </el-form-item>
        <el-form-item label="选择试题">
          <el-cascader
            v-model="value"
            :options="questions"
            :props="cascaderProps"
            style="width: 500px"
          />
          <el-popover
            placement="top-start"
            title="说明"
            width="200"
            trigger="hover"
            content="您可已通过下方题库查看具体题目，详细信息请通过题库界面进入"
          >
            <i slot="reference" class="el-icon-edit" style="font-size: 1em" />
          </el-popover>
        </el-form-item>
        <el-form-item>
          <el-row type="flex" justify="end">
            <el-button type="primary" plain class="submit-button" @click="handleSubmit">提交</el-button>
          </el-row>
        </el-form-item>
      </el-form>
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
.submit-button{
  margin-right: 0px;
}
</style>
