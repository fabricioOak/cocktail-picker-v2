import { describe, it, expect } from 'vitest'
import {mount} from '@vue/test-utils';
import DrinkThumb from '../DrinkThumb.vue'

describe('DrinkThumb', () => {
  it('render the drink thumb with the correct props', () => {
    const wrapper = mount(DrinkThumb, {
      props: {
        src: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
        name: 'Image Name',
      },
      emits: ['open-details']
    })
    expect(wrapper.find('img').attributes('src')).toBe('https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg')
    expect(wrapper.find('img').attributes('alt')).toBe('Image Name')
    expect(wrapper.find('h3').text()).toBe('Image Name')
    expect(wrapper.emitted('open-details')).toBeFalsy()
  })
})
