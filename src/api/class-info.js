export default {
  // 修改时 classrooms 和 choices 中的 id 需要一一对应
  classrooms: [{
    id: 2,
    date: '2021-2022第一学期',
    name: '大学英语（四）',
    classrooms: ['软工201', '软工202'],
    code: '12edxf2',
    teacher: '方慧敏',
    number: '12',
    beginTime: new Date(2022, 2, 3),
    endTime: new Date(2022, 5, 30),
    url: 'url("https://lsky-picture.stdcdn.com/uploads/2022/04/eb5c30a0ce1ac0429ceb43dd6103814a.png")'
  }, {
    id: 3,
    date: '2021-2022第二学期',
    name: '综合英语',
    classrooms: ['英师191', '英师192'],
    code: '12edxf2',
    teacher: '方慧敏',
    number: '22',
    beginTime: new Date(2022, 2, 4),
    endTime: new Date(2022, 5, 30),
    url: 'url("http://lsky.jujuh.top/i/2022/04/03/62497a4626769.png")'
  }],
  students: [{
    id: '2030110123',
    name: '宇文紫'
  }, {
    id: '2030110124',
    name: '张佳'
  }, {
    id: '2030110125',
    name: '王涛'
  }, {
    id: '2030110126',
    name: '张程'
  }, {
    id: '2030110127',
    name: '林天文'
  }, {
    id: '2030110128',
    name: '杨凯'
  }, {
    id: '2030110128',
    name: '刘赟涛'
  }, {
    id: '2030110128',
    name: '高佳洛'
  }, {
    id: '2030110128',
    name: '段智亮'
  }, {
    id: '2030110128',
    name: '蒋来'
  }, {
    id: '2030110128',
    name: '杨可欣'
  }, {
    id: '2030110128',
    name: '范文骁'
  }, {
    id: '2030110128',
    name: '王鼎'
  }, {
    id: '2030110128',
    name: '王宇墨'
  }, {
    id: '2030110128',
    name: '何宁'
  }, {
    id: '2030110128',
    name: '李梓豪'
  }, {
    id: '2030110128',
    name: '张浩然'
  }, {
    id: '2030110128',
    name: '韩伟'
  }, {
    id: '2030110128',
    name: '高婷婷'
  }, {
    id: '2030110128',
    name: '葛鑫奇'
  }, {
    id: '2030110128',
    name: '汪子晗'
  }],
  choices: [{
    value: 1,
    label: '综合英语',
    children: [
      { value: 2, label: '英师191' },
      { value: 3, label: '英师192' }
    ]
  }, {
    value: 4,
    label: '大学英语',
    children: [
      { value: 5, label: '软工201' },
      { value: 6, label: '软工202' }
    ]
  }]
}
