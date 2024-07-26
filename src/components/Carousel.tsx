import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Dynamically import the OwlCarousel component with no SSR
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Carousel = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
  };

  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <Image src={'/images/loginbanner.jpg'} layout='relative' width={1080} height={720} className='w-full h-[30vh]' alt='bg' />
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
