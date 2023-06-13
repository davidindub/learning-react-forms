import { useState } from "react"

export default function UsernameForm () {
    const [username, setUsername] = useState("");

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    return (
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" id="username" value={username} onChange={updateUsername}/>
            <button>Submit</button> 
        </div>
    )
}