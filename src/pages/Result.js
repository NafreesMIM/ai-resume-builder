import { useLocation, useNavigate } from "react-router-dom";

function Result() {
    const { state: data } = useLocation();
    const navigate = useNavigate();

    if (!data) return <div className="app-wrapper">NO_DATA_FOUND</div>;

    return (
        <div className="app-wrapper">
            <div className="no-print" style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginBottom: '20px' }}>
                <button onClick={() => navigate("/form")} style={{ background: 'none', border: '1px solid #000', padding: '10px 20px', cursor: 'pointer', fontWeight: '600' }}>
                    EDIT DETAILS
                </button>
                <button onClick={() => window.print()} className="btn-primary">
                    DOWNLOAD PDF
                </button>
            </div>

            <div className="resume-paper" style={{ borderTop: '10px solid #000' }}>
                <aside style={{ padding: '60px 40px', background: '#fcfcfc', borderRight: '1px solid #f0f0f0' }}>
                    <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '2.2rem', margin: '0 0 10px 0', lineHeight: '1', textTransform: 'uppercase' }}>
                        {data.name}
                    </h1>
                    <p style={{ fontWeight: '700', color: '#0047FF', marginBottom: '40px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {data.headline}
                    </p>

                    <section style={{ marginBottom: '40px' }}>
                        <span className="label">Contact</span>
                        <p style={{ fontSize: '0.85rem', lineHeight: '1.8', wordBreak: 'break-all' }}>
                            {data.email}<br/>
                            {data.location}
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <span className="label">Expertise</span>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{data.skills}</p>
                    </section>

                    <section>
                        <span className="label">Education</span>
                        <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>{data.education}</p>
                    </section>
                </aside>

                <main style={{ padding: '60px 50px' }}>
                    <section style={{ marginBottom: '50px' }}>
                        <span className="label">Profile Summary</span>
                        <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', whiteSpace: "pre-line", marginTop: '15px' }}>
                            {data.aiText}
                        </div>
                    </section>

                    <section>
                        <span className="label">Professional Experience</span>
                        <div style={{ marginTop: '20px', paddingLeft: '20px', borderLeft: '2px solid #000' }}>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#444' }}>
                                {data.experience}
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Result;