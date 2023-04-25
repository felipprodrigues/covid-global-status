import React, {useState, useRef, useEffect} from 'react'

import {
  Container,
  ButtonWrapper,
  ButtonHolder,
  Button,
  Main,
  MainCards,
  CardsImage,
  CardsContent,
  CardsContentMain,
  CardsContentSpan
} from './styles'

// COMPONENTS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// HELPERS
import handleSum from '../../helpers/handleSum'

// ICONS
import africa from '../../../assets/africa.svg'
import asia from '../../../assets/asia.svg'
import europe from '../../../assets/europe.svg'
import america from '../../../assets/america.svg'

function CarouselComponent({
  filteredData,
}) {


  console.log(handleSum(filteredData.asia, 'recovered'))
  return (
    <Container >
      <Main>
        <Carousel
          centerMode={true}
          centerSlidePercentage={100}
          interval={2000}
          showArrows
          transitionTime={1000}
          useKeyboardArrows={true}
          width={'100%'}
          showThumbs={false}
        >
            <MainCards>
              <img src={africa} style={{maxWidth: '75px'}}/>

              <p>Africa</p>
              <div>
                <h3>Recovery</h3>
                <span>{handleSum(filteredData.africa, 'recovered')}</span>
              </div>
              <div>
                <h3>Total Cases</h3>
                <p>{handleSum(filteredData.africa, 'cases')}</p>
              </div>
            </MainCards>
            <MainCards>

              <img src={asia} style={{maxWidth: '75px'}}/>


              <p>Asia</p>
              <div>
                <h3>Recovery</h3>
                <span>{handleSum(filteredData.asia, 'recovered')}</span>
              </div>
              <div>
                <h3>Total Cases</h3>
                <p>{handleSum(filteredData.asia, 'cases')}</p>
              </div>
            </MainCards>

            <MainCards>
              <img src={europe} style={{maxWidth: '75px'}}/>
              <p>Europe</p>

              <div>
                <h3>Recovery</h3>
                <span>{handleSum(filteredData.europe, 'recovered')}</span>
              </div>
              <div>
                <h3>Total Cases</h3>
                <p>{handleSum(filteredData.europe, 'cases')}</p>
              </div>
            </MainCards>

            <MainCards>
              <img src={america} style={{maxWidth: '75px'}}/>
              <p>Europe</p>

              <div>
                <h3>Recovery</h3>
                <span>{handleSum(filteredData.northAmerica, 'recovered')}</span>
              </div>
              <div>
                <h3>Total Cases</h3>
                <p>{handleSum(filteredData.northAmerica, 'cases')}</p>
              </div>
            </MainCards>

            <MainCards>
              <img src={america} style={{maxWidth: '75px'}}/>
              <p>Europe</p>

              <div>
                <h3>Recovery</h3>
                <span>{handleSum(filteredData.southAmerica, 'recovered')}</span>
              </div>
              <div>
                <h3>Total Cases</h3>
                <p>{handleSum(filteredData.southAmerica, 'cases')}</p>
              </div>
            </MainCards>

            <MainCards>
              <img src={asia} style={{maxWidth: '75px'}}/>
              <p>Europe</p>

              <div>
                <h3>Recovery</h3>
                <span>{handleSum(filteredData.ausOceania, 'recovered')}</span>
              </div>
              <div>
                <h3>Total Cases</h3>
                <p>{handleSum(filteredData.ausOceania, 'cases')}</p>
              </div>
            </MainCards>

        </Carousel>
      </Main>

    </Container>
  )
}

export default CarouselComponent
