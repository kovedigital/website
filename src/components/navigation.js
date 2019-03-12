import React from 'react'
import PropTypes from 'prop-types'
import '../styles/theme.scss'
import Flex from '@ninetynine/react-flex';

const Navigation = () => (
  <Flex>
    <h5>Kove</h5>
    <Flex className={'flex-grow'}></Flex>
    <Flex>
        <h6>Home</h6>
        <h6>About</h6>
        <h6>Contact</h6>
    </Flex>
  </Flex>
)

export default Navigation
