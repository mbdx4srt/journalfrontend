import {useState} from "react"

export default function SignUp(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeEmail(e) {
        setEmail(e.currentTarget.value)
    }

    function onChangePassword(e) {
        setPassword(e.currentTarget.value)
    }

    async function onSubmit() {
        console.log('submit')
        var username = email
        const response = await fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        });
        if (response.ok) {
            var testBase64 = Buffer.from(username + ":" + password).toString('base64')
            const response2 = await fetch("/login", {
                method: "POST",
                headers: {
                    "Authorization": "basic " + testBase64,
                },

            });
            if (response2.ok) {
                const jwt = await response2.text();
                localStorage.setItem('jwt', jwt)
                props.onLogin();
            }
        }}

        return (
            <div>
                <input onChange={onChangeEmail} value={email}/>
                <input type="password" onChange={onChangePassword} value={password}/>
                <button onClick={onSubmit}>Sign Up</button>
            </div>
        )
    }