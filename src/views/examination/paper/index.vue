<template>
  <div>
    <el-card>
      <el-row type="flex" justify="end">
        <el-button @click="createDialog =true">创建新的试卷</el-button>
      </el-row>
      <paper-list />
    </el-card>
    <!--TODO: 修改图片-->
    <el-dialog :visible.sync="createDialog" width="50%" title="创建试卷">
      <el-row type="flex" justify="center">请选择一种创建试卷的方式</el-row>
      <el-row type="flex" justify="center">
        <el-col :span="11" class="content">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://source.jujuh.top/picture/1.jpg" class="image" style="width: 100%">
            <div style="padding: 14px;">
              <span class="text">智能组卷</span>
              <div>
                <el-button type="text" class="button" @click="toAIPaper">使用</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="11" :offset="1" class="content">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://source.jujuh.top/picture/2.jpg" class="image" style="width: 100%">
            <div style="padding: 14px;">
              <span class="text">手动创建</span>
              <div>
                <el-button type="text" class="button" @click="toCreate">使用</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import PaperList from './components/PaperList'
export default {
  name: 'Index',
  components: { PaperList },
  data() {
    return {
      createDialog: false
    }
  },
  methods: {
    toCreate() {
      this.$router.push({
        path: '/examination/composition',
        query: {
          way: 'manual',
          name: '新建试卷'
        }
      })
    },
    toAIPaper() {
      this.$router.push({
        path: '/examination/composition',
        query: {
          way: 'ai',
          name: '新建试卷'
        }
      })
    }
  }
}
</script>

<style scoped>
.content{
  text-align: center;
  margin-top: 10px;
}

</style>
