import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form( ){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        skills: "",
        experience: "",
        education: ""
    });

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {

        setLoading(true);

        const res = await fetch("http://localhost:5000/generate", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        setLoading(false);

        navigate("/result", { state: { ...formData, aiText: data.result } });
    };

    return(
        <div style={{maxWidth: "500px", margin: "auto"}}>
            <h2>Enter Your Details</h2>

            <input name="name" placeholder="Name" onChange={handleChange}/><br></br>
            <input name="skills" placeholder="Skills" onChange={handleChange}/><br></br>
            <input name="experience" placeholder="Experience" onChange={handleChange}/><br></br>
            <input name="education" placeholder="Education" onChange={handleChange}/><br></br>

            <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Generating..." : "Generate Resume"}
            </button>
        </div>
    );
}

export default Form;