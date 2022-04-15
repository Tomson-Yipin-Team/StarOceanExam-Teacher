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
      question: '在固定分区存储管理中，处理器需设置（）寄存器以保证进程在所在分区内运行。',
      answers: [{

        A: '变址',
        B: '上、下限',
        C: '基址、限长',
        D: '空闲区'
      }]
    }
  ],
  timuku: [{
    id: 1,
    name: '听力',
    totalNumber: '42',
    rest: '15',
    origin: '查看',
    tag: '12',
    questions: [
      {
        id: 101,
        name: '1',
        score: '4',
        difficulty: '中等',
        category: 'listen',
        content: '在固定分区存储管理中，处理器需设置**（  ）**寄存器以保证进程在所在分区内运行。',
        knowledge: ['长对话', '日常生活', 'cet6'],
        answers: [{
          content: '这是题干',
          A: '123',
          B: '2',
          C: '3',
          D: '4',
          correct: 'A'
        }]
      },
      {
        id: 102,
        name: '2',
        score: '8',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '幽默故事', 'cet4'],

        answers: [{
          '对': '12',
          '错': '2',
          correct: '对'
        }]
        // correct: this.answers.a1
      },
      {
        id: 103,
        name: '3',
        score: '4',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '西方文化', 'cet6'],
        correct: '123123'
      },
      {
        id: 104,
        name: '4',
        score: '4',
        difficulty: '中等',
        category: 'listen',
        content: '**Questions 22 to 25 are based on the conversation you have just heard.**',
        knowledge: ['长对话', '日常生活', 'cet6'],
        audio: 'https://source.jujuh.top/audio/%E6%96%B0%E9%97%BB1.mp3',
        answers: [
          {
            A: 'A) Heavy floods.',
            B: 'B) Safety concerns.',
            C: 'C) Bad economy.',
            D: 'D) Workers’ strikes.',
            correct: 'A'
          },
          {
            A: 'A) It is competitive with its numerous tourist destinations.',
            B: 'B) It provides many job opportunities for French people.',
            C: 'C) It is the biggest concern of the French government.',
            D: 'D) It plays an important role in the nation’s economy.',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '5',
        score: '8',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '日常生活', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '6',
        score: '8',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['讲座/演讲', '名人传记', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '7',
        score: '8',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '奇闻轶事', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '8',
        score: '8',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['讲座/演讲', '幽默故事', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '9',
        score: '4',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '调查研究', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '10',
        score: '8',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '灾难危机', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '11',
        score: '4',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '日常生活', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '12',
        score: '3',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '西方文化', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '13',
        score: '8',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '学校教育', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '14',
        score: '3',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['短篇新闻', '时事新闻', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '15',
        score: '4',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '西方文化', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '16',
        score: '2',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['短篇新闻', '时事新闻', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '17',
        score: '8',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['讲座/演讲', '名人传记', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '18',
        score: '6',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '奇闻轶事', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '19',
        score: '4',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '日常生活', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '20',
        score: '4',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '西方文化', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '21',
        score: '8',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '灾难危机', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '22',
        score: '4',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '西方文化', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '23',
        score: '4',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '调查研究', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '24',
        score: '4',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '西方文化', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '25',
        score: '8',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['讲座/演讲', '名人传记', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '26',
        score: '4',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '奇闻轶事', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '27',
        score: '4',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '学校教育', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '28',
        score: '3',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '灾难危机', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '29',
        score: '2',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['短篇新闻', '时事新闻', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '30',
        score: '8',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '名人传记', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '31',
        score: '4',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '幽默故事', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '32',
        score: '4',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '日常生活', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '33',
        score: '8',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['讲座/对话', '名人传记', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '34',
        score: '3',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '调查研究', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '35',
        score: '4',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '灾难危机', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '36',
        score: '8',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '幽默故事', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '37',
        score: '4',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '学校教育', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '38',
        score: '4',
        difficulty: '简单',
        category: 'listen',
        content: '长对话',
        knowledge: ['讲座/对话', '奇闻轶事', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '39',
        score: '3',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['新闻听力', '时事新闻', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '40',
        score: '4',
        difficulty: '简单',
        category: 'listen',
        content: '英语听力',
        knowledge: ['长对话', '西方文化', 'cet4'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '41',
        score: '3',
        difficulty: '中等',
        category: 'listen',
        content: '英语听力',
        knowledge: ['听力篇章', '学校教育', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      },
      {
        id: 104,
        name: '42',
        score: '6',
        difficulty: '困难',
        category: 'listen',
        content: '英语听力',
        knowledge: ['讲座/演讲', '名人传记', 'cet6'],
        audio: 'http://source.jujuh.top/audio/test.mp3',
        answers: [
          {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            correct: 'A'
          },
          {
            A: '4',
            B: '5',
            C: '6',
            D: '7',
            correct: 'B'
          }
        ]
      }
    ]
  }, {
    id: 2,
    name: '单项选择',
    totalNumber: '30',
    rest: '45',
    origin: '查看',
    tag: '30'
  },
  {
    id: 3,
    name: '十五选十',
    totalNumber: '5',
    rest: '2',
    origin: '查看',
    tag: '3',
    questions: [{
      id: 101,
      name: '1',
      difficulty: '简单',
      category: 'choose',
      content: '这是一道选择题',
      knowledge: ['十五选十', 'cet4'],
      answers: [{
        content: '',
        A: '123',
        B: '2',
        C: '3',
        D: '4',
        E: '5',
        F: '6',
        G: '7',
        H: '8',
        I: '9',
        J: '10',
        K: '11',
        L: '12',
        M: '13',
        N: '14',
        O: '15',
        correct: ['A', 'C', 'D', 'B', 'I', 'J', 'K', 'M', 'G', 'H']
      }]
      // correct: this.answers.a3
    }]
  },
  {
    id: 4,
    name: '段落信息匹配',
    totalNumber: '5',
    rest: '21',
    origin: '查看',
    tag: '12'

  },
  {
    id: 5,
    name: '阅读理解',
    totalNumber: '10',
    rest: '115',
    origin: '查看',
    tag: '12',
    questions: [
      {
        id: 101,
        name: '1',
        difficulty: '简单',
        category: 'reading',
        content: `**Passage One**
        **Questions 46 to 50 are based on the following passage.**
        According to the majority of Americans, women are every bit as capable of being good political leaders as men. The same can be said of their ability to dominate the corporate boardroom. And according to a new Pew Research Center survey on women and leadership, most Americans find women indistinguishable from men on key leadership traits such as intelligence and capacity for innovation, with many saying they’re stronger than men in terms of being passionate and organized leaders.        
        So why, then, are women in short supply at the top of government and business in the United States? According to the public, at least, it’s not that they lack toughness, management talent or proper skill sets.
        It’s also not all about work-life balance. Although economic research and previous survey findings have shown that career interruptions related to motherhood may make it harder for women to advance in their careers and compete for top executive jobs, relatively few adults in the recent survey point to this as a key barrier for women seeking leadership roles. Only about one-in-five say women’s family responsibilities are a major reason why there aren’t more females in top leadership positions in business and politics.
        Instead, topping the list of reasons, about four-in-ten Americans point to a double standard for women seeking to climb to the highest levels of either politics or business, where they have to do more than their male counterparts to prove themselves. Similar shares say the *electorate*(选民)and corporate America are just not ready to put more women in top leadership positions.
        As a result, the public is divided about whether the imbalance in corporate America will change in the foreseeable future, even though women have made major advances in the workplace. While 53% believe men will continue to hold more top executive positions in business in the future, 44% say it’s only a matter of time before as many women are in top executive positions as men. Americans are less doubtful when it comes to politics: 73% expect to see a female president in their lifetime.`,
        knowledge: ['短篇新闻', 'cet4'],
        answers: [{
          content: `46.What do most Americans think of women leaders according to a new Pew Research Center survey?`,
          A: 'A)They have to do more to distinguish themselves.',
          B: 'B)They have to strive harder to win their positions.',
          C: 'C)They are stronger than men in terms of willpower.',
          D: 'D)They are just as intelligent and innovative as men.',
          correct: 'A'
        }, {
          content: `47.What do we learn from previous survey findings about women seeking leadership roles?`,
          A: 'A)They have unconquerable difficulties on their way to success.',
          B: 'B)They are lacking in confidence when competing with men.',
          C: 'C)Their failures may have something to do with family duties.3',
          D: 'D)Relatively few are hindered in their career advancement.',
          correct: 'C'
        }, {
          content: `48.What is the primary factor keeping women from taking top leadership positions according to the recent survey?`,
          A: 'A)Personality traits.',
          B: 'B)Family responsibilities.',
          C: 'C)Gender bias.',
          D: 'D)Lack of vacancies.',
          correct: 'D'
        }, {
          content: `49.What does the passage say about corporate America in the near future?`,
          A: 'A)More and more women will sit in the boardroom.',
          B: 'B)Gender imbalance in leadership is likely to change.',
          C: 'C)The public is undecided about whether women will make good leaders.',
          D: 'D)People have opposing opinions as to whether it will have more women leaders.',
          correct: 'B'
        }, {
          content: `50.What do most Americans expect to see soon on America’s political stage?`,
          A: 'A)A woman in the highest position of government.',
          B: 'B)More and more women actively engaged in politics.',
          C: 'C)A majority of women voting for a female president.',
          D: 'D)As many women in top government positions as men.',
          correct: 'A'
        }]
      }]
  },
  {
    id: 6,
    name: '句子翻译',
    totalNumber: '5',
    rest: '45',
    origin: '查看',
    tag: '12'
  },
  {
    id: 7,
    name: '书面表达',
    totalNumber: '5',
    rest: '5',
    origin: '查看',
    tag: '4',
    questions: [{
      id: 101,
      name: '1',
      score: '6',
      difficulty: '简单',
      category: 'choice',
      content: '这是一道选择题',
      knowledge: ['短篇新闻', 'cet4'],
      answers: [{
        content: '这是题干',
        A: '123',
        B: '2',
        C: '3',
        D: '4',
        correct: 'A'
      }]
    }]
  }
  ],
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
