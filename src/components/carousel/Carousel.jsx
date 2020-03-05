import React from 'react';
import Slider from 'infinite-react-carousel';
import { FormattedMessage } from 'react-intl';
import {
  SlideImage,
  SlideCaption,
  SlideCaptionContainer,
  SlideCaptionBox,
  CaptionText,
  CaptionSubText,
} from './Styles';
import slides from './slides';

export default function Carousel() {
  return (
    <section id="home">
      <Slider autoplay={true} autoplaySpeed={7000} arrows={false}>
        {slides.map(slide => (
          <div key={slide.image}>
            <SlideImage src={slide.image} alt={slide.alt} />
            <SlideCaption>
              <SlideCaptionContainer>
                <SlideCaptionBox>
                  <CaptionText>
                    <FormattedMessage
                      id={slide.caption}
                      defaultMessage={slide.defaultCaption}
                    />
                  </CaptionText>
                  <CaptionSubText>
                    <FormattedMessage
                      id={slide.subCaption}
                      defaultMessage={slide.defaultSubCaption}
                    />
                  </CaptionSubText>
                </SlideCaptionBox>
              </SlideCaptionContainer>
            </SlideCaption>
          </div>
        ))}
      </Slider>
    </section>
  );
}
