import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile193116Navigator from '../features/UserProfile193116/navigator';
import Tutorial193115Navigator from '../features/Tutorial193115/navigator';
import NotificationList193087Navigator from '../features/NotificationList193087/navigator';
import Settings193086Navigator from '../features/Settings193086/navigator';
import Settings193078Navigator from '../features/Settings193078/navigator';
import UserProfile193076Navigator from '../features/UserProfile193076/navigator';
import Settings193040Navigator from '../features/Settings193040/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile193116: { screen: UserProfile193116Navigator },
Tutorial193115: { screen: Tutorial193115Navigator },
NotificationList193087: { screen: NotificationList193087Navigator },
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
