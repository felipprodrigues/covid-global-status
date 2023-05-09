import styled from 'styled-components'

export const TabsContainer = styled.div`
  width: 100%;
`

export const TabsHolder = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
`

export const Tabs = styled.div`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.bgColor}
`

export const TabsTitle = styled.h4`
  text-align: center;
  margin: 0;
`
