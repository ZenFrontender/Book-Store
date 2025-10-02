import ProductCards from "./ProductCards";


const ProductsListing = () =>{
//     const rangeInput = document.getElementById('range4');
//   const rangeOutput = document.getElementById('rangeValue');

//   // Set initial value
//   rangeOutput.textContent = rangeInput.value;

//   rangeInput.addEventListener('input', function() {
//     rangeOutput.textContent = this.value;
//   });
  
    return(
       <div className="products-listing-container ms-5">
            <div className="row">
                <div className="col-sm-3 filter-pane">
                    
                    <div className="d-flex mb-3">
                        <div className="me-auto p-2 font-strong"><strong>Filters</strong></div>
                        <div className="p-2"><a className="nav-link" href="#">Clear</a></div>
                        
                    </div>
                  
                    <div className="ps-2 mt-1">
                        
                        <p className="font-strong"><strong>Price</strong></p>
                        
                            <div className="d-flex justify-content-between text-secondar" >
                             <div>50</div>
                            <div className="p-2">100</div>
                            <div className="p-2">150</div>
                        </div>
                        
                        <input type="range" className="form-range" min="0" max="100" value="50" id="range4" />
                        <output for="range4" id="rangeValue" aria-hidden="true"></output>
                    </div>
                    <div class="d-flex flex-column mt-3">
                        <div class="p-2 font-strong"><strong>Category</strong></div>
                        <div class="p-2">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="me-2" />
                                <label for="vehicle1"> Fiction</label><br /></div>
                        <div class="p-2">
                            <input type="checkbox" id="vehicle2" name="vehicle2" className="me-2" value="Car" />
                            <label for="vehicle2"> Non-fiction</label><br></br></div>
                       
                        </div>
                        <div className="p-2 mt-3">
                            <p className="font-strong"><strong>Rating</strong></p>
                            <input type="radio" id="html" name="fav_language" value="HTML" className="me-2" />
                            <label for="html">4 stars & above</label><br />
                            <input type="radio" id="css" name="fav_language" value="CSS" className="me-2" />
                            <label for="css">3 stars & above</label><br />
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" className="me-2" />
                            <label for="javascript">2 stars & above</label><br />
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" className="me-2" />
                            <label for="javascript">1 star & above</label><br />
                            
                            
                        </div>

                        <div className="p-2 mt-3">
                            <p className="font-strong"><strong>Sort by</strong></p>
                            <input type="radio" id="html" name="sort_by" value="HTML" className="me-2" />
                            <label for="html">Price - Low to High</label><br />
                            <input type="radio" id="css" name="sort_by" value="CSS" className="me-2" />
                            <label for="css">Price - High to Low</label><br />
                            
                            
                            
                        </div>

                </div>
                <div className="col-sm-9 products-list">
                    <div className="row">
                        <div className="col"> <p><strong>Showing All Products</strong><span className="products-num ms-3"> ( Showing 20 products ) </span></p></div>
                    </div>
                     <div className="row my-2">
                        <div className="col"> 
                            <ProductCards />
                        </div>
                    </div>
                   
                    
                </div>
             </div>
       </div>
    )
}


export default ProductsListing;