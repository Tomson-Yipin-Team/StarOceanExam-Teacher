export default {
  gourps: [{
    id: '1',
    name: '专业英语课程组（2021-2022学年第二学期）',
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
    name: '大学英语（四）课程组',
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
        text: `你好！`
      }
    },
    { type: 'text',
      author: `20221004`,
      data: {
        text: `早上好，夜之城！`
      }
    },
    { type: 'text',
      author: `20221054`,
      data: {
        text: `昨天的死人乐透，最后结果是满打满算的整整三十个！`
      }
    },
    { type: 'text',
      author: `20221066`,
      data: {
        text: `多亏了没完没了的帮派火并，光海伍德就挂了十个。但有一位警官也挂了，我看你们全得赔钱，因为NCPD肯定咽不下这口气。`
      }
    },
    { type: 'text',
      author: `20221068`,
      data: {
        text: `圣多明戈再次发生停电。电网遭人破坏，又是网络黑客干的好事。`
      }
    },
    { type: 'text',
      author: `20221081`,
      data: {
        text: `与此同时，威斯特布鲁克的创伤小组还在人行道上替赛博精神病的受害者收尸。`
      }
    },
    { type: 'text',
      author: `20221004`,
      data: {
        text: `而在太平洲呢…好吧…太平洲还是那个太平洲。`
      }
    },
    { type: 'text',
      author: `20221004`,
      data: {
        text: `我是你们的铁哥们斯坦。和我一起，开始逐梦夜之城的新一天吧。`
      }
    },
    { type: 'file',
      author: `20221004`,
      data: {
        file: {
          name: '新闻听力.mp3',
          url: 'https://source.jujuh.top/audio/%E6%96%B0%E9%97%BB2.mp3'
        }
      }
    }
  ]
}
