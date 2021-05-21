import React from 'react';


const  Card = ({id, name, email}) => {

    return (

        <div className="bg-green dib br3 ma2 grow bw2 shadow-5 pa2">
            <img alt="robots" src={`https://robohash.org/${id}200x200`}/>
            <div>

                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;