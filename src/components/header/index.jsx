import React from 'react'

import {
  Container,
  Holder,
  Form,
  Input
} from './styles'

import { HiMagnifyingGlass } from "react-icons/hi2";

function Header({
  useGetHook
}) {
  return (
    <Container>
      <Holder>
        <Form>
          <HiMagnifyingGlass fill="#FFF"/>
          <Input
            placeholder="Search"
            onChange={({target}) => useGetHook(target.value)}
          />
        </Form>
      </Holder>
    </Container>
  )
}

export default Header
