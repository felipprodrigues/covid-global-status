import React from 'react'

import {
  Container,
  Card,
  CardLabel,
  CardBigNumber
} from './styles'

// HELPERS
import handleSum from '../../helpers/handleSum'

function index({
  data,
  carouselData
}) {



  const label = [
    {
      label: 'Aggregated Confirmed',
      data: carouselData
    },
    {
      label: 'Active Confirmed',
      data: carouselData
    },
    {
      label: 'Recovered',
      data: carouselData
    },
    {
      label: 'Death',
      data: carouselData
    },
  ]

  console.log(carouselData.map(item => item.recoveryData), 'aqui')
  // console.log(carouselData.recoveryData, '1241412')

  return (
    <Container>
      {label.map((item, index) => {
        return (
          <>
            <Card>
              <CardLabel>
                {item.label}
              </CardLabel>

              <CardBigNumber>
                {carouselData.map(item => item.recoveryData)}
              </CardBigNumber>
            </Card>

          </>
        )
      })}
    </Container>
  )
}

export default index
