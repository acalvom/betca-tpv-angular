import {Role} from '@core/role.model';


export class UserInfoModel{

  mobile: number;
  name: string;
  role: Role;

  constructor(mobile: number, name: string, role: Role) {
    this.mobile = mobile;
    this.name = name;
    this.role = role;
  }
}
