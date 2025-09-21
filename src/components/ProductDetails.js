import { FaRegBuilding } from "react-icons/fa";

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
                            <div className="mb-4">
                                <span className="h3 me-2">$200</span> <span ><s>$400</s></span>
                                <p className="mt-2 text-secondary"><strong>50% off</strong></p>
                            </div>
                            <div className="mb-4">    
                                <span className="me-3"><strong>Quantity: </strong></span> <span ><button className="quantity-btn">-</button></span>
                                <input type="number" value="1" readOnly className="quantity-val align-middle mx-2" id="quantity-prod"/>

                                <span ><button className="quantity-btn">+</button></span>
                            </div>

                             <div className="mb-3">    
                                <span className="me-5"><strong>Size: </strong></span>
                                <span className="me-2 quantity-box"><strong>S</strong></span>
                                <span className="me-2 quantity-box"><strong>M</strong></span>
                                <span className="me-2 quantity-box"><strong>XL</strong></span>
                                <span className="me-2 quantity-box"><strong>XXL</strong></span>

                            </div>
                        </div>
                    </div>

                    <hr />
                    <div>
                        <FaRegBuilding />
                    </div>
                    <div className="row align-items-start">
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
  </div>
  <div className="row align-items-center">
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
  </div>
                    
                </div>
            </div>
        </div>
    )
}


export default ProductDetails;