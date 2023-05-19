import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleOnRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault;
    navigate("/register");
  };

  return (
    <>
      <form>
        <h2>Login</h2>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <div className='btn-container'>
          <button className='btn-primary'>Login</button>
          <button
            className='btn-secondary'
            onClick={(e) => handleOnRegister(e)}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}
