export interface ArticleAudit {
  // tslint:disable-next-line:max-line-length
  idAudit: string; // ID provisional (Simula BBDD) Cuando se llame a la API sólo traerá los de la auditoría que se pasa como parámetro => Método readAuditArticles() del servicio
  barcode?: string;
  description?: string;
  retailPrice?: number;
  stock?: number;
  realStock?: number;
}
