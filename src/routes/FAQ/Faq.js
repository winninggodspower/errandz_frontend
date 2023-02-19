/* eslint-disable jsx-a11y/no-redundant-roles */
import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar';

export default function Faq() {
    
    useEffect(()=>{
        let myCollapsibles = window.document.querySelectorAll('.collapse');
        
        myCollapsibles.forEach((collapsable)=>{
            
            collapsable.addEventListener('hidden.bs.collapse', function (e) {
                let minusButton = this.parentNode.querySelector('.bi-dash');
                minusButton.classList.remove('bi-dash');
                minusButton.classList += " bi-plus";

            })

            collapsable.addEventListener('shown.bs.collapse', function (e) {
                let plusButton = this.parentNode.querySelector('.bi-plus');
                plusButton.classList.remove('bi-plus');
                plusButton.classList += " bi-dash";
            })

        })
        
    }, [])
    
    
  return (

        <>
            <Navbar />
            <div className="container  py-5">

                <div className='mx-2 mt-4'>
                    <div className='rounded-2 rounded shadow text-dark d-flex' style={{height: "70px", overflowX: "hidden"}}>
                        <button className='bg-dark h-100 text-light flex-1 fs-1 d-inline justify-content-center align-items-center' style={{width: "70px"}} data-bs-toggle="collapse" data-bs-target="#faq-1" role="button" aria-expanded="false">
                            <i className="bi bi-plus"></i>
                        </button>
                        <span className='ms-2 ms-md-4 d-flex align-items-center'>How do I sign up to be a Vendor?</span>
                    </div>
                    <div className='ms-4 my-4 collapse ' id='faq-1'>
                        To sign up is free on our website. after which you are contacted Further proceedings.
                    </div>
                </div>

                <div className='mx-2 mt-4'>
                    <div className='rounded-2 rounded shadow text-dark d-flex' style={{height: "70px", overflowX: "hidden"}}>
                        <button className='bg-dark h-100 text-light fs-1 d-inline justify-content-center align-items-center' style={{width: "70px"}} data-bs-toggle="collapse" data-bs-target="#faq-2" role="button" aria-expanded="false">
                            <i className="bi bi-plus"></i>
                        </button>
                        <span className='ms-2 ms-md-4 d-flex align-items-center'> Do I need Physical store to be a Vendor?</span>
                    </div>
                    <div className='ms-4 my-4 collapse' id='faq-2'>
                    No, but make sure your business is registered. Then provide address, and a • an active mobile line, functional email
                    </div>
                </div>


            </div>

        </>
  )
}
