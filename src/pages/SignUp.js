import React,{useState} from 'react'
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Page1.css"
function SignUp() {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);
    const [conPassError,setConPassError]=useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
const check=(e)=>{
    if (e.target.value !== password){
     setConPassError(true);
    }
    else{
        setConPassError(false);
    }
}
    const handleSubmit = (e) => {
        e.preventDefault();
    if(!emailError && !passwordError && !firstNameError && !lastNameError){
    createUserWithEmailAndPassword(auth, email, password, firstName, lastName)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        return window.location.href = '/';
    })
    .catch((error) => {
        setError(true)
    });
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
        setPasswordError('Password must contain a lowercase character, an uppercase character, a number, a special character, and be at least 8 characters long');
      } else {
        setPasswordError('');
        setPassword(e.target.value);
      }
    };

const firstNameValidate=(e)=>{
    if (!/^[a-zA-Z]+$/.test(e.target.value)) {
        setFirstNameError('First Name must contain alphabets');
    } else{
        setFirstNameError('');
        setFirstName(e.target.value);
    }
};
const lastNameValidate=(e)=>{
    if (!/^[a-zA-Z]+$/.test(e.target.value)) {
        setLastNameError('Last Name must contain alphabets');
    } else{
        setLastNameError('');
        setLastName(e.target.value);
    }
};
  return (
    <div className='form-container'>
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-group"> 
        <label>First Name
                <input type="text" className="form-control" placeholder="Enter your first name" onChange={firstNameValidate} />
            </label>
        </div>
        <div>{firstNameError && <span className="err-msg">{firstNameError}</span>}</div>
        <div className="form-group">
            <label>Last Name
                <input type="text" className="form-control" placeholder="Enter your last name" onChange={lastNameValidate} />
            </label>
        </div>
        <div>{lastNameError && <span className="err-msg">{lastNameError}</span>}</div>
        <div className="form-group">
            <label>Email
                <input type="email" className="form-control" placeholder="Enter your email" onChange={emailValidate} />
            </label>
        </div>
        <div>{emailError && <span className="err-msg">{emailError}</span>}</div>
        <div className="form-group">
            <label>Password
                <input type="password" className="form-control" placeholder="Enter your password" onChange={passwordValidate} />
            </label>
        </div>
        <div>{passwordError && <span className="err-msg">{passwordError}</span>}</div>
        <div className="form-group">
            <label>Confirm Password
                <input type="password" className="form-control" placeholder="Enter your password again" onChange={check} />
            </label>
        </div>
        <div>
            {conPassError && <span className="err-msg">Both passwords must be same</span>}
            {error && <span className='err-msg'>User already exists</span>}
        </div>
        <button type="submit" className="btn btn-primary">Sign up</button>
    </form>
    </div>
  )
}

export default SignUp