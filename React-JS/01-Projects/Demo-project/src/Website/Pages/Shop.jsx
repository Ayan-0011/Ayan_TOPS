import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Shop() {

    const [data, setData] = useState([]);

    const getData = async ()=>{
        const res = await axios.get('http://localhost:5000/products');
        const products = res.data
        setData(products)
        console.log(products);   
        
    }

    useEffect(() => {
        getData()
    }, []);
    return (
        <div>
            {/* Start Content */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    Gender
                                    <i className="fa fa-fw fa-chevron-circle-down mt-1" />
                                </a>
                                <ul className="collapse show list-unstyled pl-3">
                                    <li><a className="text-decoration-none" href="#">Men</a></li>
                                    <li><a className="text-decoration-none" href="#">Women</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    Sale
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                                </a>
                                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                                    <li><a className="text-decoration-none" href="#">Sport</a></li>
                                    <li><a className="text-decoration-none" href="#">Luxury</a></li>
                                </ul>
                            </li>
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    Product
                                    <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
                                </a>
                                <ul id="collapseThree" className="collapse list-unstyled pl-3">
                                    <li><a className="text-decoration-none" href="#">Bag</a></li>
                                    <li><a className="text-decoration-none" href="#">Sweather</a></li>
                                    <li><a className="text-decoration-none" href="#">Sunglass</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-inline shop-top-menu pb-3 pt-1">
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="#">All</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none" href="#">Women's</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 pb-4">
                                <div className="d-flex">
                                    <select className="form-control">
                                        <option>Featured</option>
                                        <option>A to Z</option>
                                        <option>Item</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="d-flex flex-wrap ">
                                {
                                    data.map((item,idx)=>{
                                        return <div key={idx} className='card p-5 col-4'>
                                            <h5>{item.title}</h5>
                                            <img src={item.image} alt={item.title} className='card-img-top' />
                                            <p className='cart-title'>{item.category}</p>
                                            <h3>{item.price}</h3>
                                            <h4 className='card-text'>{item.description}</h4>
                                        </div>
                                    })
                                }
                            </div>
                           
                        </div>
                        <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex={-1}>1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Content */}
            {/* Start Brands */}
            <section className="bg-light py-5">
                <div className="container my-4">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Our Brands</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="col-lg-9 m-auto tempaltemo-carousel">
                            <div className="row d-flex flex-row">
                                {/*Controls*/}
                                <div className="col-1 align-self-center">
                                    <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                                        <i className="text-light fas fa-chevron-left" />
                                    </a>
                                </div>
                                {/*End Controls*/}
                                {/*Carousel Wrapper*/}
                                <div className="col">
                                    <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                                        {/*Slides*/}
                                        <div className="carousel-inner product-links-wap" role="listbox">
                                            {/*First slide*/}
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End First slide*/}
                                            {/*Second slide*/}
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End Second slide*/}
                                            {/*Third slide*/}
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End Third slide*/}
                                        </div>
                                        {/*End Slides*/}
                                    </div>
                                </div>
                                {/*End Carousel Wrapper*/}
                                {/*Controls*/}
                                <div className="col-1 align-self-center">
                                    <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                        <i className="text-light fas fa-chevron-right" />
                                    </a>
                                </div>
                                {/*End Controls*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Brands*/}
        </div>

    )
}

export default Shop