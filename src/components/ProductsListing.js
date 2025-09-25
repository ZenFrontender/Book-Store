import ProductCards from "./ProductCards";


const ProductsListing = () =>{
    return(
       <div className="products-listing-container ms-5">
            <div className="row">
                <div className="col-sm-3 filter-pane">
                    <strong>Filters</strong>
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