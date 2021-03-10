import {environment} from '@env';

export class EndPoints {
  static OFFERS = environment.REST_CORE + '/offers';
  static PROVIDERS = environment.REST_CORE + '/providers';
  static ARTICLES = environment.REST_CORE + '/articles';
  static CASHIERS = environment.REST_CORE + '/cashiers';
  static CASHIERS_LAST = EndPoints.CASHIERS + '/last';
  static CASH_MOVEMENT = EndPoints.CASHIERS + '/movement';
  static TICKETS = environment.REST_CORE + '/tickets';
  static GIFTTICKETS = environment.REST_CORE + '/giftTickets';
  static COMPLAINTS = environment.REST_CUSTOMER_SUPPORT + '/complaints';
  static COMPLAINTS_SHOP = environment.REST_CORE + '/complaints';
  static USERS = environment.REST_USER + '/users';
  static STOCKS = environment.REST_CORE + '/stocks';
  static STOCKS_ALARMS = environment.REST_CORE + '/stock-alarms';
  static BUDGETS = environment.REST_CORE + '/budgets';
  static AUDITS = environment.REST_CORE + '/audits';
  static CREDIT = environment.REST_CORE + '/credit';
  static CREDIT_SALE = environment.REST_CORE + '/credit-sale';
  static STAFF = environment.REST_CORE + '/staff';
  static REVIEWS = environment.REST_CUSTOMER_SUPPORT + '/reviews';
  static ARTICLES_FAMILY_VIEW = environment.REST_CORE + '/article-family-view';
  static DATA_PROTECTION_ACT = environment.REST_CORE + '/data-protection-act';
}
