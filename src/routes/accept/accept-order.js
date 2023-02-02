

function AcceptOrder(){
    return <>
    
        <div class="container h-100 d-md-flex align-items-center my-5 position-absolute mx-auto my-auto">

            <div id="box-container" class="mx-auto my-4" >
                <div>
                    <p>Recieved your order</p>
                </div>
                <div className="d-flex justify-content-around">
                    <button type="submit">yes</button>
                    <button type="cancel">no</button>
                </div>
            </div>
        </div>
    </>
}

export default AcceptOrder;