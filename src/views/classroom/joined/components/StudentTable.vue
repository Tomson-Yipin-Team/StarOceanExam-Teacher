<template>
  <div>
    <el-row type="flex" justify="center" class="table">
      <el-col>
        <el-card class="card-container">
          <div slot="header">
            班级列表
          </div>
          <el-table
            :data="classrooms"
            style="width: 100%"
            stripe
          >
            <el-table-column
              prop="id"
              lable="编号"
              sortable
              width="100"
            />
            <el-table-column
              prop="name"
              label="课程"
              sortable
              column-key="name"
            />
            <el-table-column
              prop="date"
              label="学期"
              width="250"
            />
            <el-table-column
              #default="scope"
              label="开始日期"
              width="150"
            >
              {{ countTime(scope.row.beginTime) }}
            </el-table-column>
            <el-table-column
              #default="scope"
              label="结束日期"
              width="150"
            >
              {{ countTime(scope.row.endTime) }}
            </el-table-column>
            <el-table-column
              #default="scope"
              label="教授班级"
              width="250"
              sortable
            >
              <span v-for="(item,index) in scope.row.classrooms" :key="index">{{ item }} </span>
            </el-table-column>
            <el-table-column
              prop="number"
              label="班级人数"
            />
            <el-table-column
              fixed="right"
              label="操作"
              width="200"
            >
              <template>
                <el-row type="flex" justify="center">
                  <el-button-group>
                    <el-button type="primary" icon="el-icon-edit" />
                    <el-button type="primary" icon="el-icon-share" />
                    <el-button type="primary" icon="el-icon-delete" />
                  </el-button-group>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import classrooms from '@/api/classrooms'
import ClassInfo from '@/api/class-info'
import moment from 'moment'

export default {
  name: 'StudentTable',
  data() {
    return {
      tableData: classrooms.ownClassroom,
      classrooms: ClassInfo.classrooms
    }
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('subject')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    countTime(time) {
      return moment(time).format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>
.card-container{
  margin-right: 20px;
  margin-left: 20px;
  height: 450px;
}
</style>
