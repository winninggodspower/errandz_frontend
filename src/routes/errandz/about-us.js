import Navbar from "../../components/Navbar/Navbar"

function AboutUs(){
    return (
        
        <div className="h-100 w-100 bg-white d-flex flex-column  align-items-center">
        <Navbar />
        <div className='text-black fs-5 text-center p-4 mt-5'>
        <h1 className='fs-1'> About Us </h1>
      </div>

      <div className='p-3 privacybody mx-auto' style={{wordBreak: "break-word",
    wordSpacing: "3px"}}>
        <p>

        </p>
    </div>
                
            </div>
        
    )
}

export default AboutUs