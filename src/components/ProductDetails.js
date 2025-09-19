const ProductDetails = () =>{

    return(
        <div className="product-details-container">
            <div className="row">
                <div className="product-info-col col-sm-2 me-5">
                     <img src="https://assets.mugglenet.com/wp-content/uploads/2022/05/DH-book-cover-Swedin-edition.jpg" className="product-details-img w-100" alt="..." />
                     <button className=" btn btn-primary product-details-btn mt-2 mb-2 w-100">Buy Now</button>
                     <button className=" btn btn-secondary product-details-btn">Add to Cart</button>
                </div>
                <div className="col-sm-7">
                    <div className="row">
                        <div className="col-sm-7">
                            <h3>Harry Potter and Deathly Hallows f the button still does not fill the card’s width, it may be due to</h3>
                            <p>5.0 ⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default ProductDetails;