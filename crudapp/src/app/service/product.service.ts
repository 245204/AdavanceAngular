import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs';
import { Product } from '../model/Product';
//service class will have @injectable annotation
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
baseurl='http://localhost:8090/product/api.2.0/retrieve';
baseurl1='http://localhost:8090/product/api.2.0/delete';

  constructor(private http: HttpClient) {

   }

  getProducts(){
    return this.http.get<Product[]>('http://localhost:8090/product/api.2.0/retrieve/all')
  }
  
  getProductById(id:number){
    return this.http.get<Product[]>(`${this.baseurl}/${id}`);
  }


  saveProduct(product:Product):
  Observable<Object>{
    
   return this.http.post( 'http://localhost:8090/product/api.2.0/create',product)
  }


  updateProduct(product:Product):
  Observable<Object>{
    return this.http.put( 'http://localhost:8090/product/api.2.0/update',product)
    
  }
  deleteProductbyId(id:number):
  Observable<Object>{
    return this.http.delete(`${this.baseurl1}/${id}`)
  }
}
