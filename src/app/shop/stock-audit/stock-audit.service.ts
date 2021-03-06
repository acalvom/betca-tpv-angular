import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@shared/end-points';
import {Observable, of} from 'rxjs';
import {ArticleLoss} from '../shared/services/models/article-loss.model';
import {ArticleNotAuditLine} from '../shared/services/models/article-not-audit-line.model';
import {ArticleAudit} from '../shared/services/models/article-audit.model';
import {ArticleLossLine} from '../shared/services/models/article-loss-line.model';
import {StockAudit} from '../shared/services/models/stock-audit.model';

@Injectable({
  providedIn: 'root'
})
export class StockAuditService {
  private stockAudits: StockAudit[] = ([
    {
      idAudit: '1',
      creationDate: new Date(),
      closeDate: new Date(),
      barcodesWithoutAudit: ['100000', '200000'],
      lossValue: 300,
      losses: [{barcode: '300000', amount: 3}]
    },
    {
      idAudit: '2',
      creationDate: new Date(),
      closeDate: null,
      barcodesWithoutAudit: ['500000'],
      lossValue: 40,
      losses: [{barcode: '600000', amount: 1}]
    }
  ]);

  private auditArticles: ArticleAudit [] = ([
    {
      // tslint:disable-next-line:max-line-length
      idAudit: '2', // ID provisional (Simula BBDD) Cuando se llame a la API sólo traerá los de la auditoría que se pasa como parámetro => Método readAuditArticles()
      barcode: '22222222222',
      description: 'descripcion1',
      retailPrice: 33,
      stock: 2,
      realStock: 2
    },
    {
      idAudit: '2',
      barcode: '22222255555',
      description: 'descripcion2',
      retailPrice: 36,
      stock: 20,
      realStock: 15
    },
    {
      idAudit: '3',
      barcode: '8904598349435',
      description: 'descripcion3',
      retailPrice: 5,
      stock: 10,
      realStock: null
    },
    {
      idAudit: '3',
      barcode: '890459836666',
      description: 'descripcion4',
      retailPrice: 50,
      stock: 15,
      realStock: null
    }
  ]);

  constructor(private httpService: HttpService) { }

  readSingleOpenedAudit(): Observable<StockAudit> {
    /*return this.httpService
      .get(EndPoints.AUDITS + '/opened');*/
    return of(this.stockAudits.find(stockAudit => stockAudit.closeDate == null));
  }

  createAudit(stockAudit: StockAudit): Observable<StockAudit> {
    /*return this.httpService
      .post(EndPoints.AUDITS, stockAudit);*/
    const stockAuditCreated: StockAudit = (
      {
        idAudit: '3',
        creationDate: new Date(),
        closeDate: null,
        barcodesWithoutAudit: [],
        lossValue: null,
        losses: []
      });
    return of(stockAuditCreated);
  }

  readAuditArticles(idAudit: string): Observable<ArticleAudit[]> {
    /*return this.httpService
      .get(EndPoints.AUDITS + '/' + idAudit + '/articles');*/
    return of(this.auditArticles.filter(auditArticle => auditArticle.idAudit === idAudit));
  }

  saveAudit(idAudit: string, auditArticles: ArticleAudit[]): Observable<ArticleAudit[]> {
    /*return this.httpService
      .patch(EndPoints.AUDITS + '/' + idAudit + '/articles', auditArticles);*/
    return of([{
      // tslint:disable-next-line:max-line-length
      idAudit: '2', // ID provisional (Simula BBDD) Cuando se llame a la API sólo traerá los de la auditoría que se pasa como parámetro => Método readAuditArticles()
      barcode: '22222222222',
      description: 'descripcion1',
      retailPrice: 33,
      stock: 2,
      realStock: 1 // Simula que hemos puesto 1 en el primer elemento
  }, {
      idAudit: '2',
      barcode: '22222255555',
      description: 'descripcion2',
      retailPrice: 36,
      stock: 20,
      realStock: 15 // Queda igual
    }]);
  }

  closeAudit(idAudit: string, auditArticles: ArticleAudit[]): Observable<ArticleAudit[]> {
    /*return this.httpService
      .patch(EndPoints.AUDITS + '/' + idAudit, auditArticles);*/
    return of([{
      // tslint:disable-next-line:max-line-length
      idAudit: '2', // ID provisional (Simula BBDD) Cuando se llame a la API sólo traerá los de la auditoría que se pasa como parámetro => Método readAuditArticles()
      barcode: '22222222222',
      description: 'descripcion1',
      retailPrice: 33,
      stock: 2,
      realStock: 1 // Simula que hemos puesto 1 en el primer elemento
    }, {
      idAudit: '2',
      barcode: '22222255555',
      description: 'descripcion2',
      retailPrice: 36,
      stock: 20,
      realStock: 15 // Queda igual
    }]);
  }

  getNotAudit(idAudit: string): Observable<ArticleNotAuditLine[]> {
    /*return this.httpService
      .get(EndPoints.AUDITS + '/' + idAudit + '/not-audit');*/
    const articleNotAuditLine: ArticleNotAuditLine [] = ([
      {
        barcode: '8904598349435',
        description: 'descripcion1',
        retailPrice: 5,
        stock: 10,
      }
    ]);
    return of(articleNotAuditLine);
  }

  getLosses(idAudit: string): Observable<ArticleLossLine[]>{
    /*return this.httpService
      .get(EndPoints.AUDITS + '/' + idAudit + '/losses');*/
    const articleLossLine: ArticleLossLine [] = ([
      {
        barcode: '890459836666',
        description: 'descripcion2',
        amount: 10,
        retailPrice: 50
      }
    ]);
    return of(articleLossLine);
  }
}
