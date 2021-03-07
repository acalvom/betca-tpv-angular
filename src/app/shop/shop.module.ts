import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';

import {CashierClosureService} from './cashier-opened/cashier-closure/cashier-closure.service';
import {ProviderService} from './providers/provider.service';
import {SharedArticleService} from './shared/services/shared.article.service';
import {SharedCashierService} from './shared/services/shared.cashier.service';
import {SharedProviderService} from './shared/services/shared.provider.service';
import {ShoppingCartService} from './cashier-opened/shopping-cart/shopping-cart.service';
import {ArticlesComponent} from './articles/articles.component';
import {CashierClosedComponent} from './cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './cashier-opened/cashier-opened.component';
import {ShopComponent} from './shop.component';
import {ProvidersComponent} from './providers/providers.component';
import {SearchByBarcodeComponent} from './shared/search-by-barcode.component';
import {SearchByCompanyComponent} from './shared/search-by-company.component';
import {AddCreditLineDialogComponent} from './shared/dialogs/add-credit-line-dialog.component';
import {ShoppingCartComponent} from './cashier-opened/shopping-cart/shopping-cart.component';
import {ArticleCreationUpdatingDialogComponent} from './articles/article-creation-updating-dialog.component';
import {ArticleQuickCreationDialogComponent} from './cashier-opened/shopping-cart/article-quick-creation-dialog.component';
import {CashierDialogComponent} from './cashier-opened/cashier-closure/cashier-dialog.component';
import {CheckOutDialogComponent} from './cashier-opened/shopping-cart/check-out-dialog.component';
import {ProviderCreationUpdatingDialogComponent} from './providers/provider-creation-updating-dialog.component';
import {ArticleService} from './articles/article.service';
import {ShopRoutingModule} from './shop-routing.module';
import {TicketsComponent} from './cashier-opened/tickets/tickets.component';
import {OffersComponent} from './offers/offers.component';
import {OfferCreationUpdatingDialogComponent} from './offers/offer-creation-updating-dialog.component';
import {ArticlesFamilyComponent} from './articles-family/articles-family/articles-family.component';
import {ArticleFamilyViewComponent} from './cashier-opened/shopping-cart/article-family-view/article-family-view.component';
import {StockAlarmsComponent} from './stock-alarms/stock-alarms.component';
import {SharedOfferService} from './shared/services/shared.offer.service';
import {CreditLinePayDialogComponent} from './cashier-opened/credit-line-pay-dialog.component';
import {TicketEditingDialogComponent} from './cashier-opened/tickets/ticket-editing-dialog.component';
import {OpenSizesDialogComponent} from './cashier-opened/shopping-cart/article-family-view/open-sizes-dialog.component';
import {ListComponent} from './shared/components/list.component';
import {NewArticleFamilyDialogComponent} from './articles-family/dialogs/new-article-family-dialog/new-article-family-dialog.component';
import {EditArticleFamilyDialogComponent} from './articles-family/dialogs/edit-article-family-dialog/edit-article-family-dialog.component';
import {StockAlarmsCreationUpdatingDialogComponent} from './stock-alarms/stock-alarms-creation-updating-dialog.component';
import {DataProtectionActDialogComponent} from './data-protection-act/data-protection-act-dialog.component';
import {StockAlarmChipComponent} from './stock-alarms/stock-alarm-chip/stock-alarm-chip.component';
import {StockAuditComponent} from './stock-audit/stock-audit.component';
import {ProviderInvoicesComponent} from './provider-invoices/provider-invoices.component';
import {ProviderInvoiceCreationUpdatingDialogComponent} from './provider-invoices/provider-invoice-creation-updating-dialog.component';
import {BudgetDialogComponent} from './budgets/budget-dialog.component';
import {AddArticleDialogComponent} from './articles-family/dialogs/add-article-dialog/add-article-dialog.component';

