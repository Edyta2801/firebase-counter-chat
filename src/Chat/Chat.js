import React from 'react'

class Message extends React.Component {
    state = {
        newMessageText: 'krowa'
    }
    onNewMessageTextChangeHandler=event=>(
        this.setState({onNewMessageText:event.target.value})
    )
onNewMessageAddClickHandler=()=>{}

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.newMessageText}
                    onChange={this.onNewMessageTextChangeHandler}
                />
                <button
                onClick={this.oneNewMessageAddClickHandler}
                >
                Add message!
                </button>
            </div>
        )
    }
}

export default Message