import React from 'react';
import {useSelector} from 'react-redux';
import {NonAuthenticated, Authenticated} from './MainNavigation';

const RootNavigation = () => {
  const user = useSelector(state => state.user);

  console.log('>> RootNavigation user: ', user);

  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
