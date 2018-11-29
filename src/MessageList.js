import React from 'react'
import { ListItem } from 'material-ui/List'
import moment from 'moment'
import IconButton from 'material-ui/IconButton'

import DeleteIcon from 'material-ui/svg-icons/action/delete'

const MessagesList = (props) => (
    <div>
        {
            props.messages.map(message => (
                <ListItem
                    primaryText={message.text}
                    secondaryText={moment(message.timestamp).format('DD-MM-YYY hh:mm')}
                    key={message.key}
                    rightIconButton={
                        <IconButton
                            onClick={() => props.onDeleteMessageClickHandler(message.key)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            ))
        }
    </div>
)

export default MessagesList
