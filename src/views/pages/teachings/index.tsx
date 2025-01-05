import React from 'react';
import MediaSection from './media-section';

const Teachings: React.FC = ({}) => {
  return (
    <>
      <div className='mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] flex'>
        <div className='w-full'>
          <img
            src='https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737785/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Give1_txhsv3.png'
            alt='frame-1'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-full'>
          <img
            src='https://res.cloudinary.com/ddypwf3iu/image/upload/v1696721160/HGH%20Website%20Assets/HGH%20Website%20Pictures/Contact/investment-5241253_1920_er76cm.jpg'
            alt='frame-2'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-full'>
          <img
            src='https://res.cloudinary.com/ddypwf3iu/image/upload/v1736098145/HGH%20Website%20Assets/HGH%20Website%20Pictures/Teachings/someone-listening_jtroxq.png'
            alt='frame-3'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-full'>
          <img
            src='https://res.cloudinary.com/ddypwf3iu/image/upload/v1736098332/HGH%20Website%20Assets/HGH%20Website%20Pictures/Teachings/holy_bible_fyxbzu.png'
            alt='frame-4'
            className='object-cover w-full h-full'
          />
        </div>
      </div>
      <MediaSection />
    </>
  );
};

export default Teachings;
