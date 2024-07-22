import './privacypolicy.css';
import { privacyContext, policyContext } from './constant';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styled from "styled-components";

const CardDiv = styled.div`
    background-color: #30AF5B;
    &:hover{
        background-color: #3cb765; 
    }
`

const PrivacyPolicy = () =>{
    const[toggle, setToggle ] = useState({});

    const handleToggle = (index)=>{
        setToggle((prevState)=>({
            ...prevState,
            [index] : !prevState[index]
        }));
    };
useEffect(() => {
        // To scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return(
        <section data-aos="fade down">
            <div className="heading">
                <div className="title">
                    <h1>EmoWell Customer Privacy Policy</h1>
                </div>
                <div className="">
                    <p>{privacyContext}</p>
                </div>
            </div>

            <div className="policy">
                <div className={"d-flex gap-3  flex-column"}>
                {
                    // mapping
                    policyContext.map((context,index)=>(
                        <div key={index} className={"m-0"}>
                            <CardDiv
                            className={"py-3 px-4 m-0 text-white text-start d-flex align-items-center rounded"}
                                style={{borderRadius: "0",cursor:"pointer", userSelect:"none"}}
                                onClick={()=>handleToggle(index)}
                            >
                                <h2 className={"p-0 m-0"}>{context.title}</h2>
                                <h1
                                    className={"m-0 p-0 ms-auto px-3 "} style={{cursor: "pointer", userSelect:"none"}}
                                >
                                    {toggle[index] ? "-" : "+"}
                                </h1>
                            </CardDiv>
                            <div className={`text-white p-4 mb-3 shadow-sm rounded ${toggle[index]? "d-block" : "d-none"} `} style={{cursor:"default", backgroundColor:"#24964a",margin:"2px 0 0 0"}}>
                                <p className={""} style={{fontSize:"20px"}} >{context.para1}</p>
                                <p className={"mt-2"} style={{fontSize:"20px"}} >{context.para2}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div>
                <h3 className={"text-center"}>For corrections or general enquiries, please <Link className='link' to="/contact">Contact Us.</Link></h3>
                    
                </div>
                
            </div>
        </section>
    )
}

export default PrivacyPolicy;