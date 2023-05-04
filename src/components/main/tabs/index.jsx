import React from 'react'

import {
  TabsContainer,
  TabsHolder,
  Tabs,
  TabsTitle
} from './styles'

function TabsComponent({
  tabIndex,
  handleTabChange
}) {

  const tabsLabel = ['Countries', 'Statistics']

  return (
    <TabsContainer>
      <TabsHolder>
        {tabsLabel.map((item, index) => {
          return (
            <>
              <Tabs
                key={`tab-type-${item}-${index}`}
                tabIndex
                bgColor={tabIndex === index ? '#bbb' : ''}
                onClick={() => handleTabChange(index)}
              >
                <TabsTitle>
                  {item}
                </TabsTitle>
              </Tabs>
            </>
          )
        })}
      </TabsHolder>

    </TabsContainer>
  )
}

export default TabsComponent
