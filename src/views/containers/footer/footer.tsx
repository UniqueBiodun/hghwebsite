import React from 'react';
import HGHWhiteLogo from '../../../assets/icons/hghwhitelogo.svg';
import Twitterlogo from '../../../assets/icons/twitter-logo.svg';
import Instagramlogo from '../../../assets/icons/instagram-logo.svg';
import Youtubelogo from '../../../assets/icons/youtube-logo.svg';
import Tiktoklogo from '../../../assets/icons/tiktok-logo.svg';
import Facebooklogo from '../../../assets/icons/facebook-logo.svg';
// import Threadlogo from '../../../assets/icons/thread-logo.svg';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <footer className='bg-primary h-3/4 py-6 md:py-14 text-white text-base font-noto'>
        <div className='container flex flex-col gap-10 text-center justify-center items-center'>
          <div>
            <img className='w-24 h-24' src={HGHWhiteLogo} alt='hghlogo' />
          </div>
          <div className='flex flex-col gap-4'>
            <p>Sundays // 09:00am (WAT)</p>
            <p>Thursdays // 07:00pm (WAT)</p>
          </div>

          <div className='flex flex-col gap-4'>
            <p>talktous@hisgreathaven.org</p>
            <p>+2348137600645</p>
          </div>
          <div>
            <p>Elomaz Hotel, 3/5 Emmanuel street, Maryland, Lagos - Nigeria.</p>
          </div>
          {/* Socials */}
          <div className='flex flex-row gap-7'>
            <span>
              <Link
                target='_blank'
                to='https://x.com/hisgreathaven/status/1874901297465540626?s=46&t=pyQAPrl4YF73e0dUTx08gg'
              >
                <img src={Twitterlogo} alt='twitter-logo' />
              </Link>
            </span>
            <span>
              <Link
                target='_blank'
                to='https://www.instagram.com/hisgreathaven?igsh=YXdzYTk1Yjk1bTQw'
              >
                <img src={Instagramlogo} alt='instagram-logo' />
              </Link>
            </span>
            <span>
              <Link target='_blank' to='https://www.youtube.com/@hisgreathaven'>
                <img src={Youtubelogo} alt='youtube-logo' />
              </Link>
            </span>
            <span>
              <Link
                target='_blank'
                to='https://www.tiktok.com/@hisgreathaven?_r=1&_d=de22ijim4lbl0k&sec_uid=MS4wLjABAAAA2bWbGuzsSKnSnajUcbtZwtxGHXS-xszXmgmjVobfm7mV4RApvU7jHp6-VYGyEVXe&share_author_id=7081009251711599621&sharer_language=en&source=h5_m&u_code=e12g9bd2ifbj7f&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAA2bWbGuzsSKnSnajUcbtZwtxGHXS-xszXmgmjVobfm7mV4RApvU7jHp6-VYGyEVXe&utm_source=copy&social_share_type=4&utm_campaign=client_share&utm_medium=ios&tt_from=copy&user_id=7081009251711599621&share_link_id=C3AB9BFB-8DFA-449B-A21B-AC6742AD99D8&share_app_id=1233'
              >
                <img src={Tiktoklogo} alt='tiktok-logo' />
              </Link>
            </span>
            <span>
              <Link
                target='_blank'
                to='https://www.facebook.com/share/18HT69Tyxf/?mibextid=LQQJ4d'
              >
                <img src={Facebooklogo} alt='facebook-logo' />
              </Link>
            </span>
            {/* <span>
              <Link target='_blank' to='https://www.threads.net/@hisgreathaven'>
                <img src={Threadlogo} alt='thread-logo' />
              </Link>
            </span> */}
          </div>
          <div className='border-t-2 border-white pt-8 text-sm md:text-base md:px-10 lg:w-1/2 md:w-[70%] w-[100%]'>
            <p>&copy; 2023 His Great Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
