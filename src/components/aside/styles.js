import styled from 'styled-components'

export const Container = styled.aside`
  background-color: #271A30;
  max-width: 15%;
  width: 100%;
  padding: 2.5rem;
  height: 100%;
`

export const Navbar = styled.nav`

`

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const ListItemsLink = styled.a`
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-position 275ms ease;
  background: linear-gradient(to right, RGB(200, 200, 210), RGB(200, 200, 210) 50%, #F4F2F4 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;

  &:hover {
    color: lightgrey;
    background-position: 0 100%;
  }
`
