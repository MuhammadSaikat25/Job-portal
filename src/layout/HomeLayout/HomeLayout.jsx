import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

const HomeLayout = () => {
    
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;