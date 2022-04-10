<template>
  <div>
    <el-card>
      <div slot="header"><span style="text-align: center;display: block">题目信息</span></div>
      <el-row>
        <el-form label-width="180px">
          <!--题目类型-->
          <el-form-item label="题型">
            <el-select v-model="value" placeholder="请选择">
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label"
              >
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-option-group>
            </el-select>
          </el-form-item>

          <!--题目难易度-->
          <el-form-item label="题目难易度">
            <el-select v-model="form.difficulty" placeholder="请选择题目难易度">
              <el-option label="简单" value="0" />
              <el-option label="中等" value="1" />
              <el-option label="难" value="2" />
            </el-select>
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'QuestionCategory',
  data() {
    return {
      options: [{
        label: '通用',
        options: [{
          value: 'choice',
          label: '选择题'
        }, {
          value: 'blank',
          label: '填空题'
        }, {
          value: 'judge',
          label: '判断题'
        }]
      }, {
        label: '英语',
        options: [{
          value: 'listen',
          label: '听力题'
        }, {
          value: 'write',
          label: '写作题'
        }, {
          value: 'reading',
          label: '阅读理解'
        }, {
          value: 'match',
          label: '信息匹配'
        }, {
          value: 'choose',
          label: '十五选十'
        }]
      }, {
        label: '计算机',
        options: [{
          value: 'code',
          label: '代码'
        }]
      }],
      value: '',
      form: {
        difficulty: ''
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      // 监视属性，将题目类型传给父组件
      handler(newValue, oldValue) {
        this.$emit('questionCategory', newValue)
      }
    }
  }
}
</script>

<style scoped>

</style>
