import demo from "../../images/demo3.PNG";

const features = [
    {
        title: "User Friendly",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
            button: 'click me'
                   
    },
    {
        title: "Unlimited Features",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
            button: 'click me'
    },
    {
        title: "Free Updates",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
            button: 'click me'
    },
    {
        title: "Lifetime Access",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque reiciendis architecto tempore commodi perspiciatis itaque eveniet, vero fugiat autem?",
            button: 'click me'
    },
];

const Features = () => {
    return (
        <div>
            <p className="feature-title">
                Our Most Impotent Features <br /> of The Product
            </p>
            <div className="feature-container">
                <div className="features">
                    {features.map((feature) => (
                        <div className="feature">
                            <p>{feature.title}</p>
                            <div>{feature.description}</div>
                            <div className="text-danger">{feature.button}</div>

                            
                        </div>
                    ))}
                </div>
                <div className="feature-img w-50 ">
                    <img src={demo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Features;