import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  /* grid-template-columns: 50px 1fr 50px; */
  position: relative;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonHolder = styled.div`
  background-color: #2F2A46;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  filter: brightness(.9);
  transition: all .25s linear;

  &:hover {
    filter: brightness(1);
    -webkit-box-shadow: 0px 0px 8px 0px #514B77;
    -moz-box-shadow: 0px 0px 8px 0px #514B77;
    box-shadow: 0px 0px 8px 0px #514B77;

    & a {
      transform: scale(1.2);
    }
  }
  `

export const Button = styled.a`
  display: inline-flex;
  transition: all .07s linear;

  & > svg {
    width: 25px;
    height: 25px;
  }
`

// export const Carousel = styled.div`
//   overflow: hidden;
//   background-color: ghostwhite;
//   display: flex;
//   justify-content: center;
// `

export const Main = styled.div`
  display: flex;

  background-color: #271A30;
  border-radius: 10px;
  padding: 1.5rem;

`

export const MainCards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  background-color: green;
  border-radius: 10px;
  padding: 1.5rem;
`

export const CardsImage = styled.img`
  max-width: 350px;
  /* width: 100%; */
`

export const CardsContent = styled.div`
  display: flex;
  flex-direction: column;

  & > h4 {
    margin-bottom: 0;
  }
  & > h2 {
    margin-top: 0;
  }
`

export const CardsContentMain = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
`

export const CardsContentSpan = styled.span`
  color: #fff;

  & > h2 {
    margin: .5rem 0;
  }
`
