import "./App.css";
import Form from "./Form.jsx";
import Gallery from "./Galery.jsx";
import FeedbackForm from "./FeedbackForm.tsx";
import EtatSuperflu from "./EtatSuperflu.tsx";

function App() {
    return (
        <>
            <h1>main page</h1>
            <Gallery />
            <Form />
            <FeedbackForm />
            <EtatSuperflu />
        </>
    );
}

export default App;
