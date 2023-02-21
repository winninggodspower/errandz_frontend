import React, {useState} from "react"
import Navbar from "../../components/Navbar/Navbar"

function ContactUs(){
    const [send, setSend] = useState(false)
    const HandleClick =() => {
        setSend((s)=> !s)
    }
    return (
        
            
        <div className="h-100 w-100 bg-white d-flex flex-column  align-items-center">
            <Navbar />
            
            <div className=" w-100 p-4 h-100 d-flex justify-content-center align-items-center">
                <div className="row gap-2 bg-white" >
                    <div className="col d-none d-md-flex justify-content-center align-items-center">
                        <div>
                            <h2>GET IN TOUCH WITH US</h2>
                            <p className="text-white w-50" style={{borderBottom:"4px solid #0d9efd"}}> get in touch</p>

                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center w-100 contactus" style={{minWidth:"350px"}}>
                        <div className="mx-auto w-100">
                        {send ? <div className="text-center">
                            <h1 className="fs-1 text-primary p-1"> Thanks For </h1>
                            <h1 className="fs-1 text-primary p-1">  For </h1>
                            <h1 className="fs-1 text-primary p-1"> The Message</h1>

                        </div>
                        :
                        
                            <form>
                                <h2 className="d-md-none">GET IN TOUCH WITH US</h2>
                               <div className="d-flex flex-column justify-content-center align-items-center">
                               <input type="text" placeholder="Name" className="px-3 py-2 border mt-3 w-100" style={{borderRadius:"8px",minWidth:"220px", border:"3px solid #6c757d "}}/>
                                <input type="email" placeholder="E-mail" className="px-3 py-2 border mt-3 w-100" style={{borderRadius:"8px",minWidth:"220px", border:"1px solid dark"}} />
                                <input type={"tel"} placeholder="Phone number" className="px-3 py-2 border mt-3 w-100" style={{borderRadius:"8px",minWidth:"220px", border:"1px solid dark"}} />
                                <textarea type="text" placeholder="Message" className="ps-3 py-2 border mt-3 w-100" style={{borderRadius:"8px",minWidth:"220px", border:"1px solid dark", height:"110px"}} />
                               </div>
                               <div> <input type={"submit"} onClick={HandleClick} className="btn align-self-end btn-dark float-right mt-3" style={{float:"inline-end"}} /></div>
                            </form>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ContactUs