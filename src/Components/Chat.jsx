import React, { useState, useEffect } from 'react'
import { db } from '../firebase.js';
import SignOut from './SignOut';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div>
      <SignOut />
      {messages.map(({ id, text, photoURL }) => {
        <div key={id}>
          <img src={photoURL} alt='' />
          <p>{text}</p>
        </div>
      })}
      </div>
  )
}

export default Chat;