export default function LoginPage({ toggleForm }) {
  return (
    <div className="container_form">
      <h1>Login</h1>
      <form>
        <div className="input_field">
          <label htmlFor="Username">Username</label>
          <input type="text" name="Username" id="" />
        </div>

        <div className="input_field">
          <label htmlFor="Password">Password</label>
          <input type="password" name="Password" id="" />
        </div>
        <button type="submit" className="btn_submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <button onClick={toggleForm}>Sign up</button>
      </p>
    </div>
  );
}
