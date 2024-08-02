import React from 'react';
import Shirt1 from '../assets/shirt1.png';
import Shirt2 from '../assets/shirt2.webp';
import Shirt3 from '../assets/shirt3.webp';
import Shirt4 from '../assets/shirt6.png';
import Shirt5 from '../assets/Shirt4.webp';
import Shirt6 from '../assets/shirt7.png';

const Collections = () => {
  const productsData = [
    {
      id: 1,
      img: Shirt1,
      title: 'Product 1',
      color: 'white',
      price: 1900,
    },
    {
      id: 2,
      img: Shirt2,
      title: 'Product 2',
      color: 'red',
      price: 1900,
    },
    {
      id: 3,
      img: Shirt3,
      title: 'Product 3',
      color: 'red',
      price: 1900,
    },
    {
        id: 4,
        img: Shirt4,
        title: 'Product 4',
        color: 'white',
        price: 1900,
      },
      {
        id: 5,
        img: Shirt5,
        title: 'Product 5',
        color: 'red',
        price: 1900,
      },
      {
        id: 6,
        img: Shirt6,
        title: 'Product 6',
        color: 'red',
        price: 1900,
    },
  ];

  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-sm text-[#B0580A] font-bold font-sans'>Explore</p>
          <h1 className='text-3xl font-bold'>Collections</h1>
          <p className='text-xs text-gray-300 mb-20'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, ipsam.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-20 '>
        {productsData.map((product) => (
          <div key={product.id} className='rounded-2xl bg-white hover:bg-[#FFD5B0] hover:text-white relative shadow-xl duration-300 group max-w-[300px] flex flex-col items-center'>
            <div className='ml-50'>
              <img
                src={product.img}
                alt=''
                className='max-w-[150px] mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
              />
            </div>

            <div> 
              <h3 className='font-semibold'>{product.title}</h3>
              <p className='text-sm text-gray-600 flex justify-center'>{product.color}</p>
              <p className='text-sm text-gray-600 flex justify-center mb-5'>{product.price}</p>
            </div>
          </div>
        ))}

        
       
      </div>
      <div className='flex justify-center mt-10'>
            <button className='bg-[#B0580A] p-2 rounded-2xl hover:bg-[#FFD5B0] hover:scale-105 hover:text-white'>See More</button>
        </div>
    </div>
  );
};

export default Collections;