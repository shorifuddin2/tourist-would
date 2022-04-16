import { useState } from "react";
import Color from "./Color";
import "./Checkout.css";


const Checkout = () => {
    const [state, setState] = useState({
        colorsNum: 5,
        colors: [],
    })
    for (let i = 0; i < state.colorsNum; i += 1) {
        state.colors.push({ hexCode: checkoutColor() });
    }

    function checkoutColor() {
        return "#" + Math.random().toString(16).slice(-6);
    }

    function updateColor(index) {
        let colors = state.colors.slice();
        const currentColor = checkoutColor();
        colors[index].hexCode = currentColor;
        setState({
            colors: colors,
        });
    }
    return (
        <div className="color-container">
            {state.colors.map((color, index) => (
                <Color
                    key={`color-${index}`}
                    index={index}
                    update={updateColor}
                    hexCode={color.hexCode}
                ></Color>
            ))}
        </div>
    );
};

export default Checkout;