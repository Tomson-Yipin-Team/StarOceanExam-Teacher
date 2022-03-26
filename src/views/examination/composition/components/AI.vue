<template>
  <div>
    <el-card>
      <el-form ref="aiForm" :rules="rules" label-width="120px">
        <!--试卷名称-->
        <el-form-item label="试卷名称" prop="name">
          <el-col :span="12">
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
              :value="item.subject"
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
      </el-form>
      <el-row>
        <el-button type="primary" plain @click="handleSubmit">提交</el-button>
      </el-row>
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
          { required: true, message: '请输入试卷名称', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
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
          name: 'ai'
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

</style>
