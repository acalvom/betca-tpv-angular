export class StockAlarmLine {
  barcode: string;
  stock: number;
  warning?: number;
  critical?: number;

  constructor(barcode: string, stock: number) {
    this.barcode = barcode;
    this.stock = stock;
  }
}
