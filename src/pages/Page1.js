import React,{useState} from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase-config'
import "./Page1.css"
import Page2 from './Page2';
function Page1() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        if(!emailError && !passwordError){
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setIsLoggedIn(true);
          })
          .catch((error) => {
            setError(true);
          });
    }
    else{
        setError(true);
    }
}
    const emailValidate=(e)=>{
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)) {
            setEmailError('Email should be of standard format');
          } else {
            setEmailError('');
            setEmail(e.target.value);
          }
     };

    const passwordValidate=(e)=>{
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\]:;<>,.?/~_+-=|]).{8,}/.test(e.target.value)) {
            setPasswordError('Password must contain a lowercase character, an uppercase character, a number and be at least 8 characters long');
          } else {
            setPasswordError('');
            setPassword(e.target.value);
          }
        };
        if (isLoggedIn) {
            return <Page2 />;
          }
        
  return (
    <div className='form-container'>
    <form className="form" onSubmit={handleLogin}>
        <div className="form-group">
            <label>Email
                <input type="email" className="form-control" placeholder="Enter your email" onChange={emailValidate} />
                
            </label>
            <div>{emailError && <span className="err-msg">{emailError}</span>}</div>
        </div>
        
        <div className="form-group">
            <label>Password
                <input type="password" className="form-control" placeholder="Enter your password" onChange={passwordValidate} />
            </label>
            <div>{passwordError && <span className="err-msg">{passwordError}</span>}</div>
        </div>
        
        <button type="submit" className="btn btn-primary">Login</button>
        <div>{error && <span className="err-msg">Wrong email or password</span>}</div>
        <p>New User? <a href="/signup" target="_blank">Sign up</a></p>
    </form>
    </div>
  )
}

export default Page1
