import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { DummyComponent } from './components/dummyComponent';

jest.useFakeTimers();
describe('<DummyComponent />', () => {
    it('renders three <DummyComponent /> components', () => {
        const wrapper = shallow(<DummyComponent />);
        expect(wrapper.state().data.length).toBe(0);
        // act
        wrapper.instance().loadNextPage();
        jest.runAllTimers();
        // wrapper.update();
        expect(wrapper.state().data.length).toBe(10);
        expect(wrapper.find('table')).toBeDefined();
        expect(wrapper.find('DummyRowComponent').length).toBe(10);
        expect(wrapper.state().data[9]).toBe('Row number: 9');
    });
});
