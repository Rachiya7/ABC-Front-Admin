import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/formInput";
import { RiAdminLine } from "react-icons/ri";

export default function AdminLogin() {
  const [logvalues, setValues] = useState({
 
    email: "",
    password: "",
  });
  const aLInputs = [
    {
      id: 201,
      inpuConClass: "fromInput field-con",
      name: "email",
      placeholder: "Email",
      type: "email",
      errorMessage: "Please enter a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 202,
      inpuConClass: "fromInput field-con",
      name: "password",
      placeholder: "Password",
      type: "password",
      errorMessage: "Password is required",
      // pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,19}$`,
      label: "Password",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...logvalues, [e.target.name]: e.target.value });
  };
  console.log(logvalues);
  return (
    <>
      <div className="login-main-continer">
        <section className="form-main-continer login-main">
        <div className="form-name-logo-con">
    <div className="form-icon-con"><RiAdminLine /></div>
    <div className="form-name-con"><span>Admin LogIn</span></div>
       </div>

          <form className="admin-log-form" onSubmit={handleSubmit}>
            {aLInputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={logvalues[input.name]}
                onChange={onChange}
              />
            ))}

            <button>LogIn</button>
          </form>
          <p className="alredy-have-a-p">
            Already registered?
            <br />
          </p>
          <span className="sign-in-span">
            {/*put router link here*/}
            <Link className="sign-in-link" to="/adminlogin">
              Sign In
            </Link>
          </span>
        </section>
      </div>
    </>
  );
}
