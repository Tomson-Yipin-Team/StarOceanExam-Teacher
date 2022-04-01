<template>
  <div>
    <el-row>
      <el-col :span="22" :offset="1" :rules="rules">
        <el-card>

          <el-row type="flex" justify="center">
            <el-col :span="10">
              <el-steps :active="active" finish-status="success" align-center>
                <el-step title="创建" />
                <el-step title="确认信息" />
                <el-step title="完成" />
              </el-steps>
            </el-col>
          </el-row>

          <el-row v-show="active===0" type="flex" justify="center">
            <el-col :span="12">
              <el-form ref="basicForm" :model="form" label-width="80px">
                <el-form-item label="班级名称" prop="name">
                  <el-input v-model="form.name" placeholder="请输入班级名称" />
                </el-form-item>
                <el-form-item label="专业名称">
                  <el-input v-model="form.profession" placeholder="请输入专业名称" />
                </el-form-item>
                <el-form-item label="班级人数">
                  <el-input v-model="form.peoples" placeholder="请输入班级人数上限，0为无限" />
                </el-form-item>
                <el-form-item label="班级期限">
                  <el-col :span="6">
                    <el-date-picker v-model="form.beginTime" type="date" placeholder="选择开始日期" style="width: 100%;" />
                  </el-col>
                  <el-col class="line" :span="2" :offset="2">-</el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="form.endTime" type="date" placeholder="选择结束日期" style="width: 100%;" />
                  </el-col>
                </el-form-item>
                <el-form-item label="备注">
                  <el-input v-model="form.intro" type="textarea" />
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>

          <el-row v-show="active===1" type="flex" justify="center">
            <el-col :span="16">
              <el-descriptions title="班级信息" :column="2" border>
                <el-descriptions-item label="班级名称">{{ form.name }}</el-descriptions-item>
                <el-descriptions-item label="专业名称">{{ form.profession }}</el-descriptions-item>
                <el-descriptions-item label="班级人数">无上限</el-descriptions-item>
                <el-descriptions-item label="班级期限">{{ form.beginTime }} - {{ form.endTime }}</el-descriptions-item>
                <el-descriptions-item label="备注">{{ form.intro }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>

          <el-row v-show="active===2" type="flex" justify="center">
            <el-col :span="8">
              <el-card>
                <el-result icon="success" title="创建成功" sub-title="班级二维码及连接已生成" />
              </el-card>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-card header="班级链接">
                <el-row>
                  <el-input v-model="form.linkContent" placeholder="请输入内容" :disabled="true">
                    <template slot="prepend">Https://</template>
                  </el-input>
                </el-row>
                <el-row>
                  <el-button type="primary" round>点击复制</el-button>
                </el-row>
              </el-card>

            </el-col>
            <el-col :span="6" :offset="1">
              <el-card header="班级二维码">
                <img src="https://cloud.jujuh.top/api/v3/file/source/24/30_1d4ab55bc585cec519791a842fe4f94e.png?sign=JQY95E6BBnJLpTYUP9GBsxRGW3jFtUwNLh3r4czdG-w%3D%3A0" width="100%">
              </el-card>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :offset="14">
              <el-button type="warning" plain @click="reset">重置</el-button>
              <el-button type="primary" plain @click="previous">上一步</el-button>
              <el-button v-if="active===0" type="primary" @click="next">创建</el-button>
              <el-button v-if="active===1" type="primary" @click="next">确认创建</el-button>
            </el-col>
          </el-row>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
    return {
      active: 0,
      form: {
        name: '',
        profession: '',
        peoples: '',
        intro: '',
        beginTime: '',
        endTime: '',
        linkContent: 'cloud.jujuh.top/s/6EcV'
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    next() {
      if (this.active < 3) { this.active += 1 }
    },
    previous() {
      if (this.active > 0) { this.active -= 1 }
    },
    reset() {
      console.log('重置表格')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
