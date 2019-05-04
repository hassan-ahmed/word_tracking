import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {

  constructor(private http : HttpClient) {}

  public $userSource = new Subject<any>();

  sendString(string : string) : Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/textProcess', {
        string
      }).subscribe((data : any) => {
          observer.next(data);
          observer.complete();
      })
    });
  }

  getStrings() : Observable <any> {
    return Observable.create(observer => {
      this.http.get('/api/textProcess', {
      }).subscribe((data : any) => {
          observer.next(data);
          observer.complete();
      })
    });
  }
}
