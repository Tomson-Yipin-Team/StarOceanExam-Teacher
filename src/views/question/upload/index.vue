<template>
  <div>
    <el-row class="container">
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :offset="1">
        <!--试卷状态-->
        <!--<PaperStatus :sub-id="id" :sub-name="name" />-->
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :xs="22" :sm="22" :md="8" :lg="8" :xl="8" :offset="0">
        <!--题目控件-->
        <QuestionCategory @questionCategory="changeValue" />
        <!--上传控件-->
        <transition name="el-fade-in-linear">
          <Files v-if="questionCategory === 'listen'" class="app-container" />
        </transition>
      </el-col>
      <el-col :xs="22" :sm="22" :md="15" :lg="15" :xl="15" :offset="0">
        <transition-group name="el-fade-in-linear">
          <Choice v-show="questionCategory === 'choice'" :key="comId[0]" />
          <Judge v-show="questionCategory === 'judge'" :key="comId[1]" />
          <Blank v-show="questionCategory === 'blank'" :key="comId[2]" />
          <EnglishListen v-show="questionCategory === 'listen'" :key="comId[3]" />
        </transition-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import QuestionCategory from './components/QuestionCategory'
import Choice from './components/Choice'
import Judge from './components/Judge'
import Blank from './components/Blank'
import EnglishListen from '@/views/question/upload/components/EnglishListen'
// import PaperStatus from './components/PaperStatus'
import Files from './components/Files'

export default {
  name: 'Index',
  components: {
    QuestionCategory,
    Choice,
    Judge,
    Blank,
    EnglishListen,
    // PaperStatus,
    Files
  },
  data() {
    return {
      questionCategory: '',
      id: '',
      name: '',
      comId: [0, 1, 2, 3, 4]
    }
  },
  methods: {
    changeValue(value) {
      console.log(value)
      this.questionCategory = value
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: 20px;
}
.app-container{
  margin-top: 20px;
  display: block;
  text-align: center;
}
</style>
