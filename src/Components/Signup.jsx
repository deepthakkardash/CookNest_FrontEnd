import { useState } from "react";


export function Signup(){

    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return(
        <div className="border d-flex justify-content-center align-items-center vh-100 bg-light ">
            <form className="w-25  p-4 py-5 shadow shadow-5 bg-white rounded shadow justify-content-center align-items-center d-flex flex-column border border-3 border-dark ">

                <h2 className="display-4 mb-5 under">Signup Page</h2>

                <input type="text" className="form-control my-3" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="email" className="form-control my-3" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className="form-control my-3" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btn btn-outline-dark px-5">Signup</button>

                <div className="mt-3 d-flex justify-content-between w-100">
                    <div>
                    Already have an account? <a href="#" className="text-decoration-none">Login</a>    
                    </div>
                </div>
        </form> 
    </div>
    );
}