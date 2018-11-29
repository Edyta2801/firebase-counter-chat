
import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'


const NewMessageForm = (props) => (
  <div>
    <TextField
      type="text"
      value={props.newMessageText}
      onChange={props.onNewMessageTextChangeHandler}
      fullWidth={true}
    />
    <RaisedButton
      button={'Add message!'}
      primary={true}
      onClick={props.onNewMessageAddClickHandler}
      fullWidth={true}
    />
  </div>
)

export default NewMessageForm