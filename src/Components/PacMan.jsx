import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";


const PacMan = () => {
    return (
        <div className='flex  items-center justify-center mt-[15%] mr-[240px] '>
            <PacmanLoader
                color="purple"
                size={150}
            />
        </div>
    );
};


export default PacMan;