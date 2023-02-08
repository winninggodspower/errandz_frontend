

function AcceptOrder({ params }){
    console.log(params)
    return <>
    
        <div className="  mx-auto d-flex vh-100 align-items-center justify-content-center">

            <div className="mx-auto order-container bg-white position-absolute p-3" >
                <div>
                    <p className="mx-auto">Recieved your order</p>
                </div>
                <div className="d-flex justify-content-around">
                    <button type="submit" className="bg-dark text-white px-2">yes</button>
                    <button type="submit" className="bg-dark text-white px-2">No</button>
                </div>
            </div>
        </div>
    </>
}

export default AcceptOrder;