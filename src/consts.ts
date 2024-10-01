
export const AppRoute = {
  Root: '/',
  Login: '/login',
  Register: '/register',
  Questionary: '/questionary',
  MyPurchases: '/my-purchases',
  Main: '/main',
  Account: '/account',
  TrainingCatalog: '/trainingCatalog',
  CardUser: '/card-user',
} as const;

export enum PopupKey {
  Feedback = 'popup-feedback',
  Buy = 'popup-buy',
}
