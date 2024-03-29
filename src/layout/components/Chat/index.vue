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
import Groups from '@/api/groups'

Vue.use(Chat)
export default {
  name: 'Chat',
  data() {
    return {
      participants: Groups.participants, // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://lsky-picture.stdcdn.com/uploads/2022/04/0047763afbfa25ffc32a1804d871760c.png',
      messageList: Groups.messageList,
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: 'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)',
          text: '#ffffff'
        },
        launcher: {
          bg: '#7367F0'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#7367F0',
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
