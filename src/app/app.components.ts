import {WelcomeComponent} from './welcome.component';
import {HomeComponent} from './home/home.component';
import {ProvidersComponent} from './home/providers/providers.component';
import {ProviderCreationUpdatingDialogComponent} from './home/providers/provider-creation-updating-dialog.component';
import {ArticleCreationUpdatingDialogComponent} from './home/articles/article-creation-updating-dialog.component';
import {ArticlesComponent} from './home/articles/articles.component';

export class AppComponents {
  static COMPONENTS = [
    ArticlesComponent,
    HomeComponent,
    WelcomeComponent,
    ProvidersComponent
  ];

  static DIALOGS = [
    ProviderCreationUpdatingDialogComponent,
    ArticleCreationUpdatingDialogComponent
  ];
}
