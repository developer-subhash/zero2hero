import { useNavigate } from "react-router-dom"

export default function Header(){
    const navigate = useNavigate();
    const homeHandler = () => {
        // this cause fetching files from server, not client side routing
        // window.location.href = "/";

        navigate("/"); // client side routing
    }

    const dashboardHandler = () => {
        // this cause fetching files from server, not client side routing
        // window.location.href = "/dashboard"; 

        navigate("/dashboard"); // client side routing
    }

    return(
        <div>
            <button onClick={homeHandler}>home page</button>
            <button onClick={dashboardHandler}>dashboard page</button>
        </div>
    )
}