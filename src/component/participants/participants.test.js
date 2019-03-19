import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import {participants} from '../../store/store';

import Participants from '../participants/participants';

describe('<Participants />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Participants people={participants} />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<Participants />', () => {
    it('renders without crashing', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Participants people={participants} />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});