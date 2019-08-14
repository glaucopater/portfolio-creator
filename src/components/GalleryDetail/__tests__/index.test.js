import { shallow } from 'enzyme';
import React from 'react';
import GalleryDetail from '../index';

describe('<GalleryDetail/>', () => {
  it('renders correctly', () => {
    const props = {
      image: {
        name: 'fashion1',
        description: 'Bella',
        location: 'Berlin',
        published_at: '2019',
      },
      name: 'gallery1',
      description: 'a description',
      location: 'unknown',
      published_at: '2019',
    };

    const wrapper = shallow(<GalleryDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
