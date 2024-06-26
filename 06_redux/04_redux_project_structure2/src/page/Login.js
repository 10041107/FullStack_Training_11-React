import { Navigate } from "react-router-dom";
import LoginForm from "../components/form/LoginForm";

const Login = () =>{
    
    const loginStatus = !!localStorage.getItem("isLogin");

    if(loginStatus){
        return <Navigate to="/" replace={true}/>
    }


    return(
        <>
            <h1>로그인 페이지</h1>
            <LoginForm/>
        </>
    )
}

export default Login;