/* @flow */

import React from 'react'
import { Background, Body, Caption, Card, Flex, FlexItem, Icon, Image, Layout, ProgressSimple, SectionSeparator, Table, TableRow, TextInput, Title, User }  from 'playbook-ui'


const MusicApp = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const fullHeightElems = document.querySelectorAll('.fullHeight')
    fullHeightElems.forEach((elem) => elem.style.height = '100%')
  })

  return (
    <Background
        backgroundColor="dark"
        padding="none"
    >
      <Flex
          orientation="column"
          vertical="stretch"
      >
        <FlexItem grow>
          <Layout
              collapse="lg"
              dark
              position="left"
              size="sm"
          >


            <Layout.Body>
              <Flex
                  className="fullHeight"
                  orientation="column"
                  vertical="stretch"
              >
                {/**---------------------- Start Header ---------------------- */}
                <Flex
                    dark
                    paddingLeft="lg"
                    paddingY="xs"
                    vertical="center"
                >
                  <Body
                      color="lighter"
                      dark
                  >
                    <Icon
                        dark
                        icon="chevron-left"
                        marginX="lg"
                        padding="none"
                        size="1x"
                    />
                  </Body>
                  <Body dark>
                    <Icon
                        dark
                        icon="chevron-right"
                        marginRight="lg"
                        padding="none"
                        size="1x"
                    />
                  </Body>

                  <TextInput
                      dark
                      placeholder="Search"
                  />

                  <FlexItem grow />

                  <User
                      align="left"
                      avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
                      dark
                      name="Maria Illescas"
                      orientation="horizontal"
                      paddingRight="sm"
                  />
                  <Body dark>
                    <Icon
                        dark
                        icon="chevron-down"
                        marginRight="sm"
                        padding="none"
                        size="1x"
                    />
                  </Body>
                </Flex>
                {/**---------------------- End of Header---------------------- */}

              </Flex>
            </Layout.Body>
          </Layout>
        </FlexItem>
      </Flex>
    </Background>
  )
}

export default MusicApp
