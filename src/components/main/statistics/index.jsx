import React from 'react'

import {
  Container,
  Table,
  TableLabel,
  TableHead,
  TableBody,
  TableElement
} from './styles'

import numberMask from '../../helpers/numberMaks.js'

function StatsComponent({
  filteredData,
  label
}) {
  // console.log(filteredData.asia.map(item => item.countryInfo.flag), 'aqui')

  const headData = [
    'id',
    'name',
    'cases',
    'deaths',
    'population',
    'tests',
    'recovered'
  ]

  return (
    <Container>
      <Table>

        <TableLabel>  Summary of cases, deaths, incidence, and mortality in {label}</TableLabel>

        <TableHead gridColumns={"50px 2fr repeat(5, 1fr)"}>
          {headData.map((label, index) => {
            return (
              <>
                <div key={`${label}-${index}`}>
                  <span>{label}</span>
                </div>
              </>
            )
          })}
        </TableHead>

        <TableBody gridColumns={"50px 2fr repeat(5, 1fr)"}>
          {filteredData.map((item, index) => {
            return (
              <>
                <TableElement>
                  <span>{item.countryInfo._id}</span>
                </TableElement>
                <TableElement>
                  <span>
                    <img src={item.countryInfo.flag}/>
                    {item.country}
                  </span>
                </TableElement>
                <TableElement>
                  <span>{numberMask(item.cases)}</span>
                </TableElement>
                <TableElement>
                  <span>{numberMask(item.deaths)}</span>
                </TableElement>
                <TableElement>
                  <span>{numberMask(item.population)}</span>
                </TableElement>
                <TableElement>
                  <span>{numberMask(item.tests)}</span>
                </TableElement>
                <TableElement>
                  <span>{numberMask(item.recovered)}</span>
                </TableElement>
              </>
            )
          })}
        </TableBody>
      </Table>
    </Container>
  )
}

export default StatsComponent
