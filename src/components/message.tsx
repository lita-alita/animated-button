import { useState, useEffect }from "react";
import Widget from "./widget";
import Animation from "./animation";

export default function Message () {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoad(true);
        }, 3000);
      
        return () => clearTimeout(timeout);
      }, []);
      

    if (load) return <Widget/>;
    return <Animation/>
};
