import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FourIconInfo from '../../Components/Banner/FourIconInfo/FourIconInfo';
import TabsSection from '../../Components/Tabs/TabsSection';
import Blog from '../Blog/Blog';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FourIconInfo></FourIconInfo>

      <div className="flex flex-col w-[500px] mx-auto   mt-28 mb-28">
        <div className="divider"><p className='text-4xl font-bold '>DAILY DEALS!</p></div>
      </div>

      <TabsSection></TabsSection>
      <div className="flex flex-col w-[500px] mx-auto   mt-28 mb-28">
        <div className="divider"><p className='text-4xl font-bold '>DAILY BLOGS</p></div>
      </div>


      <Blog></Blog>
    </div>
  );
};

export default Home;