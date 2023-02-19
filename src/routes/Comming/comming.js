import Navbar from '../../components/Navbar/Navbar'
import BottomNav from '../../components/BottomNav/BottomNav'

export default function CommingSoon() {
  return (
    <div>
        <Navbar />  
        <div className='d-flex align-items-center justify-content-center fs-1' style={{height: "300px"}}>
            <pre>Feature Comming Soon...</pre>
        </div>
        <BottomNav />
    </div>
  )
}
