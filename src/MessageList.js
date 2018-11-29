import React from 'react'
import { ListItem } from 'material-ui/List'
import moment from 'moment'

const MessagesList = (props) => (
    <div>
        {
            props.messages.map(message => (
                <ListItem
                    primaryText={message.text}
                    secondaryText={moment(message.timestamp).format('DD-MM-YYY hh:mm')}
                    key={message.key}
                />
            ))
        }
    </div>
)

export default MessagesList
