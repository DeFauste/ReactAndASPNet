import React from 'react'
import {useState} from 'react'

export default function Conditionals() {
    
const [canSee, setCanSee] = useState(false);

function ChangeCanSee() {
    setCanSee(!canSee);
};

    return (

        <>
            <h1>Conditionals Exanple</h1>
            <div>
                    <input type="checkBox" onChange={ChangeCanSee}></input>
            </div>
            {canSee? <div> You are seeing the secret</div>:
            <span>You are not allowed to see</span>}
        </>

    )
}