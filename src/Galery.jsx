import { useState } from "react";
import sculptureList from "./data.js";

export default function Gallery() {
    const [count, setCount] = useState(0);
    const [fakeCount, setFakeCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function incrementCount() {
        setFakeCount(fakeCount + 5);
    }

    function decrementCount() {
        setFakeCount(fakeCount - 5);
    }

    let sculpture = sculptureList[count];
    return (
        <>
            <div>
                <button onClick={decrementCount}>-5</button>
                {fakeCount}
                <button onClick={incrementCount}>+5</button>
            </div>
            <button onClick={handleClick}>Suivant</button>
            <h2>
                <i>{sculpture.name} </i>
                par {sculpture.artist}
            </h2>
            <h3>
                ({count} sur {sculptureList.length})
            </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
        </>
    );
}
