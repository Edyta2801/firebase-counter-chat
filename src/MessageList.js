import React from 'react'

const MessagesList =(props) =>(
    <div>
    {
        props.messages.map(message => (
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
