export default {
  gourps: [{
    id: '1',
    name: '大学英语（四）课程组（2021-2022学年第二学期）',
    users: [{
      name: '张建国',
      userId: '20221004',
      role: '组长'
    }, {
      name: '方慧敏',
      userId: '20221054',
      role: '组员'
    }, {
      name: '杨涛',
      userId: '20221066',
      role: '组员'
    }, {
      name: '徐令红',
      userId: '20221068',
      role: '组员'
    }, {
      name: '吴子帆',
      userId: '20221081',
      role: '组员'
    }, {
      name: '邓湛静',
      userId: '20221084',
      role: '组员'
    }],
    manager: {
      name: '张建国',
      userId: '3'
    }
  }, {
    id: '2',
    name: '综合英语（四）课程组（2021-2022学年第二学期）',
    users: [{
      name: '方慧敏',
      userId: '6'
    }, {
      name: '闫俊',
      userId: '4'
    }, {
      name: '蔡玲',
      userId: '5'
    }],
    manager: {
      name: '汪美美',
      userId: '5'
    }
  }],
  manager: [{
    id: '1',
    name: '专业英语课程组',
    value: '高三英语年级组',
    users: [{
      name: '方慧敏(自己)',
      userId: '1'
    }, {
      name: '陈东鑫',
      userId: '2'
    }, {
      name: '程伟',
      userId: '3'
    }],
    manager: {
      name: '方慧敏',
      userId: '3'
    },
    shareURL: 'https://www.tutu147.top/'
  }],
  // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
  participants: [{
    name: `张建国`,
    id: '20221004',
    imageUrl: 'https://lsky-picture.stdcdn.com/uploads/2022/04/c31b59201d474a040a207f4a088e3fe7.jpg',
    role: '组长'
  }, {
    name: '方慧敏',
    id: '20221054',
    imageUrl: 'https://lsky-picture.stdcdn.com/uploads/2022/04/4ae08d3c1bf594c010d59aa9c16c0fea.jpg'
  }, {
    name: '杨涛',
    id: '20221066',
    imageUrl: 'https://lsky-picture.stdcdn.com/uploads/2022/04/0b4a8796f1cf97a4611526e5a8b8242c.jpg'
  }, {
    name: '徐令红',
    id: '20221068',
    imageUrl: 'https://lsky-picture.stdcdn.com/uploads/2022/04/e77651a91d007b29ca9c4655626c6040.jpg'
  }, {
    name: '吴子帆',
    id: '20221081',
    imageUrl: 'https://lsky-picture.stdcdn.com/uploads/2022/04/2a67111e4f2aebef85585d8f400269dd.jpg'
  }, {
    name: '邓湛静',
    id: '20221084',
    imageUrl: 'https://lsky-picture.stdcdn.com/uploads/2022/04/2e8732a868d2f7c114aebd2bffe56a57.jpg'
  }],
  // the list of the messages to show, can be paginated and adjusted dynamically
  messageList: [
    {
      type: 'text',
      author: `me`,
      data: {
        text: `现在的学生啊，真是一届不如一届了！`
      }
    },
    { type: 'text',
      author: `20221004`,
      data: {
        text: `确实啊，一年考得比一年差！`
      }
    },
    { type: 'text',
      author: `20221054`,
      data: {
        text: `但是上学期我们班上还有不少能考到九十分以上的呢`
      }
    },
    { type: 'text',
      author: `20221066`,
      data: {
        text: `前两天班上同学还来问我简单的不能再简单的问题了，哎，我都怀疑是不是我教的不好`
      }
    },
    { type: 'text',
      author: `20221068`,
      data: {
        text: `今天上课提问，学生们又是啥都不会，再这样下去，领导又要给我压力了。`
      }
    },
    { type: 'text',
      author: `20221081`,
      data: {
        text: `张老师，这次期末考试的试卷得出的简单一点啊`
      }
    },
    { type: 'text',
      author: `20221004`,
      data: {
        text: `已经够简单啦，试卷我已经出好了`
      }
    },
    { type: 'text',
      author: `20221004`,
      data: {
        text: `我现在把试卷ID发给你们，试卷被我封存了，密码我在考试前再告诉各位`
      }
    },
    { type: 'text',
      author: `20221004`,
      data: {
        // file: {
          text: '试卷名称：2021-2022-2第二学期四级考试模拟\n\n\n试卷ID：1000075885',
          // url: 'https://source.jujuh.top/audio/%E6%96%B0%E9%97%BB2.mp3'
        // }
      }
    },
  ]
}
