export default {
  ownClassroom: [{
    id: 6,
    subject: '大学英语',
    date: '2020-03-02',
    end: '2024-03-02',
    name: '软工202'
  }, {
    id: 5,
    subject: '大学英语',
    date: '2021-03-02',
    end: '2025-03-02',
    name: '软嵌201'
  }, {
    id: 2,
    subject: '专业英语',
    date: '2022-03-02',
    end: '2024-03-02',
    name: '经管202'
  }, {
    id: 7,
    subject: '大学英语',
    date: '2019-03-02',
    end: '2023-03-02',
    name: '大数据202'
  }, {
    id: 3,
    subject: '专业英语',
    date: '2020-03-02',
    end: '2024-03-02',
    name: '英语202'
  }],
  choices: [{
    value: 1,
    label: '专业英语',
    children: [
      { value: 2, label: '经管202' },
      { value: 3, label: '英语202' }
    ]
  }, {
    value: 4,
    label: '大学英语',
    children: [
      { value: 5, label: '软嵌201' },
      { value: 6, label: '软工202' },
      { value: 7, label: '大数据202' }
    ]
  }]
}
