import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Result() {

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    return(
        <div>
            <h2>Your Resume</h2>

            {data ? (
                <div style={{
                    maxWidth: "700px",
                    margin: "40px auto",
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                    }}>
                        
                    <h3>Name</h3>
                    <p>{data.name}</p>

                    <h3>Skills</h3>
                    <p>{data.skills}</p>

                    <h3>Experience</h3>
                    <p>{data.experience}</p>

                    <h3>Education</h3>
                    <p>{data.education}</p>

                    <h3>AI Generated Resume</h3>
                    <div style={{ whiteSpace: "pre-line" }}>
                        {data.aiText}
                    </div>

                    <button onClick={() => navigate("/form")}>Edit</button>

                </div>
            ):(
                <p>No Data Found</p>           
            )}
            

        </div>
    );
}

export default Result;