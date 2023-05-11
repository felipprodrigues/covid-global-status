import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  color: #fff;
  grid-template-columns: 1fr auto;
  grid-gap: 1.5rem;
`

export const Section = styled.section`
  &:last-child {
    padding: 0 3rem;
  }

  &#main-section {
    display: grid;
    grid-gap: 2.5rem
  }
`

