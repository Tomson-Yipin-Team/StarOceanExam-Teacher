<template>
  <div>
    <el-card style="height: 450px;margin-right: 20px">
      <div slot="header">
        <el-row class="card-title">
          <span>
            待审核列表
          </span>
          <span>
            <el-button-group>
              <el-button>通过全部</el-button>
              <el-button>拒绝全部</el-button>
            </el-button-group>
          </span>
        </el-row>
      </div>
      <el-table
        :data="tableData"
        style="width:100%"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="150px"
        />
        <el-table-column
          prop="name"
          label="姓名"
        />
        <el-table-column
          prop="tip"
          label="备注"
          width="300"
        />
        <el-table-column
          label="操作"
          fixed="right"
          width="150"
        >
          <el-button-group>
            <el-button size="mini" type="primary">批准</el-button>
            <el-button size="mini" type="danger">拒绝</el-button>
          </el-button-group>
        </el-table-column>
      </el-table>
    </el-card>
    <!--</el-col>-->
    <!--</el-row>-->
  </div>
</template>

<script>
export default {
  name: 'Action',
  data() {
    return {
      tableData: [{
        date: '2022-03-03',
        name: '蒋来',
        tip: '我是软工202蒋来'
      }, {
        date: '2022-03-03',
        name: '刘赟涛',
        tip: '软工201班长刘赟涛'
      }]
    }
  },
  methods: {
    createClass() {
      this.$router.push({ path: '/classroom/join' })
    }
  }
}
</script>

<style scoped>
.card-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
