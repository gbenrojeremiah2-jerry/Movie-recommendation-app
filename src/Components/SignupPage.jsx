export default function SignupPage({ toggleForm }) {
  return (
    <div className="container_form">
      <h1 className="bg-red-500 text-2xl">Sign up</h1>
      <form>
        <div className="input_field">
          <label htmlFor="Username">Username</label>
          <input type="text" name="Username" id="" />
        </div>
        <div className="input_field">
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" id="" />
        </div>
        <div className="input_field">
          <label htmlFor="Password">Password</label>
          <input type="password" name="Password" id="" />
        </div>
        <button type="submit" className="btn_submit">
          Sign up
        </button>
      </form>
      <p>
        Already have an account? <button onClick={toggleForm}>Login</button>
      </p>
    </div>
  );
}
