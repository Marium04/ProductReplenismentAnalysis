import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetWklySalesService {
  private  url:string = '/db';
  constructor(private http:Http) { }
  getWklySalesFor(itemId:string){
    return this.http.get(this.url+"/item/"+itemId).toPromise().then(response => response.json()).catch(GetWklySalesService.handleError);
  }
  getItemIds(){
    return this.http.get(this.url+"/itemIds").toPromise().then(response => response.json()).catch(GetWklySalesService.handleError);
  }
  public static handleError(error: any):  Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
