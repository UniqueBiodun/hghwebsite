import React from 'react';
import { PfemImgLink } from '../../../helper/Variables';

interface MeetOurPastorProps {
  refProp: React.RefObject<HTMLDivElement>;
}

const MeetOurPastor: React.FC<MeetOurPastorProps> = ({ refProp }) => {
  return (
    <>
      <section
        ref={refProp}
        className='bg-[#fff] min-h-[60vh] text-sec-400 pt-[60px] pb-10 font-noto'
      >
        <div className='container mx-auto flex gap-4 md:gap-[38px] flex-col lg:flex-row justify-center items-center'>
          <div className='w-full text-left'>
            <h3 className='text-2xl md:text-4xl font-semibold text-sec-100 pb-4'>
              Welcome address
            </h3>
            <p className='text-left text-base md:text-xl text-sec-300 pb-3'>
              We are more than thrilled that you have chosen to come and have an
              experience of Peace as we’re called to cater to a generation that
              seeks answers to things that seem unanswerable. Our atmosphere
              fulfils your core life need which is to be solidly founded in
              Christ. With giant hugs and so much love in our hearts, we’re
              stoked to let you know that you have a home with us. At His Great
              Haven, you will find the peace of God that passeth all
              understanding as you come to the knowledge of who you are in
              Christ and take your place as a son of God.
            </p>
            <p className='text-left text-base md:text-xl text-sec-300'>
              Love, <br /> Olufemi Ibitoye, <br /> Lead Pastor.
            </p>
          </div>
          <div className='w-full relative'>
            <img
              className='rounded h-[224px] md:h-[424px] w-full object-cover'
              src={PfemImgLink}
              alt='lead-pastor'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurPastor;
