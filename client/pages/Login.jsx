import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export function Login() {

  const navigate = useNavigate();
  const ctx = useContext(UserContext);
  const {loginUser, person} = ctx;
  
  const [user, setUser] = useState()
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const [formErr, setFormErr] = useState('');
  const [formValid, setFormValid] = useState('');

  const symbList4 = '`~!#$%^&*()_+=[]{}|-":;?/><,\'';
  const pwdFilter = /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{5,20}\w)/;
  const emailFilter = /^\S+@\S+\.\S+$/;

  function updateEmail(e) {
    setEmail(e.target.value);

    if (!e.target.value || !emailFilter.test(e.target.value)) {
      setEmailErr(`field can't be empty, email format name@example.com`);
      setEmailValid(false);
      return;
    } else {
      setEmailErr(false);
      setEmailValid(true);
    }

    for (const i of symbList4) {
      for (const j of email) {
        if (i === j) {
          return setEmailErr(`can't use symbols`);
        }
      }
    }
  }
  function updatePassword(e) {
    setPassword(e.target.value);

    if (!e.target.value || e.target.value.length < 8 || !pwdFilter.test(e.target.value)) {
      setPasswordErr(
        `The password must consist of min 8 charackters,f one lowercase letter, one uppercase letter, one symbol and one number.`,
      );
      setPasswordValid(false);
      return;
    } else {
      setPasswordErr(false);
      setPasswordValid(true);
    }
  }

  useEffect(() => {
    setUser({
        email: email,
        password: password
    })

},[email, password])

  function handleSubmit(e) {
    e.preventDefault();
console.log(email, password)
    if (!email || !emailFilter.test(email)) {
      setEmailErr(`field can't be empty`);
      setEmailValid(false);
      return;
    } else {
      setEmailErr(false);
      setEmailValid(true);
    }

    for (const i of symbList4) {
      for (const j of email) {
        if (i === j) {
          return setEmailErr(`can't use symbols`);
        }
      }
    }

    if (!password || password.length < 8 || !pwdFilter.test(password)) {
      setPasswordErr(
        `The password must consist of min 8 charackters, one lowercase letter, one uppercase letter, one symbol and one number.`,
      );
      setPasswordValid(false);
      return;
    } else {
      setPasswordErr(false);
      setPasswordValid(true);
    }

    console.log(user)
    loginUser(user)

   
        if (res.data.status === 'ok') {
          setFormValid(res.data.msg);
          setFormErr('');
        }
        setTimeout(() => {
          alert(res.data.msg);
        }, 1000);
  
      
   

      
  }
  return (
    <div className="container" style={{ width: '25rem' }}>
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src="" alt="" width="72" height="57" />
        <h1 className=" mb-3">Please Login</h1>

        {formValid && (
          <div className="ms-5 me-5 alert alert-success " role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p className="mb-0">{formValid}</p>
          </div>
        )}

        {formErr && (
          <div className="ms-5 me-5 alert alert-danger " role="alert">
            <h4 className="alert-heading">Error message</h4>
            <p className="mb-0">{formErr}</p>
          </div>
        )}

        <div className="form-floating">
          <input
            type="email"
            onChange={updateEmail}
            className={`form-control ${emailValid ? 'is-valid' : ''} ${emailErr ? 'is-invalid' : ''}  `}
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
          <div className="invalid-feedback">{emailErr}</div>
        </div>
        <div className="form-floating">
          <input
            type="password"
            onChange={updatePassword}
            className={`form-control ${passwordValid ? 'is-valid' : ''} ${passwordErr ? 'is-invalid' : ''}  `}
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
          <div className="invalid-feedback">{passwordErr}</div>
        </div>

        <br />
        <button className="btn btn-primary w-100 py-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
