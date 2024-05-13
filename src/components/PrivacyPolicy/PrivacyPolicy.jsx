import './privacypolicy.css';
import { privacyContext, policyContext } from './constant';
import { Link } from 'react-router-dom'

const PrivacyPolicy = () =>{

    

    return(
        <section>
            <div className="heading">
                <div className="title">
                    <h1>EmoWell Customer Privacy Policy</h1>
                </div>
                <div className="context">
                    <p>{privacyContext}</p>
                </div>
            </div>

            <div className="policy">
                {
                    policyContext.map((context,index)=>(
                        <div key={index}>
                            <h2>{context.title}</h2>
                            <p>{context.para1}</p>
                            <p>{context.para2}</p>
                        </div>
                    ))
                }
                    
                <div>
                    <h3>For corrections or general enquiries, please <Link className='link' to="/contact">Contact Us.</Link></h3>
                    
                </div>
                
            </div>
        </section>
    )
}

export default PrivacyPolicy;