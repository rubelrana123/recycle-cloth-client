import React from 'react';
import EachAdvertise from './Advirtise/EachAdvertise/EachAdvertise';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import DisCount from './Discount/DisCount';
 

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <EachAdvertise></EachAdvertise>
        <DisCount></DisCount>
    </div>
  );
};

export default Home;