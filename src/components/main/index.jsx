import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {
  Container,
  Section,
} from './styles'

// components
import CarouselComponent from './carousel'

// HELPERS
// import handleSum from '../../helpers/handleSum'


//!!!eventual links
//@ https://chartscss.org/
//@ https://www.svgrepo.com/

function Index() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState({
    asia: [],
    africa: [],
    europe: [],
    northAmerica: [],
    southAmerica: [],
    ausOceania: []
});

  const handleAllData = async() => {
    const {data} = await axios.get(`https://disease.sh/v3/covid-19/countries`)

    setData(data)
  }

  useEffect(() => {
    handleAllData();
  }, []);

  useEffect(() => {
    // Call filterByContinent whenever data changes
    filterByContinent();
  }, [data]);

  const filterByContinent = () => {
    // Create temporary objects to hold filtered data
    const filteredAsia = [];
    const filteredAfrica = [];
    const filteredEurope = [];
    const filteredNorthAmerica = [];
    const filteredSouthAmerica = [];
    const filteredAusOceania = [];

    // Loop through data and filter by continent
    data.map(el => {
      switch(el.continent) {
        case 'Asia':
          filteredAsia.push(el);
          break;
        case 'Africa':
          filteredAfrica.push(el);
          break;
        case 'Europe':
          filteredEurope.push(el);
          break;
        case 'North America':
          filteredNorthAmerica.push(el);
          break;
        case 'Australia-Oceania':
          filteredAusOceania.push(el);
          break;
        case 'South America':
          filteredSouthAmerica.push(el);
          break;
        default:
          break;
      }
    });

    // Set the filtered data to the parent state object
    setFilteredData({
      asia: filteredAsia,
      africa: filteredAfrica,
      europe: filteredEurope,
      northAmerica: filteredNorthAmerica,
      southAmerica: filteredSouthAmerica,
      ausOceania: filteredAusOceania
    });
  };

  return (
    <Container>
      <Section>

      <CarouselComponent
        filteredData={filteredData}
      />

      </Section>

      <Section>
        extra
        extra
        extra
        extra
        extra

      </Section>
    </Container>
  )
}

export default Index
