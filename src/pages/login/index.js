import React from "react";
import Turnstile from "react-turnstile";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const onFinsh = () => {
    setIsLoggedIn(true);
  };

  const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

  const Form = () => (
    <div>
      <div className="row">
        <label>Username</label>
        <input name="email" type="text" placeholder="Enter your username" />
      </div>

      <div className="row">
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <div id="button" className="row">
        <button onClick={onFinsh}>Login</button>
      </div>
    </div>
  );

  return isLoggedIn === false ? (
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
    </div>
  ) : (
    <Turnstile
      classNameName="dave"
      sitekey="0x4AAAAAAAJO-j37yLA1CU-F" // Your sitekey
      onVerify={(token) => console.log("onVerify=>", token)}
    />
  );
}

export default Login;
