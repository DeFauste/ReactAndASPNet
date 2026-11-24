import React from "react";

export default function Events() {
    let canSee =  false;
    function handleCheckBoxChanged() {
        //alert("my values was changed");
        canSee = !canSee;
    }
    function handleKeyUp(e:React.KeyboardEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value);
    }
    return (
            <>
                <h1>Event example</h1>
                <div>
                    <input type="checkBox" onChange={handleCheckBoxChanged}></input>
                </div>
                <div>
                    <button onClick={() => {
                        alert('I have been clicked');
                    }}>
                        Click me
                    </button>
                </div>
                <div>
                    <input type="text" onKeyUp={(e:React.KeyboardEvent<HTMLInputElement>) => handleKeyUp(e)}/>
                </div>
                {canSee? <div>You are seeing the secret</div>:
                <div>You are not allowed to see</div>}
            </>
        );
}