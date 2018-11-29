import React from 'react'

const MessagesList =(props) =>(
    <div>
    {
        this.state.messages.map(message => (
          <div
            key={message.key}
          >
            {message.text}
          </div>
        ))
      }
</div>
)

export default MessagesList
