import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [repass, setRepass] = useState('');
  const [repassErr, setRepassErr] = useState('');
  const [repassValid, setRepassValid] = useState(false);

  const [formErr, setFormErr] = useState('');
  const [formValid, setFormValid] = useState('');

  const symbList3 = '`~!@#$%^&*()+=[]{}|-":;?/><,\'';
  const symbList4 = '`~!#$%^&*()_+=[]{}|-":;?/><,\'';

  const pwdFilter = /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{5,20}\w)/;
  const emailFilter = /^\S+@\S+\.\S+$/;

  // i onchange funkcija dedu tam kad iskarto validuotu inputa
  function updateUsername(e) {
    setUsername(e.target.value);
    if (!username || username.length < 4 || username.length > 20) {
      setUsernameErr(`field can't be empty, min 5 max 20 symbols`);
      setUsernameValid(false);
      return;
    } else {
      setUsernameErr(false);
      setUsernameValid(true);
    }

    for (const i of symbList3) {
      for (const j of username) {
        if (i === j) {
          return setUsernameErr(`can't use symbols, available numbers and symbols _ . `);
        }
      }
    }
  }
  function updateEmail(e) {
    setEmail(e.target.value);

    if (!email || !emailFilter.test(email)) {
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
    if (!password || password.length < 7 || !pwdFilter.test(password)) {
      setPasswordErr(
        `The password must consist of min 8 charackters, one lowercase letter, one uppercase letter, one symbol and one number.`,
      );
      setPasswordValid(false);
      return;
    } else {
      setPasswordErr(false);
      setPasswordValid(true);
    }
  }
  function updateRepass(e) {
    setRepass(e.target.value);
    if (!repass || repass.length < 7 || !pwdFilter.test(repass)) {
      setRepassErr(`Password must consist of one lowercase letter, one uppercase letter, one symbol and one number.`);
      setRepassValid(false);
      return;
    } else {
      setRepassErr(false);
      setRepassValid(true);
    }
  }

  //mygtuko submit paspaudimas

  function handleSubmit(e) {
    e.preventDefault();

    // handleSubmit validacijos pradzia

    if (!username || username.length < 4 || username.length > 20) {
      setUsernameErr(`field can't be empty, min 5 max 20 symbols`);
      setUsernameValid(false);
      return;
    } else {
      setUsernameErr(false);
      setUsernameValid(true);
    }

    for (const i of symbList3) {
      for (const j of username) {
        if (i === j) {
          return setUsernameErr(`can't use symbols, available numbers and symbols _ . `);
        }
      }
    }

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

    if (!password || password.length < 7 || !pwdFilter.test(password)) {
      setPasswordErr(
        `The password must consist of min 8 charackters, one lowercase letter, one uppercase letter, one symbol and one number.`,
      );
      setPasswordValid(false);
      return;
    } else {
      setPasswordErr(false);
      setPasswordValid(true);
    }

    if (!repass || repass != password) {
      setRepassErr(`Repeat password must be the same as password`);
      setRepassValid(false);
      return;
    } else {
      setRepassErr(false);
      setRepassValid(true);
    }

    //validacijos pabaiga

    axios
      .post('http://localhost:3000/api/user/register', {
        email: email,
        username: username,
        password: password,
        role: 1,
      })
      .then((res) => {
        console.log(res.data.status);

        if (res.data.status === 'ok') {
          setFormValid(res.data.msg);
          setFormErr('');
        }
        setTimeout(() => {
          alert(res.data.msg);
        }, 1000);
      })
      .then(() => {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })

      .catch((error) => {
        console.error(error);

        if (error.response.data.status === 'err') {
          setFormErr(error.response.data.msg);
          setFormValid('');
        }
      });
  }

  return (
    <>
      <div className="container" style={{ width: '25rem' }}>
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src="" alt="" width="72" height="57" />
          <h1 className="mb-3">Please Register</h1>

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
              type="text"
              onChange={updateUsername}
              className={`form-control ${usernameValid ? 'is-valid' : ''} ${usernameErr ? 'is-invalid' : ''}  `}
              id="floatingInput1"
              placeholder="name@example.com"
            />
            <label>User Name</label>
            <div className="invalid-feedback">{usernameErr}</div>
          </div>
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
          <div className="form-floating">
            <input
              type="password"
              onChange={updateRepass}
              className={`form-control ${repassValid ? 'is-valid' : ''} ${repassErr ? 'is-invalid' : ''}  `}
              id="floatingPasswordr"
              placeholder="Password"
            />
            <label>Repeat password</label>
            <div className="invalid-feedback">{repassErr}</div>
          </div>

          <br />
          <button className="btn btn-primary w-100 py-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
