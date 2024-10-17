import { NameSpace, PopupKey, AuthorizationStatus, UserRole } from '../../consts';
import { Route, State } from '../../types';

export const isUserAuth = (state: Pick<State, NameSpace.AppData>): boolean =>
  state[NameSpace.AppData].authStatus === AuthorizationStatus.Auth;

export const isAuthRequesting = (
  state: Pick<State, NameSpace.AppData>,
): boolean =>
  state[NameSpace.AppData].authStatus === AuthorizationStatus.Unknown;

export const isUserCoach = (state: Pick<State, NameSpace.AppData>): boolean =>
  state[NameSpace.AppData].userRole === UserRole.Coach;

export const getCurrentPage = (
  state: Pick<State, NameSpace.AppData>,
): Route | undefined => state[NameSpace.AppData].activePage;

export const hasNotifications = (
  state: Pick<State, NameSpace.AppData>,
): boolean => state[NameSpace.AppData].notifications.length !== 0;

export const getActivePopup = (
  state: Pick<State, NameSpace.AppData>,
): PopupKey | undefined => state[NameSpace.AppData].activePopup;
