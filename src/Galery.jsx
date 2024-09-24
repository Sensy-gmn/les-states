import { useState } from "react";
import sculptureList from "./data.js";

export default function Gallery() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    let sculpture = sculptureList[count];
    return (
        <>
            <button onClick={handleClick} disabled={count === 0}>
                précédent
            </button>
            <button
                onClick={handleClick}
                disabled={count === sculptureList.length - 1}
            >
                Suivant
            </button>
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
