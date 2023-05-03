import PacMan from "@/Components/PacMan";
import { useEffect, useState } from "react";

const Second = () => {

    const [Isloading, setIsloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 4000)
    })

    return (

        <>
            {
                Isloading ? <><PacMan /></> :
                    <div>
                        
                    </div>
            }
        </>


    );
};


export default Second;