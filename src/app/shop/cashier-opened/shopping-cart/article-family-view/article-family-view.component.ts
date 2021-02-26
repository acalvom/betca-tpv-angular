import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-family-view',
  templateUrl: './article-family-view.component.html',
  styleUrls: ['./article-family-view.component.css']
})
export class ArticleFamilyViewComponent implements OnInit {

  cardData: {
    title: string;
    price: number;
    type: string;
  }[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.cardData = [
      {
        title: "Zarzuela",
        price: 20,
        type: "composite"
      },
      {
        title: "Varios",
        price: 20,
        type: "composite"
      }
    ];
  }

  updateArray(): void {
    this.cardData = [
      {
        title: "Zz Falda",
        price: 20,
        type: "size"
      },
      {
        title: "Zz Polo",
        price: 27.8,
        type: "size"
      },
      {
        title: "Descrip a3",
        price: 10.12,
        type: "leaf"
      }
    ];
  }

  openSizes(): void {

  }
}
