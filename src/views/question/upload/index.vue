<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="22" :sm="22" :md="8" :lg="8" :xl="8" :offset="0">
        <!--题目控件-->
        <QuestionCategory class="container" @questionCategory="changeValue" />
        <!--上传控件-->
      </el-col>
      <el-col :xs="22" :sm="22" :md="8" :lg="8" :xl="8">
        <Files class="container" />
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :xs="22" :sm="22" :md="16" :lg="16" :xl="16" :offset="0">
        <transition-group name="el-fade-in-linear">
          <Choice v-if="questionCategory === 'choice'" ref="choice" :key="comId[0]" class="container" />
          <Judge v-if="questionCategory === 'judge'" ref="judge" :key="comId[1]" class="container" />
          <Blank v-if="questionCategory === 'blank'" ref="blank" :key="comId[2]" class="container" />
          <EnglishListen v-if="questionCategory === 'listen'" ref="listen" :key="comId[3]" class="container" />
          <Reading v-if="questionCategory === 'reading'" ref="reading" :key="comId[4]" class="container" />
          <Choose v-if="questionCategory === 'choose'" ref="choose" :key="comId[5]" class="container" />
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
import Reading from '@/views/question/upload/components/Reading'
import Choose from '@/views/question/upload/components/Choose'
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
    Reading,
    Choose,
    // PaperStatus,
    Files
  },
  data() {
    return {
      questionCategory: '',
      id: '',
      name: '',
      comId: [0, 1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    changeValue(value) {
      // console.log(value)
      this.questionCategory = value
      switch (value) {
        case 'listen':
          this.$refs.listen.updatePage()
          break
        case 'choice':
          this.$refs.choice.updatePage()
          break
        case 'blank':
          this.$refs.blank.updatePage()
          break
        case 'reading':
          this.$refs.reading.updatePage()
          break
        case 'choose':
          this.$refs.choose.updatePage()
          break
      }
    }
  }
}
</script>

<style scoped>
.container{
  margin: 20px;
}

</style>
