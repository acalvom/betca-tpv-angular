import {ProviderService} from './home/providers/provider.service';
import {ArticleService} from './home/articles/article.service';

export class AppServices {
  public static SERVICES = [
    ArticleService,
    ProviderService,
  ];
}
