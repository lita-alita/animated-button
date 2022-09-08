import { MouseEventHandler } from "react";
const powerIcon  = require("./../media/power-ico.png");

interface buttonProps {
    clickHandler: MouseEventHandler<HTMLButtonElement>
}
export default function Button (props: buttonProps) {
    
    return (
        <button onClick={props.clickHandler}><img className="button-image" src={powerIcon} alt=""></img>Click me!</button>
    ) 
};