import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable, of} from 'rxjs';
import {User} from '@shared/models/userRegister.model';
import {Role} from '@core/role.model';
import {UserInfoModel} from '../../shop/users/models/user-info.model';
import {EndPoints} from '@shared/end-points';


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
    return this.httpService
      .get(EndPoints.USERS + '/' + mobile);  }

  getCompleteUsers(): Observable<User[]> {
    return of(this.users);
  }

  getBasicUsersInfo(): Observable<any[]> {
    return of(this.users.map(user => new UserInfoModel(user.mobile, user.firstName, user.role)));
  }

  setCompleteUser(oldMobile: number, newUser: User): Observable<User>{
    return this.httpService
      .successful()
      .put(EndPoints.USERS + '/' + oldMobile, newUser);
  }

  createCompleteUser(user: User): Observable<User>{
    user.registrationDate = new Date() ;
    this.users.push(user);
    return of(user);

  }

  checkUser(mobile: number): boolean {
    return (this.users.find( user => user.mobile == mobile)) ? true : false;
  }

  deleteCompleteUser(mobile: number): Observable<User[]>{
    const deleteUser = this.users.find( item => item.mobile == mobile );
    const index = this.users.indexOf(deleteUser);
    this.users.splice(index, 1);
    return of(this.users);
  }


}
