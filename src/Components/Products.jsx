// Products.jsx
import React from 'react';
import Img5 from '../assets/woman1.avif'
import Img1 from '../assets/woman2.jpg';
import Img2 from '../assets/woman3.jpg';
import Img3 from '../assets/woman4.jpg';
import Img4 from '../assets/woman5.jpg';


const productsData = [
  {
    id: 1,
    img: Img1,
    title: 'Product 1',
    color: 'white',
    
  },
  {
    id: 2,
    img: Img2,
    title: 'Product 2',
    color: 'red',
    
  },
  {
    id: 3,
    img: Img3,
    title: 'Product 3',
    color: 'red',
    
  },
  {
    id: 4,
    img: Img4,
    title: 'Product 4',
    color: 'red',
   
  },
  {
    id: 5,
    img: Img5,
    title: 'Product 5',
    color: 'red',
    
  },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-sm text-[#B0580A] font-bold font-sans'>Top Selling Products</p>
          <h1 className='text-3xl font-bold'>Products</h1>
          <p className='text-xs text-gray-300'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, ipsam.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 '>
            {productsData.map((product) => (
              <div key={product.id} className='space-y-3'>
                <img
                  src={product.img}
                  alt=''
                  className='h-[220px] w-[150px] object-cover rounded-md hover:scale-110 duration-300 '
                />
                <div>
                  <h3 className='font-semibold'>{product.title}</h3>
                <p className='text-sm text-gray-600'>{product.color}</p>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;