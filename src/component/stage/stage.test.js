import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {participants} from '../../store/store';
import Stage from '../stage/stage';

describe('<App />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Stage people={participants} />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
});

it('renders without crashing', () => {
    // Render the component, as JSON
    const tree = renderer.create(<Stage people={participants} />).toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/App.test.js.snap
    expect(tree).toMatchSnapshot(); 
});
