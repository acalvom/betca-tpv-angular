import {WelcomeComponent} from './welcome.component';
import {HomeComponent} from './home/home.component';
import {ProvidersComponent} from './home/providers/providers.component';
import {ProviderCreationUpdatingDialogComponent} from './home/providers/provider-creation-updating-dialog.component';

export class AppComponents {
  static COMPONENTS = [
    HomeComponent,
    WelcomeComponent,
    ProvidersComponent
  ];

  static DIALOGS = [
    ProviderCreationUpdatingDialogComponent
  ];
}
