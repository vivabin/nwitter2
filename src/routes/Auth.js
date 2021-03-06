import react, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event) => {
        const {target: {name, value}} = event;

        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }
    };

    const onSubmit = (event) => {
       event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    required
                    value={email}
                    onChange={onChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={onChange}
                />

                <input type="submit" value="Log In" />

                <div>
                    <button>Continue with google</button>
                    <button>Continue with Github</button>
                </div>
            </form>
        </div>
    )
};
export default Auth;