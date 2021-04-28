import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/loginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username'))
    return <LoginForm />
    return (
        <ChatEngine 
            height ="100vh"
            projectID="6a6bd49e-451c-4581-9447-f9283c52d64e"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;