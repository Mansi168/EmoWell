import './privacypolicy.css';
import { privacyContext, policyContext } from './constant';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from "styled-components";

const CardDiv = styled.div`
    background: linear-gradient(135deg, #30AF5B 0%, #1d8a40 100%);
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease;
    &:hover {
        background: linear-gradient(135deg, #3cb765 0%, #2b6f42 100%);
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
`;

const PrivacyPolicy = () =>{
    const[toggle, setToggle ] = useState({});

    const handleToggle = (index)=>{
        setToggle((prevState)=>({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <section className="section" data-aos="fade-down">
            <div className="heading">
                <div className="title">
                    <h1>EmoWell Customer Privacy Policy</h1>
                </div>
                <div className="context">
                    <p>{privacyContext}</p>
                </div>
            </div>

            <div className="policy">
                <div className="d-flex gap-3 flex-column">
                    {policyContext.map((context, index) => (
                        <div key={index} className="policy-item">
                            <CardDiv
                                className="py-3 px-4 text-white text-start d-flex align-items-center rounded"
                                onClick={() => handleToggle(index)}
                                aria-expanded={toggle[index]}
                                aria-controls={`section-${index}`}
                            >
                                <h2 className="p-0 m-0">{context.title}</h2>
                                <h1 className="m-0 p-0 ms-auto px-3">
                                    {toggle[index] ? "-" : "+"}
                                </h1>
                            </CardDiv>
                            <div
                                id={`section-${index}`}
                                className={`text-white p-4 mb-3 shadow-sm rounded ${toggle[index] ? "d-block" : "d-none"}`}
                                style={{ transition: 'opacity 0.3s ease-in-out' }}
                            >
                                <p>{context.para1}</p>
                                <p className="mt-2">{context.para2}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                <h3 className={"text-center"}>For corrections or general enquiries, please <Link className='link' to="/contact">Contact Us.</Link></h3>
                    
                </div>
                
            </div>
        </section>
    )
}

export default PrivacyPolicy;
