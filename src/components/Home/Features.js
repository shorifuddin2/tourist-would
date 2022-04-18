import { Link } from "react-router-dom";
import demo from "../../images/demo3.PNG";


const features = [
    {
        id:"1",
        img:"https://i.ibb.co/2k4LMdd/img-1.jpg",
        name: "Amalfi Coast",
        price:'$5310',
        description:
            "The Amalfi Coast (Italian: Costiera amalfitana) is a stretch of coastline in southern Italy overlooking the Tyrrhenian Sea and the Gulf of Salerno.Deemed an outstanding example of landscape by Unesco ...",
            button: 'click me'
                   
    },
    {
        id:"2",
        img:"https://i.ibb.co/M6VRWjg/img-3.jpg",
        name: "Roman Forum",
        price:'$5120',
        description:
            "The Roman Forum, also known by its Latin name Forum Romanum (Italian: Foro Romano), is a rectangular forum (plaza) surrounded by the ruins of several most important forum in ancient Rome ...",
            button: 'click me'
    },
    {
        id:"3",
        img:"https://i.ibb.co/G0vVcyw/img-4.webp",
        name: "French Riviera",
        price:'520',
        description:
            "The French Riviera is the Mediterranean coastline of the southeast corner of France. There is no official boundary, but it is usually considered to extend The French Riviera: 8 Must-See Spots on the Côte d'Azur ...",
            button: 'click me'
    },
    {
        id:"4",
        img:`https://i.ibb.co/d00KDfx/img-5.webp`,
        name: "Aquaventure Waterpark",
        price:'520',
        description:
            "Enjoy one full day access to Aquaventure Waterpark with 105 record-breaking slides, attractions and experiences, including a private beach and the Surf's Up ...",
    },
];

const Features = () => {
    return (
        <div className="bg-fuchsia-200">
            <p className="feature-title mt-40">
                Services
            </p>
            <div className="feature-container">
                <div className="features">
                    {features.map((feature) => (
                        <div className="feature">
                            <img className="rounded-3" src={feature.img} alt="" />
                            <p>ID: {feature.id}</p>
                            <p>Name: {feature.name}</p>
                            <p>Price: {feature.price}</p>
                            <div>{feature.description}</div>
                            <div><Link className="bg-cyan-500  py-1 px-2 font-bold hover:bg-cyan-600 rounded text-center" to="/checkout">Click Me</Link></div>

                            
                        </div>
                    ))}
                </div>
                <div className="feature-img glowing w-50 ">
                    <img src={demo} alt="" />
                </div>
            </div>
            <button className="text-center m-8">see more</button>
        </div>
        
    );
    
};

export default Features;