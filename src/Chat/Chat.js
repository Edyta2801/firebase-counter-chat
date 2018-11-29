import React from 'react'

import { database } from '../firebaseConfig'
import { mapObjectToArray } from '../utils'
import NewMessageForm from './NewMessageForm'
import MessagesList from '../MessageList';

const dbMessagesRef = database.ref('/Chat')

class Chat extends React.Component {
  state = {
    newMessageText: 'krowa',
    messages: []
  }

  componentDidMount() {
    dbMessagesRef.on(
      'value',
      snapshot => this.setState({
        messages: mapObjectToArray(snapshot.val()).reverse()
      })
    )
  }

  onDeleteMessageClickHandler=messageKey=>{
    //database.ref(jfddl6'messages/${messagesKey}')
    dbMessagesRef.child(messageKey)
    .remove()
    //same thing- .set(null)

  }

  onNewMessageTextChangeHandler = event => (
    this.setState({ newMessageText: event.target.value })
  )

  componentWillUnmunt() {
    dbMessagesRef.off()
  }

  onNewMessageAddClickHandler = () => {
    dbMessagesRef.push({
      text: this.state.newMessageText,
      timestamp: Date.now()
    })
  }

  render() {
    return (
      <div>
        <NewMessageForm
          newMessageText={this.state.newMessageText}
          onNewMessageTextChangeHandler={this.onNewMessageTextChangeHandler}
          onNewMessageAddClickHandler={this.onNewMessageAddClickHandler}
        />
        <MessagesList
          messages={this.state.messages}
          onDeleteMessageClickHandler={this.onDeleteMessageClickHandler}
        />
      </div>
    )
  }
}
export default Chat