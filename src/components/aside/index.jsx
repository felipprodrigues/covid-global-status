import React from 'react'

// STYLES
import {
  Container,
  Navbar,
  List,
  ListItems,
  ListItemsLink
} from './styles'

function Index() {

  const items = ['Home', 'Dashboard', 'Statistics' ]

  return (
    <Container>
      <Navbar>
        <List>
          <ListItems>
            {items.map(items => {
              return (
                <>
                  <ListItemsLink>
                    {items}
                  </ListItemsLink>
                </>
              )
            })}
          </ListItems>
        </List>
      </Navbar>
    </Container>
  )
}

export default Index
