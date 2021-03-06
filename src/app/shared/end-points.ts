import {environment} from '@env';

export class EndPoints {
  static OFFERS = environment.REST_CORE + '/offers';
  static OFFERS_HOME = environment.REST_CUSTOMER_SUPPORT + '/offers';
  static PROVIDERS = environment.REST_CORE + '/providers';
  static ARTICLES = environment.REST_CORE + '/articles';
  static CASHIERS = environment.REST_CORE + '/cashiers';
  static CASHIERS_LAST = EndPoints.CASHIERS + '/last';
  static CASH_MOVEMENT = EndPoints.CASHIERS + '/movement';
  static TICKETS = environment.REST_CORE + '/tickets';
  static COMPLAINTS = environment.REST_CUSTOMER_SUPPORT + '/complaints';
  static COMPLAINTS_SHOP = environment.REST_CORE + '/complaints';
  static USERS = environment.REST_USER + '/users';
  static STOCKS = environment.REST_CORE + '/stocks';
  static BUDGETS = environment.REST_CORE + '/budgets';
  static AUDITS = environment.REST_CORE + '/audits';
}
