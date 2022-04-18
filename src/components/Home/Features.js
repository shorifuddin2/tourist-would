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
        price:'$5520',
        description:
            "The French Riviera is the Mediterranean coastline of the southeast corner of France. There is no official boundary, but it is usually considered to extend The French Riviera: 8 Must-See Spots on the Côte d'Azur ...",
            button: 'click me'
    },
    {
        id:"4",
        img:`https://i.ibb.co/d00KDfx/img-5.webp`,
        name: "Aquaventure Waterpark",
        price:'$4520',
        description:
            "Enjoy one full day access to Aquaventure Waterpark with 105 record-breaking slides, attractions and experiences, including a private beach and the Surf's Up the exclusive passes of Rayna Tours ...",
    },
    {
        id:"5",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEwj_aB2ZWu2vJaaWo6JBmlMwEIQjW5ZUxQ&usqp=CAU",
        name: "French Riviera",
        price:'$6820',
        description:
            "The French Riviera is the Mediterranean coastline of the southeast corner of France. There is no official boundary, but it is usually considered to extend The French Riviera: 8 Must-See Spots on the Côte d'Azur ...",
            button: 'click me'
    },
    {
        id:"6",
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKhEb4YC_c-f4DTtVt6jR1BraKpmJ0JuZG4hjpudaug&s`,
        name: "Shunar Ga Bangladesh",
        price:'$7320',
        description:
            "Enjoy one full day access to Aquaventure Waterpark with 105 record-breaking slides, attractions and experiences, including a private beach and the Surf's Up the exclusive passes of Rayna Tours ...",
    },
];

const Features = () => {
    return (
        <div className="bg-fuchsia-200">
            <p className="feature-title mt-40">
                Services
            </p>
            <div className=" grid md:grid-cols-3 grid-cols-1 w-5/6 mx-auto  gap-4">
                {/* <div className="features"> */}
                    {features.map((feature) => (
                        <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 rounded-3">
                            <img className=" p-2 w-100 h-60" src={feature.img} alt="" />
                            <p className="font-bold">ID: {feature.id}</p>
                            <p className="font-bold">Name: {feature.name}</p>
                            <p className="font-bold">Price: {feature.price}</p>
                            <div className="w-100 font-bold p-2">{feature.description}</div>
                            <div><Link className="bg-rose-500  py-1 px-2 font-bold hover:bg-cyan-600 rounded text-center" to="/checkout">Click Me</Link></div> 
                        </div>
                    ))}
            </div>
            <button className="text-center m-8">see more</button>
        </div>
        
    );
    
};

export default Features;