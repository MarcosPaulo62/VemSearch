import { Outlet, Navigate } from "react-router-dom";

export function RotaPrivada(){
    let isTokenValid = false;

    if (localStorage.getItem("token")){
        isTokenValid = true;
    } else {
        isTokenValid = false;
    }
    
    return isTokenValid ? <Outlet /> : <Navigate to="/login" />;
}