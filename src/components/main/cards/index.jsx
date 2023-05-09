import React from 'react'

import {
  Container,
  Card,
  CardLabel
} from './styles'

function index() {

  const label = [
    'Aggregated Confirmed',
    'Active Confirmed',
    'Recovered',
    'Death'
  ]

  return (
    <Container>
      {label.map((item, index) => {
        return (
          <>
            <Card>
              <CardLabel>{item}</CardLabel>
            </Card>

          </>
        )
      })}
    </Container>
  )
}

export default index
