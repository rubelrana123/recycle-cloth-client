import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import DisCount from './Discount/DisCount';
 

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <DisCount></DisCount>
    </div>
  );
};

export default Home;