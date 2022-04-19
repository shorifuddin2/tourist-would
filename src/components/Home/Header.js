import { Link } from "react-router-dom";
import demo2 from "../../images/demo2.PNG";


const Header = () => {
    return (
        <div className="header-container my-30">
            <div className="header-title">
                <p>
                    Your Tourist  the Wold <span>TOURIST</span>
                </p>
                <Link to="/about">
                    //affgit
                    <button>About Me</button>
                </Link>
            </div>
            <div className="header-img glowing w-25 ">
                <img src={demo2} alt="" />
            </div>
        </div>
    );
};

export default Header;
