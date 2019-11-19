import React, { Component } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const URL = 'ws://10.234.100.131:3030'

class Chat extends Component {
  state = {
    name: 'Bob',
    messages: [],
  }

  ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
  this.setState(state => ({ messages: [message, ...state.messages] }))


  submitMessage = messageString => {
    var think = false;
    var now;
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString, date: now, think: think}
    if (messageString.includes('/nick ')) {
      var new_Nick =  messageString.replace('/nick', '');
      this.setState({ name: new_Nick });
    } else if (messageString.includes('/think ')) {
      var new_Message = messageString.replace('/think', '');
      message.message = new_Message;
      message.think = true;
      this.ws.send(JSON.stringify(message));
      this.addMessage(message);

    } else if (messageString.includes('/oops')) {

    } else {
      var today = new Date();
      now = today.getHours()+':'+today.getMinutes();
      this.setState({ date: now});
      this.ws.send(JSON.stringify(message));
      this.addMessage(message);
    }
  }


  render() {
    return (
      <div className="chat">
      <p type="text" id='name' className="center">  {this.state.name} </p> 

      <div className="inside">
      <div className="reverse">    
      {this.state.messages.map((message, index) =>
        <ChatMessage key={index} message={message.message} name={message.name} date={this.state.date} myself={message.name === this.state.name} think={message.think} />,
        )}
      </div>
      </div>

      <ChatInput ws={this.ws} onSubmitMessage={messageString => this.submitMessage(messageString)}/>
      </div>
      )
  }
}

export default Chat