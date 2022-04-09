export default {
  question: [
    {
      id: 1,
      category: '填空题',
      question: '小程看一本故事书，第一天看了全书的15％少4页，这时已看的页数与剩下页数的比是1∶7。这本故事书共有多少页？',
      answers: ''
    },
    {
      id: 2,
      category: '填空题',
      question: '# 123123',
      answers: ''
    },
    {
      id: 3,
      category: '选择题',
      question: '# 这是一道选择题',
      answers: [{
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
      }]
    }
  ],
  timuku: [{
    id: 1,
    name: '听力',
    totalNumber: '105',
    rest: '42',
    origin: '查看',
    tag: '选择',
    questions: [
      {
        id: 101,
        name: '写作',
        difficulty: '简单',
        category: 'choice',
        content: '这是一道选择题',
        knowledge: ['写作题', '四级'],
        answers: {
          A: '123',
          B: '2',
          C: '3',
          D: '4'
        }
        // correct: this.answers.a3
      },
      {
        id: 102,
        name: '234',
        difficulty: '中等',
        category: 'judge',
        content: '这是一道判断题',
        knowledge: ['写作题', '四级'],

        answers: {
          A: '12',
          B: '2'
        }
        // correct: this.answers.a1
      },
      {
        id: 103,
        name: '123123',
        difficulty: '困难',
        category: 'blank',
        content: ' 这是一道填空题',
        knowledge: ['十五选十', '四级'],
        correct: ''
      },
      {
        id: 104,
        name: '听力',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力', '四级'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3'
          },
          {
            A: '4',
            B: '5',
            C: '6'
          }
        ]
      }
    ]
  }, {
    id: 2,
    name: '单项选择',
    totalNumber: '807',
    rest: '301',
    origin: '查看',
    tag: '选择'
  }, {
    id: 3,
    name: '完型填空',
    totalNumber: '104',
    rest: '9',
    origin: '查看'
  }, {
    id: 4,
    name: '十五选十',
    totalNumber: '88',
    rest: '44',
    origin: '查看'
  },
  {
    id: 5,
    name: '段落信息匹配',
    totalNumber: '62',
    rest: '21',
    origin: '查看'
  },
  {
    id: 6,
    name: '阅读理解',
    totalNumber: '533',
    rest: '115',
    origin: '查看'
  },
  {
    id: 7,
    name: '句子翻译',
    totalNumber: '78',
    rest: '45',
    origin: '查看'
  },
  {
    id: 8,
    name: '任务型阅读',
    totalNumber: '67',
    rest: '44',
    origin: '查看'
  },
  {
    id: 9,
    name: '书面表达',
    totalNumber: '68',
    rest: '32',
    origin: '查看'
  },
  {
    id: 10,
    name: '算法设计',
    totalNumber: '21',
    rest: '10',
    origin: '查看'
  }],
  category: [
    {
      id: 1,
      name: '英语四六级',
      value: 'English'
    },
    {
      id: 2,
      name: '高考数学',
      value: 'Math'
    },
    {
      id: 999,
      name: '自定义',
      value: 'customize'
    }
  ]
}
