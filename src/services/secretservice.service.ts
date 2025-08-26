import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Secrets } from '../models/Secrets';


@Injectable({
  providedIn: 'root'
})
export class SecretserviceService {

  constructor(private http:HttpClient) { }




  save(secrets:Secrets):Observable<any>{
    return this.http.post<any>("https://lost-rasla-mateussantos-70e95e30.koyeb.app/shii/secret",secrets)
}

  search():Observable<Secrets>{
  return  this.http.get<Secrets>("https://lost-rasla-mateussantos-70e95e30.koyeb.app/shii/secret")
}


}
