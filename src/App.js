import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import './style/App.css'
import ChatFeed from './components/ChatFeed';


const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="93bd78e2-259d-495c-9989-aaa7c5813fb9"
            userName="Nawwa"
            userSecret="yaaalu@123"
            // renderChatFeed={
            //     (chatAppProps) => <ChatFeed {... chatAppProps} />
            // }
        />
    )
}

export default App;