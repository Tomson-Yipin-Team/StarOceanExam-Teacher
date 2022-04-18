<template>
  <div>
    <beautiful-chat
      :participants="participants"
      :title-image-url="titleImageUrl"
      :on-message-was-sent="onMessageWasSent"
      :message-list="messageList"
      :new-messages-count="newMessagesCount"
      :is-open="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :show-emoji="true"
      :show-file="true"
      :show-edition="true"
      :show-deletion="true"
      :show-typing-indicator="showTypingIndicator"
      :show-launcher="true"
      :show-close-button="true"
      :colors="colors"
      :always-scroll-to-bottom="alwaysScrollToBottom"
      :disable-user-list-toggle="false"
      :message-styling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import Chat from 'vue-beautiful-chat'
// import Groups from '@/api/groups'
Vue.use(Chat)
export default {
  name: 'Chat',
  data() {
    return {
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
      }], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
        { type: 'text', author: `me`, data: { text: `你好！` }},
        { type: 'text', author: `20221004`, data: { text: `早上好，夜之城！` }}
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text }})
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message]
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
      console.log('Emit typing event')
    },
    editMessage(message) {
      const m = this.messageList.find(m => m.id === message.id)
      m.isEdited = true
      m.data.text = message.data.text
    }
  }
}
</script>

<style scoped>

</style>
