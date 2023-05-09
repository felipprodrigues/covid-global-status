import React from 'react'

// STYLES
import {
  Container,
  Navbar,
  List,
  ListItems,
  ListItemsLink
} from './styles'

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCoronavirus } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";

function Index() {

  const data = [
    {
      label: 'Overview',
      icon: <AiOutlineHome/>
    },
    {
      label: 'Symptoms',
      icon: <MdOutlineCoronavirus/>
    },
    {
      label: 'News',
      icon: <HiOutlineNewspaper/>
    }
  ]

  return (
    <Container>
      <Navbar>
        <List>
          {data.map(item => {
            return (
              <>
                <ListItems>
                  {item.icon}
                  <ListItemsLink>
                    {item.label}
                  </ListItemsLink>
                </ListItems>
              </>
            )
          })}
        </List>
      </Navbar>
    </Container>
  )
}

export default Index
