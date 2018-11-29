import React from 'react'

import { database } from '../firebaseConfig'
import { mapObjectToArray } from '../utils'
import NewMessageForm from './NewMessageForm'

const dbMessagesRef = database.ref('/Chat')

class Chat extends React.Component {
  state = {
    newMessageText: 'krowa',
    messages: []
  }



  ComponentDidMount() {
    dbMessagesRef.on(
      'value',
      snapshot => this.setState({
        messages: mapObjectToArray(snapshot.val()).reverse()
      })
    )
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





































  // componentDidMount() {
  //   dbMessagesRef.on(
  //     'value',
  //     snapshot => {
  //       const messages = Object.entries(
  //         snapshot.val()
  //       ).map(entry => ({
  //         ...entry[1],
  //         key: entry[0]
  //       }))

  //       this.setState({ messages: messages })
  //     }
  //   )
  // }

  // componentWillUnmount(){
  //   dbMessagesRef.off()
  // }

  // onNewMessageTextChangeHandler = event => (
  //   this.setState({ newMessageText: event.target.value })
  // )

  // onNewMessageAddClickHandler = () => {
  //   dbMessagesRef.push({
  //     text: this.state.newMessageText,
  //     timestamp: Date.now()
  //   })
  //   this.setState({ newMessageText: '' })
  // }

  render() {
    return (
      <div>
        <NewMessageForm
          newMessageText={this.state.newMessageText}
          onNewMessageTextChangeHandler={this.onNewMessageTextChangeHandler}
          onNewMessageAddClickHandler={this.onNewMessageAddClickHandler}
        />
      </div>
    )
  }
}
export default Chat