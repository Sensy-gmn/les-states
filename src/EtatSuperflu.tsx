import React from "react";

export default function EtatSuperflu() {
    function handleClick() {
        const result = prompt("Comment vous appelez-vous ?");
        alert(`Bonjour ${result} !`);
    }

    return <button onClick={handleClick}>Saluer</button>;
}
