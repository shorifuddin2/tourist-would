import demo from "../../images/demo3.PNG";

const features = [
    {
        id:"1",
        img:"",
        name: "User Friendly",
        price:'520',
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
            button: 'click me'
                   
    },
    {
        id:"2",
        img:"",
        name: "User Friendly",
        price:'520',
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
            button: 'click me'
    },
    {
        id:"3",
        img:"",
        name: "User Friendly",
        price:'520',
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
            button: 'click me'
    },
    {
        id:"4",
        img:"",
        name: "User Friendly",
        price:'520',
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
            button:'Click Me'
    },
];

const Features = () => {
    return (
        <div className="bg-fuchsia-200">
            <p className="feature-title">
                Services
            </p>
            <div className="feature-container">
                <div className="features">
                    {features.map((feature) => (
                        <div className="feature">
                            <div>{feature.img}</div>
                            <p>ID: {feature.id}</p>
                            <p>Name: {feature.name}</p>
                            <p>Price: {feature.price}</p>
                            <div>{feature.description}</div>
                            <div className="bg-cyan-500 hover:bg-cyan-600 rounded text-center"><button>{feature.button}</button></div>

                            
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