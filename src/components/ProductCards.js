const ProductCards = () =>{



    return(
        <div className="container">
            <div className="row">
                <div className="">
                    <div className="card product-card">
                        <img src="https://assets.mugglenet.com/wp-content/uploads/2022/05/DH-book-cover-Swedin-edition.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text mt-1 mb-1">Harry Potter</p>
                            <h5 className="card-title mb-3">$400</h5>
                            {/* <p className="g">Harry Potter</p>
                            <h5 className="c">$400</h5> */}
                            
                            <button className=" btn btn-secondary add-to-cart-btn w-100">Go to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )

}


export default ProductCards;