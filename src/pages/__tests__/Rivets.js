import React from 'react'
import ReactDOM from 'react-dom'
import Rivets from '../Rivets'
import { mount } from 'enzyme'
import App from '../../App.js'

const rivets = [
    {
       id: 1,
       title: 'Gold',
       summary: 'Gold rivet',
       description: 'Gold rivet mined from the hill of San Francisco, forged in fire deep within Mordor.'
     },
     {
       id: 2,
       title: 'Silver',
       summary: 'Silver rivet',
       description: 'Silver rivet crafted from a silver bullet, plucked out of Draculas heart.'
     },
     {
       id: 3,
       title: 'Bronze',
       summary: 'Bronze rivet',
       description: 'Bronze rivet made from the tears and medals of the third place atheletes from the Nagano Olympics.'
     }
]

it('Rivets renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Rivets rivets={rivets}/>, div)
})

it('Renders the rivets', () => {
    const component = mount(<Rivets rivets={rivets} />)
    const headings = component.find('.rivet-title')
    expect(headings.length).toBe(3)
})

it('Renders the rivets title', () => {
    const component = mount(<Rivets rivets={rivets} />)
    const title = component.find('.rivet-title').first()
    console.log(title.text());
    expect(title.text()).toBe('Gold')
})

it('Renders the rivets summary', () => {
    const component = mount(<Rivets rivets={rivets} />)
    const summary = component.find('.rivet-summary').first()
    expect(summary.text()).toBe('Gold rivet')
})

it('Renders the rivets description', () => {
    const component = mount(<Rivets rivets={rivets} />)
    const desc = component.find('.rivet-desc').first()
    expect(desc.text()).toBe("Gold rivet mined from the hill of San Francisco, forged in fire deep within Mordor.")
})
