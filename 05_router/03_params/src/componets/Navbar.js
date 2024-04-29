import { NavLink } from "react-router-dom"

const Navbar = () =>{
    const ativeStyle = {
        backgroundColor : 'purple',
        color: 'white'
    }

    return(
        <div>
            <ul>
                <li>
                    <NavLink 
                        to="/main" 
                        style={({isActive}) => isActive? ativeStyle:null}>
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        style={({isActive}) => isActive? ativeStyle:null}>
                        소개
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/menu"
                        style={({isActive}) => isActive? ativeStyle:null}>
                        메뉴목록
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;