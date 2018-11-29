
import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'


const NewMessageForm = (props) => (
  <Paper
    style={{
      position: 'fixed',
      bottom: 0,
      padding: 20,
      width: '100%',
      zIndex: 9999,
  }}
  >
    <TextField
      type="text"
      name='message'
      value={props.newMessageText}
      onChange={props.onNewMessageTextChangeHandler}
      fullWidth={true}
    />
    <RaisedButton
      label={'Add message!'}
      primary={true}
      onClick={props.onNewMessageAddClickHandler}
      fullWidth={true}
    />
  </Paper>
)

export default NewMessageForm