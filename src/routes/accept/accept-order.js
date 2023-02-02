

function AcceptOrder(){
    return <>
    
        <div className="  mx-auto d-flex">

            <div className="mx-auto order-container bg-white position-absolute" >
                <div>
                    <p className="mx-auto">Recieved your order</p>
                </div>
                <div className="d-flex justify-content-around">
                    <button type="submit" className="bg-dark text-white py-2">yes</button>
                    <button type="submit" className="bg-dark text-white py-2">No</button>
                </div>
            </div>
        </div>
    </>
}

export default AcceptOrder;