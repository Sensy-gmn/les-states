import React, { useState } from "react";

export default function FeedbackForm() {
    const [message, setMessage] = useState("");

    function changeMessage(e) {
        setMessage(e.target.value);
    }

    function succesSubmit() {
        alert("Merci !");
    }

    function handleReset() {
        setMessage("");
    }

    return (
        <>
            <form onSubmit={succesSubmit}>
                <textarea
                    placeholder="message"
                    value={message}
                    onChange={changeMessage}
                />

                <button onClick={handleReset} type="submit">
                    Envoyer
                </button>
            </form>
        </>
    );
}
