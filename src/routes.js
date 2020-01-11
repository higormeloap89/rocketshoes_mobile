import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';
import Cart from './pages/Cart';
import Main from './pages/Main';
import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigaton => ({
        header: () => <Header {...navigaton} />,
        cardStyle: {
          backgroundColor: colors.dark,
        },
      }),
    }
  )
);

export default Routes;
