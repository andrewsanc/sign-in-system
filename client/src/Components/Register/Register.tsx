import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleOnRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;

    if (
      target.firstName.value ||
      target.lastName.value ||
      target.password.value
    ) {
      alert("Please fill out form fields");
    }
    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      password: target.password.value,
    };

    return await fetch("http://localhost:4000/login", {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((err) => alert(err));
  };

  const handleOnCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <form onSubmit={(e) => handleOnRegister(e)}>
        <h2>Register</h2>
        <input id='firstName' type='text' placeholder='First Name' />
        <input id='lastName' type='text' placeholder='Last Name' />
        <input id='email' type='email' placeholder='Email' />
        <input id='password' type='password' placeholder='Password' />
        <div className='btn-container'>
          <button className='btn-primary' type='submit'>
            Register
          </button>
          <button className='btn-secondary' onClick={(e) => handleOnCancel(e)}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
