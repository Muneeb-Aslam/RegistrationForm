import React from "react";

export default function SignUp(props) {
    const [formData, setformData] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    const [formError, setformError] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    function handleChange(event) {
        return setformData((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value };
        });
    }
    function Validation() {
        const { name, email, password } = formData;
        const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        !nameRegex.test(name)
            ? setformError((preValue) => {
                  return { ...preValue, name: "Full Name" };
              })
            : setformError((preValue) => {
                  return { ...preValue, name: "" };
              });
        !emailRegex.test(email) && email !== ""
            ? setformError((preValue) => {
                  return { ...preValue, email: "Invalid Email" };
              })
            : setformError((preValue) => {
                  return { ...preValue, email: "" };
              });
        !passwordRegex.test(password) && password !== ""
            ? setformError((preValue) => {
                  return {
                      ...preValue,
                      password:
                          "Minimum eight character,Atleast letter, number, and special character",
                  };
              })
            : setformError((preValue) => {
                  return { ...preValue, password: "" };
              });
    }
    return (
        <form action="" className="signup">
            <h3>Create An Account</h3>
            <input
                type="text"
                onBlur={Validation}
                onChange={handleChange}
                name="name"
                value={formData.name}
                placeholder="Name"
                required
            />
            <div className="message">{formError.name}</div>
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                onBlur={Validation}
                value={formData.email}
                required
            />
            <div className="message">{formError.email}</div>
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={Validation}
                value={formData.password}
                required
            />
            <div className="message">{formError.password}</div>
            <button type="submit">Create Account</button>
            <div className="Account">
                Already Have an Account?{" "}
                <span onClick={()=>props.onFormSwitch("login")}>
                    Sign In
                </span>
            </div>
        </form>
    );
}
