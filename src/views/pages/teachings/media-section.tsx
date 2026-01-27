import React from 'react';
import AppleSocial from '../../../assets/icons/apple-social-logo.svg';
// import GoogleSocial from '../../../assets/icons/google-social-logo.svg';
// import MixlrSocial from '../../../assets/icons/mixlr-social-logo.svg';
import SpotifySocial from '../../../assets/icons/spotify-social-logo.svg';
import TelegramSocial from '../../../assets/icons/telegram-social-logo.svg';
import YoutubeSocial from '../../../assets/icons/youtube-social-logo.svg';
import ArrowForward from '../../../assets/icons/right-arrow.svg';
import { Link } from 'react-router-dom';

const MediaSection: React.FC = ({}) => {
  return (
    <>
      <section className='min-h-[50vh] py-10 font-noto'>
        <div className='container'>
          <div className='w-full md:w-[95%] mx-auto'>
            <div className='text-center'>
              <span className='bg-[#FDF4F7] text-xs text-[#530E25] font-medium px-3 py-1 rounded-[40px]'>
                Listen to messages with ease
              </span>
              <h2 className='text-[#151515] text-left md:text-center font-medium text-xl md:text-3xl py-4'>
                Message links
              </h2>
            </div>

            {/* Media Section Divs */}
            <div className='pt-6 flex gap-6 flex-wrap flex-col md:flex-row pl-[1.125rem]'>
              <Link to='https://open.spotify.com/show/699Q9HZ0TALNSL4qHvowji?go=1&sp_cid=78955dca670966cad6e828b1ff1af98f&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=cb393043ce044077'>
                <div className='border border-[#E1E5EA] p-6 space-y-2 rounded hover:scale-105 hover:cursor-pointer'>
                  <div>
                    <img src={SpotifySocial} alt='spotify-social' />
                  </div>
                  <div className='flex justify-between w-[15.125rem]'>
                    <p className='text-sec-500 text-base font-normal'>
                      Spotify
                    </p>
                    <img src={ArrowForward} alt='arrow-forward' />
                  </div>
                </div>
              </Link>
              <Link to='https://podcasts.apple.com/us/podcast/his-great-house/id1639890644'>
                <div className='border border-[#E1E5EA] p-6 space-y-2 rounded hover:scale-105 hover:cursor-pointer'>
                  <div>
                    <img src={AppleSocial} alt='apple-social' />
                  </div>
                  <div className='flex justify-between w-[15.125rem]'>
                    <p className='text-sec-500 text-base font-normal'>
                      Apple podcasts
                    </p>
                    <img src={ArrowForward} alt='arrow-forward' />
                  </div>
                </div>
              </Link>
              {/* <Link to=''>
                <div className='border border-[#E1E5EA] p-6 space-y-2 rounded hover:scale-105 hover:cursor-pointer'>
                  <div>
                    <img src={GoogleSocial} alt='google-social' />
                  </div>
                  <div className='flex justify-between w-[15.125rem]'>
                    <p className='text-sec-500 text-base font-normal'>
                      Google podcasts
                    </p>
                    <img src={ArrowForward} alt='arrow-forward' />
                  </div>
                </div>
              </Link> */}
              <Link to='https://www.youtube.com/@hisgreathaven/playlists'>
                <div className='border border-[#E1E5EA] p-6 space-y-2 rounded hover:scale-105 hover:cursor-pointer'>
                  <div>
                    <img src={YoutubeSocial} alt='youtube-social' />
                  </div>
                  <div className='flex justify-between w-[15.125rem]'>
                    <p className='text-sec-500 text-base font-normal'>
                      Youtube
                    </p>
                    <img src={ArrowForward} alt='arrow-forward' />
                  </div>
                </div>
              </Link>
              <Link to='https://t.me/hisgreathaven'>
                <div className='border border-[#E1E5EA] p-6 space-y-2 rounded hover:scale-105 hover:cursor-pointer'>
                  <div>
                    <img src={TelegramSocial} alt='telegram-social' />
                  </div>
                  <div className='flex justify-between w-[15.125rem]'>
                    <p className='text-sec-500 text-base font-normal'>
                      Telegram
                    </p>
                    <img src={ArrowForward} alt='arrow-forward' />
                  </div>
                </div>
              </Link>
              {/* <Link to='https://hisgreathouse.mixlr.com/'>
                <div className='border border-[#E1E5EA] p-6 space-y-2 rounded hover:scale-105 hover:cursor-pointer'>
                  <div>
                    <img src={MixlrSocial} alt='mixlr-social' />
                  </div>
                  <div className='flex justify-between w-[15.125rem]'>
                    <p className='text-sec-500 text-base font-normal'>Mixlr</p>
                    <img src={ArrowForward} alt='arrow-forward' />
                  </div>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaSection;
