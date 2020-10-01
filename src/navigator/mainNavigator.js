import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings120707Navigator from '../features/Settings120707/navigator';
import UserProfile120705Navigator from '../features/UserProfile120705/navigator';
import UserProfile120609Navigator from '../features/UserProfile120609/navigator';
import Tutorial120608Navigator from '../features/Tutorial120608/navigator';
import NotificationList120580Navigator from '../features/NotificationList120580/navigator';
import Settings120579Navigator from '../features/Settings120579/navigator';
import Settings120571Navigator from '../features/Settings120571/navigator';
import UserProfile120569Navigator from '../features/UserProfile120569/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings120707: { screen: Settings120707Navigator },
UserProfile120705: { screen: UserProfile120705Navigator },
UserProfile120609: { screen: UserProfile120609Navigator },
Tutorial120608: { screen: Tutorial120608Navigator },
NotificationList120580: { screen: NotificationList120580Navigator },
Settings120579: { screen: Settings120579Navigator },
Settings120571: { screen: Settings120571Navigator },
UserProfile120569: { screen: UserProfile120569Navigator },

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
