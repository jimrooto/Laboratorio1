import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {

    constructor(private http: HttpClient){}

registerNewUser(userData): Observable<any>{


return this.http.post('http://127.0.0.1:8000/users/',userData);
}


loginUser(userData): Observable<any>{


    return this.http.post('http://127.0.0.1:8000/auth/',userData);
    }
    

}