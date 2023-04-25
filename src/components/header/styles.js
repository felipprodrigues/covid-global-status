import styled from 'styled-components'

export const Container = styled.div`
`

export const Holder = styled.div`
  display: flex;
  align-items: center;
`

export const Form = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  border-radius: 20px;
  background-color: #271A30;
  padding: .75rem;
  transition: all .7s linear;

  & > svg {
    margin-right: 1rem;
    height: 20px;
    width: 20px;
  }
`

export const Input = styled.input`
  max-width: 100%;
  width: 50%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: #fff;

  &:focus {
    border: none;
    outline: none !important;
  }

  &:active {
    border-color: transparent;
  }
`


