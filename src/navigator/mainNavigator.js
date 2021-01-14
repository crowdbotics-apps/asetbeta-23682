import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings193086Navigator from '../features/Settings193086/navigator';
import Settings193078Navigator from '../features/Settings193078/navigator';
import UserProfile193076Navigator from '../features/UserProfile193076/navigator';
import Settings193040Navigator from '../features/Settings193040/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings193086: { screen: Settings193086Navigator },
Settings193078: { screen: Settings193078Navigator },
UserProfile193076: { screen: UserProfile193076Navigator },
Settings193040: { screen: Settings193040Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
