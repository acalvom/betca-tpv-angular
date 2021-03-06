import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {User} from '@shared/models/userRegister.model';
import {Role} from '@core/role.model';
import {UserInfoModel} from "../../shop/users/models/user-info.model";


@Injectable({
  providedIn: 'root',
})
export class UserCompleteService {

  private users: User[] = [
    {
      mobile: 66, firstName: 'Hector', familyName: 'Gomez', email: 'hectorgomez@hotmail.com', dni: '0000000001A',
      address: 'C/Alan Turin', password: '6', role: Role.ADMIN, registrationDate: new Date(), active: true
    },
    {
      mobile: 6, firstName: 'Laura', familyName: 'Perez', email: 'lauraperez@hotmail.com', dni: '1000000002B',
      address: 'Avd/ Albufera', password: '6', role: Role.CUSTOMER, registrationDate: new Date(), active: true
    },
    {
      mobile: 12678, firstName: 'David', familyName: 'Garcia', email: 'davidgarcia@hotmail.com', dni: '5100000003Y',
      address: 'C/Pablo Neruda', password: '1234', role: Role.MANAGER, registrationDate: new Date(), active: true
    },
  ];

  constructor(private httpService: HttpService) {
  }

  searchCompleteUser(mobile: number): Observable<User> {
    return of(this.users.find(user => user.mobile == mobile));
  }

  getCompleteUsers(): Observable<User[]> {
    return of(this.users);
  }

  getBasicUsersInfo(): Observable<any[]> {
    return of(this.users.map(user => new UserInfoModel(user.mobile, user.firstName, user.role)));
  }

}