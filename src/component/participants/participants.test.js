import React from 'react';
import ReactDOM from 'react-dom';
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