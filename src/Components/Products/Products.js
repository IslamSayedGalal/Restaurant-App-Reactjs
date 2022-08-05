import React from 'react';
import products from '../../data';
import './Products.css';

function Products() {

    const productData = products.map(prod=>{
        return (
            <div className='col-lg-4 col-md-12 col-sm-12' key={prod.id}>
                <div className='prod'>
                    <div className='image'>
                        <img src={prod.image} alt=""/>
                    </div>
                    <div className='data'>
                        <h4>{prod.title}</h4>
                        <p>Time: {prod.time} Minutes | Serves: 1</p>
                        <div className='price'>
                            <span className='new'>{prod.newPrice}</span>
                            <span className='old'>{prod.oldPrice}</span>
                        </div>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div className='products'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h3>Explore Our Foods</h3>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
            </div>
            <div className='row'>
                {productData}
            </div>
        </div>
    </div>
  )
}

export default Products