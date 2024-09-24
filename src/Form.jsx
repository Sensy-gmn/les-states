import { useState } from "react";

export default function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function changeFirstName(e) {
        setFirstName(e.target.value);
    }

    function changeLastName(e) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName("");
        setLastName("");
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    placeholder="Prénom"
                    value={firstName}
                    onChange={changeFirstName}
                />
                <input
                    placeholder="Nom"
                    value={lastName}
                    onChange={changeLastName}
                />

                <button onClick={handleReset}>Réinitialiser</button>
            </form>

            <div>
                prénom : {firstName}
                <br />
                nom : {lastName}
            </div>
        </>
    );
}
