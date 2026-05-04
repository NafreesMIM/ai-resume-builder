import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    
    return(
        <div>
            <h1>AI Resume Builder</h1>
            <p>Create professional resumes instantly using AI</p>
            <button onClick={()=>navigate("/form")}>
                Get Started
            </button>
        </div>

    );
}   

export default Home;