import {CustomerDiscountComponent} from './customer-discount/customer-discount.component';
import {CashMovementDialogComponent} from './cashier-opened/cash-movements/cash-movement-dialog/cash-movement-dialog.component';
import {CashierClosureComponent} from './cashier-opened/cashier-closure/cashier-closure.component';
import {SlackPublisherComponent} from './slack-publisher/slack-publisher.component';
import {MessengerComponent} from './messenger/messenger.component';
import {MessengerService} from './messenger/messenger.service';
import {SearchByBudgetComponent} from './budgets/search-by-budgets.component';
import {UsersManagementComponent} from './users/components/users-management.component';
import {SalesPeopleComponent} from './salespeople/salespeople.component';
import {SalesPeopleService} from './salespeople/salespeople.service';
import {InvoicesComponent} from './invoices/invoices.component';
import {InvoiceDialogComponent} from './invoices/invoice-dialog.component';
import {CustomerDiscountDialogComponent} from './customer-discount/customer-discount-dialog.component';
import {ArticlesSizeFamilyCreationDialogComponent} from './articles-size-family-creation/articles-size-family-creation-dialog.component';
import {IssuesComponent} from './issues/issues.component';
import {IssueCreationDialogComponent} from './issues/issue-creation-dialog/issue-creation-dialog.component';
import {ComplaintsShopComponent} from './complaints-shop/complaints-shop.component';
import {StaffComponent} from './staff/staff.component';
import {UserUpdateCreateDialogComponent} from './users/dialog/user-update-create-dialog.component';
import {SharedMessengerService} from './shared/services/shared-messenger.service';
import {ProviderOrderDialogComponent} from './provider-orders/provider-order-dialog.component';
import {ProviderOrdersComponent} from './provider-orders/provider-orders.component';
import { SearchByTicketRefComponent } from './shared/search-by-ticket-ref.component';
import { StaffReportComponent } from './staff/components/staff-report/staff-report.component';


@NgModule({
  declarations: [
    AddArticleDialogComponent,
    AddCreditLineDialogComponent,
    ArticleCreationUpdatingDialogComponent,
    ArticlesFamilyComponent,
    ArticleFamilyViewComponent,
    ArticleQuickCreationDialogComponent,
    ArticlesComponent,
    BudgetDialogComponent,
    CashierClosedComponent,
    CashierDialogComponent,
    CashierOpenedComponent,
    CheckOutDialogComponent,
    CreditLinePayDialogComponent,
    EditArticleFamilyDialogComponent,
    ListComponent,
    NewArticleFamilyDialogComponent,
    ProviderCreationUpdatingDialogComponent,
    ProvidersComponent,
    ComplaintsShopComponent,
    SearchByBarcodeComponent,
    SearchByCompanyComponent,
    SearchByBudgetComponent,
    ShopComponent,
    ShoppingCartComponent,
    TicketsComponent,
    OffersComponent,
    OfferCreationUpdatingDialogComponent,
    OpenSizesDialogComponent,
    StockAlarmsComponent,
    TicketEditingDialogComponent,
    IssuesComponent,
    StockAlarmsCreationUpdatingDialogComponent,
    DataProtectionActDialogComponent,
    StockAlarmChipComponent,
    StockAuditComponent,
    ProviderInvoicesComponent,
    UsersManagementComponent,
    ProviderInvoiceCreationUpdatingDialogComponent,
    CustomerDiscountComponent,
    CashMovementDialogComponent,
    CashierClosureComponent,
    SlackPublisherComponent,
    MessengerComponent,
    SalesPeopleComponent,
    InvoicesComponent,
    InvoiceDialogComponent,
    SalesPeopleComponent,
    CustomerDiscountDialogComponent,
    UserUpdateCreateDialogComponent,
    ArticlesSizeFamilyCreationDialogComponent,
    SalesPeopleComponent,
    IssueCreationDialogComponent,
    StaffComponent,
    ProviderOrdersComponent,
    ProviderOrderDialogComponent,
    SearchByTicketRefComponent,
    StaffReportComponent
  ],
  entryComponents: [
    ArticleCreationUpdatingDialogComponent,
    ArticleQuickCreationDialogComponent,
    CashierDialogComponent,
    CheckOutDialogComponent,
    ProviderCreationUpdatingDialogComponent,
    ArticlesSizeFamilyCreationDialogComponent,
  ],
  imports: [
    SharedModule,
    ShopRoutingModule,
  ],
  providers: [
    ArticleService,
    CashierClosureService,
    ProviderService,
    SharedArticleService,
    SharedCashierService,
    SharedOfferService,
    SharedProviderService,
    ShoppingCartService,
    MessengerService,
    SharedMessengerService,
    SalesPeopleService
  ],
})
export class ShopModule {
}
