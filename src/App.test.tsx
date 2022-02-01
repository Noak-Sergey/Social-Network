import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import {AppContainer, SamuraiJSApp} from './App';

// test('renders learn react link', () => {
//   render(<AppContainer />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp/>, div);
  ReactDOM.unmountComponentAtNode(div)
})