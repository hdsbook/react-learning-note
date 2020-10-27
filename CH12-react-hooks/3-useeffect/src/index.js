import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';
import Listener from './Listener';

ReactDOM.render(
  <Fragment>
    <UserCard />
    <Listener />
  </Fragment>,
  document.getElementById('root')
);
