<template>
  <div>
    <el-card>
      <div slot="header"><span style="text-align: center;display: block">请选择题型</span></div>
      <el-row type="flex" justify="center">
        <el-form>
          <el-form-item label="题型" label-width="50px">
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
          <!--题目数量-->
          <el-form-item />
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
          value: 'fill',
          label: '填空题'
        }]
      }, {
        label: '英语',
        options: [{
          value: 'listen',
          label: '听力题'
        }, {
          value: 'write',
          label: '写作题'
        }]
      }, {
        label: '计算机',
        options: [{
          value: 'code',
          label: '代码'
        }]
      }],
      value: ''
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
