import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./register.css"


async function requestdata(url , data) {
    const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
         
        },
        body: JSON.stringify(data)
      });
      return response
} 



export const RegisteredRider = () => {
    const [user, setUser] = useState({first_name: "", last_name: ""})
    const [account, setAccount] = useState({email:"", phone: "", state: "", city: "", password: "", password2: ""})
    const navigate = useNavigate()
    const [error , setError] = useState(null)

    const handleChange = (e)=> {
        
        let {name, value} = e.target;
        setUser({...user, [name]: value}) || setAccount({...account, [name]: value})
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let params = {...user, account: {...account}};
        console.log(params)

        const url = "https://errandzbackend-production.up.railway.app/api/register/rider/";

        requestdata(url, params)
            .then((data)=>{ 
                if(data.status === 200){
                    data.json()
                    .then((d)=>{
                        setTimeout(() => {
                            navigate("/login")
                        }, 3000); 
                    })  
                                     
                }else if (data.status === 400){
                    data.json()
                    .then(d=>{
                        setError(d)
                        console.log(d)
                    
                })
            }
                
            })
            .catch((e)= console.log(e))

        
    }

    return <>
    <div className="pageBody d-flex flex-column">
        <div className="hero ps-5 ">
            <h3 className="text-light position-absolute">Register as a Vendor or Customer</h3>
        </div>
        <div>
            <form className="d-flex flex-column formBox gap-3 position-relative">
                <div>
                    <input type="text"  name="first_name" defaultValue={user.first_name} onChange={handleChange} required />
                    {error?.account && <p>{error?.account?.first_name || null}uu</p>}
                </div>
                <div className="d-flex flex-1 flex-fill">
                    <input type="text" name="last_name" defaultValue={user.last_name} onChange={handleChange} />
                    {error?.account && <>{error?.account?.last_name || null}</>}
                </div>
                <div>
                <input type="email" name="email" onChange={handleChange} />
                {error?.account && <>{error?.account?.email || null}</>}
                </div>
                <div>
                <input type="text" name="phone" onChange={handleChange} />
                {error?.account && <>{error?.account?.phone || null}</>}
                </div>
            
                <div>
                <input type="password" name="password" onChange={handleChange} />
                {error && <>{error?.account?.password || error?.password || null}</>}
                </div>
                <div>
                <input type="password" name="password2" onChange={handleChange} />
                {error && <>{error?.account?.password2 || error?.password2 || null}</>}
                </div>
                <div className="d-flex flex-row gap-2  position-relative justify-content-between">
                    <span className="d-flex flex-column flex-fill">
                    <input type="text" name="state" onChange={handleChange} />
                    {error?.account && <>{error?.account?.state || null}</>}
                    </span>
                    <span className="d-flex flex-column flex-fill">
                    <input type="text" name="city" onChange={handleChange} />
                    {error?.account && <>{error?.account?.city || null}</>}
                    </span>
                </div>
                <div >
                <div className="d-flex flex-row w-75 mx-auto gap-2">
                    <input type="checkbox" name="agree" />
                    <p>By clicking the button you agree to 
Privacy policy and terms of service</p>
                </div>
                </div>
                <div>
                <input type="submit" onClick={handleSubmit} />
                </div>
            </form>
        </div>
    </div>
    </>
}