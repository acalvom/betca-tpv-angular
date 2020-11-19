import {ProviderService} from './home/providers/provider.service';
import {ArticleService} from './home/articles/article.service';
import {SharedProviderService} from './home/shared/shared.provider.service';

export class AppServices {
  public static SERVICES = [
    ArticleService,
    ProviderService,
    SharedProviderService
  ];
}
