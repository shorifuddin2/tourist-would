import { Link } from "react-router-dom";
import demo2 from "../../images/demo2.PNG";


const Header = () => {
    return (
        <div className="header-container my-18">
            <div className="header-title w-80 mt-52 md:grid-cols-1">
                <p>
                    Your Tourist Travels the Wold <span>TOURIST</span>
                </p>
                <Link to="/about">
                    
                    <button>About Me</button>
                </Link>
            </div>
            <div className="header-img glowing w-60  md:grid-cols-1">
                <img src={demo2} alt="" />
            </div>
        </div>
    );
};

export default Header;
