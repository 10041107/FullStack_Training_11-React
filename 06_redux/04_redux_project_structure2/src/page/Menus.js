import { useNavigate } from "react-router-dom";
import MenuList from "../components/lists/MenuList"

const Menus = () =>{
    const loginStatus = !!localStorage.getItem("isLogin");
    const navigate = useNavigate();

    return (
        <div>
            <h1>메뉴 목록{(loginStatus) && 
                <button onClick={() => navigate("/menu/regist")}>메뉴 추가</button>}
            </h1>
            <MenuList/>
        </div>
    )
}

export default Menus;