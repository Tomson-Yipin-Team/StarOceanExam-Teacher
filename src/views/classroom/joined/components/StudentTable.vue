<template>
  <div>
    <el-row type="flex" justify="center" class="table">
      <el-col :span="23">
        <el-card>
          <div slot="header">
            <el-row type="flex" justify="center">
              已创建班级
            </el-row>
          </div>
          <el-table
            :data="tableData"
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
              prop="subject"
              label="专业"
              sortable
              width="180"
              column-key="subject"
            />
            <el-table-column
              prop="date"
              label="创建日期"
              width="150"
              sortable
            />
            <el-table-column
              prop="end"
              label="结束日期"
              width="150"
              sortable
            />
            <el-table-column
              prop="name"
              label="班级名称"
              sortable
            />
            <el-table-column
              align="center"
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
export default {
  name: 'StudentTable',
  data() {
    return {
      tableData: [{
        id: '1',
        subject: '软件工程',
        date: '2020-03-02',
        end: '2024-03-02',
        name: '软工202'
      }, {
        id: '7',
        subject: '软件工程',
        date: '2021-03-02',
        end: '2025-03-02',
        name: '软工211'
      }, {
        id: '3',
        subject: '经管',
        date: '2022-03-02',
        end: '2024-03-02',
        name: '经管222'
      }, {
        id: '2',
        subject: '大数据',
        date: '2019-03-02',
        end: '2023-03-02',
        name: '大数据202'
      }, {
        id: '6',
        subject: '专业英语',
        date: '2020-03-02',
        end: '2024-03-02',
        name: '英语202'
      }]
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
    }
  }
}
</script>

<style scoped>

</style>
