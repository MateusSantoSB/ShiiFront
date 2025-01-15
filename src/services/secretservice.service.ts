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
    return this.http.post<any>("https://shiithesecret-api.onrender.com/shii/secret",secrets)
}

  search():Observable<Secrets>{
  return  this.http.get<Secrets>("https://shiithesecret-api.onrender.com/shii/secret")
}


}
