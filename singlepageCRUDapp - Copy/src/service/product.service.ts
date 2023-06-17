import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient } from '@angular/common/http';
import { Admin } from 'src/app/model/Admin';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl='http://localhost:8083/1.0/admin/get';
   baseurl1='http://localhost:8083/1.0/admin/delete';
  
    constructor(private http: HttpClient) {
  
     }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  
    getProducts(){
      return this.http.get<Admin[]>('http://localhost:8083/1.0/admin/allmusics');
    }
    
    getProductById(id:number){
      return this.http.get<Admin[]>(`${this.baseurl}/${id}`);
      
    }
  
  
    saveProduct(admin:Admin):
     Observable<Object>{
      
     return this.http.post( 'http://localhost:8083/1.0/admin/addmusic',admin);
     }
  
  
     updateProduct(admin:Admin):
    Observable<Object>{
       return this.http.put( 'http://localhost:8083/1.0/admin/update',admin);
      
     }
     deleteProductbyId(id:number):
     Observable<Object>{
       return this.http.delete(`${this.baseurl1}/${id}`);
    }
}
