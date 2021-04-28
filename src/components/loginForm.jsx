import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [error,setError] = useState('');
    const handleSubmit= async (e) =>{
            e.preventDefault();

            const authObject ={ 'Project-ID': "6a6bd49e-451c-4581-9447-f9283c52d64e", 'User-Name': username, 'User-Secret':password };
            // username / password => chatengine -> give message
            try {
                await axios.get('https://api.chatengine.io/chats',{ headers: authObject });
                //works out -> successfully logged in
                localStorage.setItem('username',username);
                localStorage.setItem('password',password);

                window.location.reload();
            } catch (error) {
                //error -> try with new username
                setError("Oooops, incorrect credentials");
            }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}
export default LoginForm;
