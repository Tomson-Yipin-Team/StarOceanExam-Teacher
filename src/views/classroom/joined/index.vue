<template>
  <div>
    <!--班级卡片-->
    <el-card class="card-container">
      <div slot="header" class="card-header">
        <span>
          已创建的班级
        </span>
        <span>
          <el-button type="primary" plain @click="handleCreate">创建新的班级</el-button>
        </span>
      </div>
      <el-col v-for="(item,index) in classrooms" :key="index" :span="5">
        <Class :class-info="item" class="class-card" />
      </el-col>
    </el-card>
    <el-row>
      <el-col :span="16">
        <student-table />
      </el-col>
      <el-col :span="8">
        <Action />
      </el-col>
    </el-row>

  </div>
</template>

<script>

import StudentTable from './components/StudentTable'
import Action from './components/Action'
import ClassInfo from '@/api/class-info'
import Class from './components/Class'

export default {
  name: 'Index',
  components: { StudentTable, Action, Class },
  data() {
    return {
      classrooms: ClassInfo.classrooms
    }
  },
  methods: {
    handleCreate() {
      this.$router.push({
        name: 'Join'
      })
    }
  }
}
</script>

<style scoped>
.card-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-container{
  margin: 20px;
}
.class-card{
  margin: 20px;
}
</style>
