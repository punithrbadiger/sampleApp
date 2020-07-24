import {NavigationActions, StackNavigator} from 'react-navigation';

const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
};

function StackNavigatorAction() {
  const navigator = StackNavigator(...arguments);
  navigator.router.getStateForAction = navigateOnce(
    navigator.router.getStateForAction,
  );
  return navigator;
}

module.exports = StackNavigatorAction;
