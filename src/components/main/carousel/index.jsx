import React from 'react'

import {
  Container,
  Main,
  Cards,
  CardImageHolder,
  CardImage,
  CardTitle,
  CardContent,
  CardContentItems
} from './styles'

// COMPONENTS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent({
  carouselData
}) {
  return (
    <Container>
      <Main>
        <Carousel
          style={{maxWidth: '730px !important', width: '100% !important'}}
          centerMode={true}
          centerSlidePercentage={30}
          interval={2000}
          showArrows
          transitionTime={1000}
          useKeyboardArrows={true}
          showThumbs={false}
          // width={'40%'}
          preventMovementUntilSwipeScrollTolerance={true}
          showStatus={false}
          showIndicators={false}
        >
          {carouselData.map((item, index) => {
            return (
              <>
                <Cards
                  className="carousel__cards"
                  key={`carousel-${item.label}-card-${index}`}
                >
                  <CardImage src={item.icon}/>

                  <CardImageHolder>
                    <span>
                      Continent
                      <CardTitle>{item.label}</CardTitle>
                    </span>
                  </CardImageHolder>

                  <CardContent>
                    <CardContentItems>
                      <span>
                        Recovery
                        <h3>{item.recoveryData}</h3>
                      </span>
                    </CardContentItems>
                    <CardContentItems>
                      <span>
                        Cases
                        <h3>{item.casesData}</h3>
                      </span>
                    </CardContentItems>
                  </CardContent>
                </Cards>
              </>
            )
          })}
        </Carousel>
      </Main>

    </Container>
  )
}

export default CarouselComponent
