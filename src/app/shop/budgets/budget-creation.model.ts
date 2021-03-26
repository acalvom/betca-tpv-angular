import {Shopping} from '../shared/services/models/shopping.model';


export interface BudgetCreation {
  id: string;
  creationDate: Date;
  shoppingList: Shopping[];
}


