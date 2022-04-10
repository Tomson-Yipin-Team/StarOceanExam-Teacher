export default {
  studentAnswer: [{
    studentId: 0,
    name: '张三',
    answer: [{
      questionId: 0,
      content: '1111'
    }, {
      questionId: 1,
      content: '222222'
    }]
  }, {
    studentId: 1,
    name: '张三',
    answer: [{
      questionId: 0,
      content: '33333'
    }, {
      questionId: 1,
      content: '44444'
    }]
  }],
  question: [{
    questionId: 0,
    category: 'writing',
    content: `123123123123123123123123`,
    trueAnswer: `1`
  }, {
    questionId: 1,
    category: 'translation', // 题目类型
    content: `23123123131231231231`, // 题目
    trueAnswer: `2` // 参考答案
  }]
}
