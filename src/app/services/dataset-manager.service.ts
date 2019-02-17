import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})

export class DatasetManagerService {

  constructor(private http: HttpClient) {}

  getDatasets(){
    return this.http.get(URL + 'datasets')
  }

  addDataset(description:string){
    let body = {description:description};
    console.log('go')
    return this.http.post(URL + 'dataset', body)
  }

  deleteDataset(id:string){
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {id: id}
    };
    return this.http.delete(URL + 'dataset', httpOptions)
  }
}
