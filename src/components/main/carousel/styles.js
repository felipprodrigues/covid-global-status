import styled from 'styled-components'

export const Container = styled.div`
  /* width: 750px; */
`

export const Main = styled.div`
  display: flex;
  border-radius: 10px;
  max-width: 750px;
  overflow: hidden;

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
    /* background-image: linear-gradient(
  145deg,
  hsl(178deg 70% 75%) 0%,
  hsl(185deg 80% 69%) 0%,
  hsl(190deg 91% 64%) 1%,
  hsl(192deg 100% 58%) 4%,
  hsl(193deg 100% 50%) 8%,
  hsl(196deg 100% 50%) 15%,
  hsl(204deg 100% 61%) 26%,
  hsl(216deg 100% 69%) 44%,
  hsl(236deg 100% 76%) 72%,
  hsl(261deg 85% 72%) 100%
); */
  }

  & * > .slider.animated > .slide {
    margin-right: 1.5rem;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #271A30;
  border-radius: 10px;
  padding: 1.5rem;
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


