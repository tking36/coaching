import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel' >
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_860,h_325/f_auto,q_auto/v1641002648/wordpress_assets/Tasteful-Mid-Century-After.jpg?_i=AA"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_860,h_325/f_auto,q_auto/v1641000082/wordpress_assets/23638-MCMRanch-DW-Garage_DragonsBreath-ReverePewter-a-ok-2.jpg?_i=AA"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_860,h_325/f_auto,q_auto/v1641003354/wordpress_assets/midcentury-modern.jpg?_i=AA"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;