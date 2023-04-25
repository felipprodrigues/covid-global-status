import styled from 'styled-components'

export const Container = styled.div`

`

export const Main = styled.div`
  display: flex;
  border-radius: 10px;

  & * > .selected .carousel__cards  {
    background-image: linear-gradient(
      140deg,
      hsl(201deg 100% 70%) 0%,
      hsl(201deg 100% 64%) 7%,
      hsl(203deg 100% 59%) 17%,
      hsl(207deg 100% 59%) 29%,
      hsl(217deg 100% 64%) 43%,
      hsl(233deg 100% 70%) 62%,
      hsl(255deg 100% 69%) 99%
  );
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #271A30;
  border-radius: 10px;
  padding: 1.5rem;
  margin-right: 1.5rem;
  max-width: 250px;
  width: 100%;
`

export const CardImageHolder = styled.div`
  margin: 1rem 0;

  & > span {
    text-align: left;
    display: inline-block;
    width: 100%;
    font-weight: 100;
    font-size: 14px;
  }
`

export const CardImage = styled.img`
  max-width: 50px;
  width: 100%;
`

export const CardTitle = styled.h2`
  margin-top: .25rem;
`

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr)
`

export const CardContentItems = styled.div`
  display: inline-block;
  text-align: left;
`


