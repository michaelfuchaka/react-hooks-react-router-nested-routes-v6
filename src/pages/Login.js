function Login() {
    return (
      <>
        <main>
        <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
        </main>
      </>
    );
  };
  
  export default Login;