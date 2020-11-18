import {Role} from './role.model';

export interface Token {
  token: string;
  mobile?: number;
  name?: string;
  role?: Role;
}
