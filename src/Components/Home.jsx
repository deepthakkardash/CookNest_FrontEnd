import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {

    let [dish,setDish] = useState("");
    
    useEffect(() => {
        axios.get("https://api.example.com/featured-dish",{withCredentials: true}).then((response) => {
            setDish(response.data);
            console.log(dish);
            
        }).catch((error) => {
            console.error("Error fetching featured dish:", error);
        });
        // setDish("Pasta");
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <h1 className="display-3">Welcome to the Home Page</h1>
        </div>
    );
}