import styled from 'styled-components'

export const Container = styled.aside`
  background-color: #1A0F52;
  max-width: 8%;
  width: 100%;
  padding: 2.5rem;

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
  justify-content: center;
  align-items: center;

  & svg {
    max-width: 50px;
    width: 100%;
    fill: #fff;
  }
`

export const ListItemsLink = styled.a`
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-position 475ms ease-in-out;
  background: linear-gradient(to right, var(--global-bg), #4528d7 50%, #3FBAFF 50%);
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
