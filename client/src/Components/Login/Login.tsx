import "./Login.css";

export default function Login() {
  return (
    <>
      <form>
        <h2>Login</h2>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <div className='btn-container'>
          <button className='btn-primary'>Login</button>
          <button className='secondary'>Register</button>
        </div>
      </form>
    </>
  );
}
