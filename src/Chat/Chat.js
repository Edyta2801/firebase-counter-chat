import React from 'react'

class Message extends React.Component {
    state = {
        newMessageText: 'krowa'
    }


    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.newMessageText}
                    onChange={(event) => this.setState({ newMessageText: event.target.value })}
                />
                <button>
                Add message!
                </button>
            </div>
        )
    }
}

export default Message