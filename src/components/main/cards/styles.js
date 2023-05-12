import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
`

export const Card = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px #F6F8FD;
  border-radius: 10px;
`

export const CardLabel = styled.h4`
  margin: 0;
  color: black;
  text-align: center;

`

export const CardBigNumber = styled.h2`
  color: black;
`
