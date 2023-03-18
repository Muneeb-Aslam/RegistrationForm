import React from "react";

export default function SignIn(props) {
    const [formData, setformData] = React.useState({
        email: "",
        password: "",
    });
    const [formError, setformError] = React.useState({ email: "" });
    function handleChange(event) {
        return setformData((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value };
        });
    }
    function Validation() {
        const { email } = formData;
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        !emailRegex.test(email) && email !== ""
            ? setformError((preValue) => {
                  return { ...preValue, email: "Invalid Email" };
              })
            : setformError((preValue) => {
                  return { ...preValue, email: "" };
              });
    }
    return (
        <form action="" className="signin">
            <h3>Login</h3>
            <input
                type="email"
                placeholder="Email Address"
                name="email"
                onBlur={Validation}
                onChange={handleChange}
                value={formData.email}
                required
            />
            <div className="message">{formError.email}</div>
            <input
                type="password"
                placeholder="Password"
                name="password"
                onBlur={Validation}
                onChange={handleChange}
                value={formData.password}
                required
            />
            <button type="submit">Sign in</button>
            <div className="No-account">
                Don't Have an Account?{" "}
                <span onClick={() => props.onFormSwitch("register")}>
                    Sign Up
                </span>
            </div>
        </form>
    );
}
