import React from 'react'
import ReactDOM from 'react-dom'
import Rivets from '../Rivets'
import { mount } from 'enzyme'

it('Rivets renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Rivets />, div)
})

it('Renders the rivets', () => {
    const component = mount(<Rivets rivets={rivets} />)
    const headings = component.find('h4 > .rivet-name')
    expect(headings.length).toBo(3)
})
