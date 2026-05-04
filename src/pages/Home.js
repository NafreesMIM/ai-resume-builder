import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="app-wrapper" style={{ textAlign: 'center', marginTop: '15vh' }}>
            <span className="label">Powered by Intelligence</span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '4rem', margin: '20px 0' }}>The Resume Builder.</h1>
            <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                High-end professional resume design with AI-optimized content synthesis.
            </p>
            <button className="btn-primary" onClick={() => navigate("/form")}>
                Start Building →
            </button>
        </div>
    );
}

export default Home;