import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AlphabetSelection from '../AlphabetSelection.vue';

const alphabetLength = 26;

describe('AlphabetSelection', () => {
  it('renders a list of letters', () => {
    const wrapper = mount(AlphabetSelection);
    const links = wrapper.findAll('a');
    expect(links).toHaveLength(alphabetLength);

    const expectedTexts = Array.from({ length: alphabetLength }, (_, index) => String.fromCharCode(65 + index));
    links.forEach((link, index) => {
      expect(link.text()).toBe(expectedTexts[index]);
    });
  });
});
