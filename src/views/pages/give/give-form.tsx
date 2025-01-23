import React, { useState } from 'react';
// import FcmbLogo from "../../../assets/icons/fcmb-logo.png";
import GtbankLogo from '../../../assets/icons/gtbank-logo.png';
import CopyIcon from '../../../assets/icons/copy-icon.svg';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import CopyToClipboard from 'react-copy-to-clipboard';

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
}

const GiveForm: React.FC = ({}) => {
  const [open, setOpen] = React.useState(0);
  const [isCopied, setIsCopied] = useState(false);

  // Copy to clipboard
  const handleCopyClick = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 20000);
  };

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  return (
    <>
      <section className='min-h-[70vh] py-10 font-noto'>
        <div className='container mx-auto'>
          <div className='w-full md:w-[60%] mx-auto md:px-6'>
            <div className='text-center'>
              <span className='bg-[#FDF4F7] text-xs text-[#530E25] font-medium px-3 py-1 rounded-[40px]'>
                Give bountifully
              </span>
              <h2 className='text-[#151515] text-left md:text-center font-medium text-xl md:text-3xl py-4'>
                Offerings, seeds, tithes and donations
              </h2>
              <p className='text-base text-[#2f2f2f] mx-auto w-[100%] lg:w-[70%] text-left md:text-center md:w-[80%] sm:w-[65%]'>
                To give is to honour the head of the church, Christ. So, put
                your money where your love & faith is...
              </p>
              <div className='bg-[#FDFDFD] border rounded border-[#E1E5EA] text-left flex flex-col gap-8 py-4 px-6 my-10'>
                <p className='text-lg text-sec-300 font-medium'>
                  Bank Transfer (Naira)
                </p>
                <div className='flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <img
                      className='w-10 h-10 md:w-auto md:auto'
                      src={GtbankLogo}
                      alt='gtbank-logo'
                    />
                    <p className='text-base md:text-lg text-sec-300'>
                      0717873978
                    </p>

                    {/* <img
											className="w-10 h-10 md:w-auto md:auto"
											src={FcmbLogo}
											alt="fcmb-logo"
										/> */}

                    {/* <p className="text-base md:text-lg text-sec-300">
											1026912161
										</p> */}
                  </div>
                  <div className='flex items-center gap-2 cursor-pointer hover:opacity-70'>
                    <p className='text-base text-primary'>
                      {isCopied ? 'Copied' : 'Copy'}
                    </p>
                    <CopyToClipboard text='0717873978' onCopy={handleCopyClick}>
                      <img src={CopyIcon} alt='copy-icon' />
                    </CopyToClipboard>
                  </div>
                </div>
                {/* <p className='text-base md:text-lg text-sec-300'>
                  <span className='font-medium'>Account Name:</span> God’s
                  Chamber Church (HGH)
                </p> */}
                <p className='text-base md:text-lg text-sec-300'>
                  <span className='font-medium'>Account Name:</span> God’s
                  Chamber Global/His Great House
                </p>
                <p className='text-base md:text-lg text-sec-300'>
                  <span className='font-medium'>Narration:</span>{' '}
                  Seed/Tithe/Offering/Donation
                </p>
              </div>
            </div>
            <div className='pt-10 md:pt-14 pb-10 md:pb-20'>
              <h2 className='text-[#151515] text-center font-medium text-xl md:text-3xl pb-12'>
                Frequently asked questions
              </h2>
              <>
                <Accordion
                  className='mb-6'
                  open={open === 1}
                  icon={<Icon id={1} open={open} />}
                >
                  <AccordionHeader
                    className='rounded border border-[#E1E5EA] px-4 font-medium font-noto text-lg text-sec-300'
                    onClick={() => handleOpen(1)}
                  >
                    Why should I give?
                  </AccordionHeader>
                  <AccordionBody className='px-4 text-base font-noto'>
                    People give for diverse reasons, but the highest of all is
                    because we demonstrate the love we have for God; as He has
                    loved us first.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className='mb-6'
                  open={open === 2}
                  icon={<Icon id={2} open={open} />}
                >
                  <AccordionHeader
                    className='rounded border border-[#E1E5EA] px-4 font-medium font-noto text-lg text-sec-300'
                    onClick={() => handleOpen(2)}
                  >
                    Where does my money go when I give?
                  </AccordionHeader>
                  <AccordionBody className='px-4 text-base font-noto'>
                    The money is used for supporting the needs of the church.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className='mb-6'
                  open={open === 3}
                  icon={<Icon id={3} open={open} />}
                >
                  <AccordionHeader
                    className='rounded border border-[#E1E5EA] px-4 font-medium font-noto text-lg text-sec-300'
                    onClick={() => handleOpen(3)}
                  >
                    Why should I give 10% of my income as tithe?
                  </AccordionHeader>
                  <AccordionBody className='px-4 text-base font-noto'>
                    We give tithe as a sign of Honour. Just as Abraham gave
                    tithe to Melchizedek the high priest of righteousness, and
                    king of Salem (peace) as tribute, a symbol of Honour to the
                    one whom you regard in very high esteem; for the lesser is
                    blessed by the greater. (Gen.14:18-20, Hebrews. 7, Matthew.
                    6:21
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className='mb-6'
                  open={open === 4}
                  icon={<Icon id={4} open={open} />}
                >
                  <AccordionHeader
                    className='rounded border border-[#E1E5EA] px-4 font-medium font-noto text-lg text-sec-300'
                    onClick={() => handleOpen(4)}
                  >
                    What is difference between seeds, offering and tithe?
                  </AccordionHeader>
                  <AccordionBody className='px-4 text-base font-noto'>
                    The main differences between seeds, offerings, and tithes
                    are their purpose, the amount given, and the theological or
                    philosophical beliefs associated with them. Seeds are often
                    linked to the expectation of receiving financial blessings,
                    offerings are voluntary gifts given for various reasons, and
                    tithes are typically a specific percentage of one's income
                    given to support the church or religious organization.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader
                    className='rounded border border-[#E1E5EA] px-4 font-medium font-noto text-lg text-sec-300'
                    onClick={() => handleOpen(5)}
                  >
                    Who do I contact for help as regards payment?
                  </AccordionHeader>
                  <AccordionBody className='px-4 text-base font-noto'>
                    Kindly reach out to the People & Administrative team{' '}
                    <a
                      className='underline text-blue-800'
                      href='mailto:people@hisgreathaven.org'
                    >
                      people@hisgreathaven.org
                    </a>
                  </AccordionBody>
                </Accordion>
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GiveForm;
