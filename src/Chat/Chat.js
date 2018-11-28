import React from 'react'
import { database } from '../firebaseConfig'

import NewMessageForm from './NewMessageForm'

class Chat extends React.Component {
    state = {
        newMessageText: 'krowa'
    }

    onNewMessageTextChangeHandler = event => (
        this.setState({ newMessageText: event.target.value })
    )

    onNewMessageAddClickHandler = () => {
        database.ref('/Chat').push({
            text: this.state.newMessageText,
            timestamp: Date.now()
        })
        this.setState({ newMessageText: '' })
    }

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