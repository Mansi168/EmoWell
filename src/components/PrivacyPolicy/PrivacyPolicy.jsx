import './privacypolicy.css';
import { privacyContext, policyContext } from './constant';
import { Link } from 'react-router-dom'
import {useState} from "react";

const PrivacyPolicy = () =>{
    const[toggle, setToggle ] = useState({});

    const handleToggle = (index)=>{
        setToggle((prevState)=>({
            ...prevState,
            [index] : !prevState[index]
        }));
    };

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
                <div className={"d-flex gap-3 flex-column"}>
                {
                    policyContext.map((context,index)=>(
                        <div key={index} className={"m-0"}>
                            <div className={"py-3 px-4 m-0 bg-light text-start text-dark border border-dark d-flex align-items-center"} style={{borderRadius: "0",cursor:"default"}}>
                                <h2 className={"text-dark p-0 m-0"}>{context.title}</h2>
                                <h1
                                    className={"m-0 p-0 ms-auto px-3 "} style={{cursor: "pointer", userSelect:"none"}}
                                    onClick={()=>handleToggle(index)}
                                >
                                    {toggle[index] ? "-" : "x"}
                                </h1>
                            </div>
                            <div className={`bg-light m-0 mt-1 p-4 mb-3 shadow-sm border border-primary ${toggle[index]? "d-block" : "d-none"} `} style={{cursor:"default"}}>
                                <p className={"text-dark"} style={{fontSize:"20px"}} >{context.para1}</p>
                                <p className={"text-dark mt-2"} style={{fontSize:"20px"}} >{context.para2}</p>
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