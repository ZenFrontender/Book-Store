import { FaRegBuilding, FaTruck } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlinePayments } from "react-icons/md";

const ProductDetails = () =>{

    return(
        <div className="product-details-container">
            <div className="row">
                <div className="product-info-col col-sm-2 me-5">
                     <img src="https://assets.mugglenet.com/wp-content/uploads/2022/05/DH-book-cover-Swedin-edition.jpg" className="product-details-img w-100" alt="..." />
                     <button className="btn btn-primary product-details-btn mt-2 mb-2 w-100">Buy Now</button>
                     <button className="btn btn-secondary product-details-btn">Add to Cart</button>
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
                                <span className="me-5"><strong>Version: </strong></span>
                                <span className="me-2 quantity-box"><strong>Audiobook</strong></span>
                                <span className="me-2 quantity-box"><strong>Hardcover</strong></span>
                                <span className="me-2 quantity-box"><strong>Paperback</strong></span>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row align-items-start text-center mb-3">

                        <div className="col-sm-2 p-0 facilities">
                            <FaRegBuilding className="icons-facilities" />
                        </div>
                        <div className="col-sm-2 p-0 facilities">
                           <GiTakeMyMoney className="icons-facilities"/>
                        </div>
                        <div className="col-sm-2 p-0 facilities">
                            <FaTruck  className="icons-facilities"/>
                        </div>
                        <div className="col-sm-2 p-0 facilities">
                            <MdOutlinePayments className="icons-facilities" />
                        </div>

                    </div>

                    <div className="row align-items-start text-center mb-4 pb-2">

                        <div className="col-sm-2 text-facilities facilities">
                           <span className="texttt">10 days returnable</span> 
                        </div>
                        <div className="col-sm-2 text-facilities facilities">
                            <span className="texttt">Pay on Delivery</span>
                        </div>
                        <div className="col-sm-2 text-facilities facilities">
                            <span className="texttt">Free Delivery</span>
                        </div>
                        <div className="col-sm-2 text-facilities facilities">
                           <span className="texttt">Secure Payment</span>
                        </div>

                    </div>

                    <hr className="mb-4" />

                    <div>
                        <p className="fw-bold mb-2">Description:</p>
                        <ul>
                            <li>Spellbinding, enchanting, bewitching stuff ― Mirror</li>
                            <li>Teachers say a chapter can silence the most rowdy of classes ― Guardian</li>
                            <li>One of the greatest literary adventures of modern times ― Sunday Telegraph</li>
                            <li>The Harry Potter stories will join that small group of children's books which are read and reread into adulthood ― TLS</li>
                            <li>I've yet to meet a ten-year-old who hasn't been entranced by its witty, complex plot and the character of the eponymous Harry ― Independent</li>
                        </ul>
                    </div>
                    
                  
                    
                
            </div>
        </div>
        </div>
    )
}


export default ProductDetails;