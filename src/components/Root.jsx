import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";




const Root = () => {
    return (
        <div>

            <NavBar></NavBar>
            <Outlet></Outlet>
        
            <Footer></Footer>
        </div>
    );
};

export default Root;