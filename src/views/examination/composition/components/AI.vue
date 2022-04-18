<template>
  <div class="container">
    <el-card style="width: 70%;margin-top:20px" header="请填写试卷信息">
      <el-form ref="formData" :model="formData" :rules="rules" label-width="120px">
        <!--试卷名称-->
        <el-form-item label="试卷名称" prop="name">
          <el-col :span="20">
            <el-input v-model="formData.name" />
          </el-col>
        </el-form-item>
        <!--难度系数-->
        <el-form-item label="难度系数" prop="difficulty">
          <el-col :span="4">
            <el-input v-model="formData.difficulty" />
          </el-col>
        </el-form-item>
        <!--选择题库-->
        <el-form-item label="题库">
          <el-select v-model="formData.questions" multiple placeholder="请选择题库">
            <el-option
              v-for="item in timuku"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="题目模板">
          <el-select v-model="formData.category" placeholder="请选择模板" @change="handleChange">
            <el-option
              v-for="item in category"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-if="formData.customize" label="选择题数量">
          <el-col :span="4">
            <el-input v-model="formData.choiceNumber" />
          </el-col>
        </el-form-item>
        <el-form-item v-if="formData.customize" label="填空题数量">
          <el-col :span="4">
            <el-input v-model="formData.blankNumber" />
          </el-col>
        </el-form-item>
        <el-form-item v-if="formData.customize" label="应用题数量">
          <el-col :span="4">
            <el-input v-model="formData.questionNumber" />
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-row type="flex" justify="end">
            <el-button type="primary" plain @click="handleSubmit">下一步</el-button>
          </el-row>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>

<script>
import questionContent from '@/api/question-content'

export default {
  name: 'AI',
  data() {
    return {
      formData: {
        name: '',
        difficulty: '',
        questions: [],
        category: '',
        choiceNumber: '',
        blankNumber: '',
        questionNumber: '',
        customize: false
      },
      rules: {
        name: [
          { required: true, message: '请输入试卷名称', trigger: 'blur' }
        ],
        difficulty: [
          { required: true, message: '请输入难度系数', trigger: 'blur' }
        ],
        classrooms: [
          { required: true, message: '请选择题库', trigger: 'change' }
        ]
      },
      timuku: questionContent.timuku,
      questions: [],
      category: questionContent.category
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        path: '/examination/create',
        query: {
          name: this.formData.name,
          number: 12
        }
      })
    },
    handleChange() {
      if (this.formData.category === '自定义') {
        this.formData.customize = true
      } else {
        this.formData.customize = false
      }
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
