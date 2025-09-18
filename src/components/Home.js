const Home = () =>{
    return(
        <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <div className="card">
                        <img src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip" className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Casual</p>
                        </div>
                        </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <img src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Feature.jpg?fit=569%2C509&ssl=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Fiction</p>
                        </div>
                        </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <img src="https://dschool.sfo3.digitaloceanspaces.com/transforms/feature-slides/_1820x1011_crop_center-center_80_none/all-books-featured.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Crtitical Thinking</p>
                        </div>
                        </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <img src="https://cdn.mos.cms.futurecdn.net/Vzqxvgd9Pwb5tb8iMdALtm.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Mystery</p>
                        </div>
                        </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <img src="https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2022/12/2022FavBookCovers.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Science</p>
                        </div>
                        </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <img src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Fiction</p>
                        </div>
                        </div>
                </div>
            </div>
            <div className="row carousel-row mt-5 mb-5">
                <div className="col-sm-8 carousel">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid carousel-img" src="https://i.pinimg.com/736x/cb/64/7e/cb647e178bbccfb7498002aa2d070f18.jpg" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Mystery</h5>
                                <p>Get thrilling nail biting mysteries</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid carousel-img" src="https://i.pinimg.com/736x/ba/04/9d/ba049d97eaa9840799f17e27ed8b35eb.jpg" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block w-100 img-fluid carousel-img" src="https://i.pinimg.com/736x/cb/64/7e/cb647e178bbccfb7498002aa2d070f18.jpg" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                    </div>
            </div>
              <div className="row text-center">
                <div className="col-sm-4 new-release">
                    <img src="https://i.pinimg.com/736x/4f/9c/cd/4f9ccd9990570f659deb81a4435dfe60.jpg" />
                </div>
                <div className="col-sm-4 new-release">
                    <img src="https://i.pinimg.com/736x/4f/9c/cd/4f9ccd9990570f659deb81a4435dfe60.jpg" />
                </div>
        </div>
           
          
           

        </div>
        </div>
    )
 }


 export default Home;