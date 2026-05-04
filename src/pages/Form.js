import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ 
        name: "", 
        headline: "", 
        email: "",    
        phone: "",    
        location: "", 
        skills: "", 
        experience: "", 
        education: "" 
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            navigate("/result", { state: { ...formData, aiText: data.result } });
        } catch (err) {
            console.error("Error generating resume");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app-wrapper">
            <div style={{ maxWidth: '700px', background: '#fff', padding: '50px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', margin: 'auto' }}>
                <span className="label" style={{ color: '#0047FF' }}>Step 01</span>
                <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '2rem', marginBottom: '40px' }}>Enter Credentials</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <span className="label">Full Name</span>
                        <input className="input-field" name="name" placeholder="John Doe" onChange={handleChange} />
                    </div>
                    <div>
                        <span className="label">Professional Headline</span>
                        <input className="input-field" name="headline" placeholder="Lead Web Developer" onChange={handleChange} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <span className="label">Email Address</span>
                        <input className="input-field" name="email" placeholder="john@example.com" onChange={handleChange} />
                    </div>
                    <div>
                        <span className="label">Phone / Location</span>
                        <input className="input-field" name="location" placeholder="+94 7... / Colombo" onChange={handleChange} />
                    </div>
                </div>

                <span className="label">Key Skills</span>
                <input className="input-field" name="skills" placeholder="React, Figma, Node.js" onChange={handleChange} />

                <span className="label">Experience Summary</span>
                <textarea 
                    className="input-field" 
                    name="experience" 
                    placeholder="Describe your previous roles and achievements..." 
                    style={{ minHeight: '100px', borderBottom: '2px solid #eee', resize: 'none' }}
                    onChange={handleChange} 
                />

                <span className="label" style={{ marginTop: '20px' }}>Education</span>
                <input className="input-field" name="education" placeholder="University / Degree / Year" onChange={handleChange} />

                <button className="btn-primary" onClick={handleSubmit} disabled={loading} style={{ width: '100%', marginTop: '20px' }}>
                    {loading ? "Synthesizing Identity..." : "Generate Professional Resume"}
                </button>
            </div>
        </div>
    );
}

export default Form;