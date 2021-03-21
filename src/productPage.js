import React from 'react';
import "./App.css";
import { products } from './products';
import HomePageHeader from './homepageHeader';
require('dotenv').config();;


const Products = () => {

    const Products = ({image, name, type, price}) => {
        return(
            
            <table>
                <tbody>
                    <td>
                        <img className="product-image"src={image}/>
                    </td>
                    <td>
                        <h5>{name}</h5>
                    </td>
                    <td>
                        <h5>{type}</h5>
                    </td>
                    <td>
                        <h5>£{price}</h5>
                    </td>
                </tbody>
            </table>
        )
    }
    return (
        <>
        <HomePageHeader />
        <div className = "product-container">Welcome to the Products page!
        {
            products.map((data, key) =>{
                return(
                    <div key={key}>
                        <Products 
                            key={key}
                            image={data.image}
                            name={data.name}
                            type={data.type}
                            price={data.price}
                        />
                    </div>
                );
            })}
        </div>
        </>
    )
}

export default Products;