import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const MainHome = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
};

export default MainHome;