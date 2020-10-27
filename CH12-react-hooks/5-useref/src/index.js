import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import AutoFocus from './AutoFocus';
import StopCounter from './StopCounter';


ReactDOM.render(
  <Fragment>
    <AutoFocus />
    <StopCounter />
  </Fragment>,
  document.getElementById('root')
);

