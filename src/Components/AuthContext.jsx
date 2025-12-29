import { useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    

    


};
