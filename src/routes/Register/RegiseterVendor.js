import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


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



export const RegisteredVendor = () => {
    const [user, setUser] = useState({company_name: "", company_address: ""})
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

        const url = "https://errandzbackend-production.up.railway.app/api/register/customer/";

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
    <form className="container position-absolute top-50 d-flex flex-column w-md-100 w-50 gap-3 bg-light text-dark border">
        <input type="text" name="first_name" defaultValue={user.company_name} onChange={handleChange} required />
        {error?.account && <>{error?.account?.company_name || null}</>}

        <input type="text" name="last_name" defaultValue={user.company_address} onChange={handleChange} />
        {error?.account && <>{error?.account?.company_address || null}</>}

        <input type="email" name="email" onChange={handleChange} />
        {error?.account && <>{error?.account?.email || null}</>}

        <input type="text" name="phone" onChange={handleChange} />
        {error?.account && <>{error?.account?.phone || null}</>}

        <input type="text" name="state" onChange={handleChange} />
        {error?.account && <>{error?.account?.state || null}</>}

        <input type="text" name="city" onChange={handleChange} />
        {error?.account && <>{error?.account?.city || null}</>}

        <input type="password" name="password" onChange={handleChange} />
        {error && <>{error?.account?.password2 || error?.password2 || null}</>}

        <input type="password" name="password2" onChange={handleChange} />
        {error && <>{error?.account?.password2 || error?.password2 || null}</>}

        <input type="submit" onClick={handleSubmit} />
    </form>
    </>
}