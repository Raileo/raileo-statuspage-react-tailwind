import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { createMarkup } from '../../utils/Utils';

const AnnouncementCarousel = ({ items }) => {
  return (
    items ?
      <Carousel
        showArrows={false}
      >
        {
          items.map((value) => {
            return (
              <div className="px-6 py-4" key={value.id}>
                <h5 className="font-medium text-lg text-gray-800">{value.title}</h5>
                <div className="mt-6 text-gray-700p" dangerouslySetInnerHTML={createMarkup(value.description)} />
              </div>
            )
          })
        }
      </Carousel>
      : ''
  )
}

export default AnnouncementCarousel;