import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})

export class DataManagerService {

  constructor(private http: HttpClient) {}

  getDatasets(){
    return this.http.get(URL + 'datasets')
  }

  addDataset(description:string){
    let body = {description:description};
    return this.http.post(URL + 'dataset', body)
  }

  deleteDataset(id:string){
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {id: id}
    };
    return this.http.delete(URL + 'dataset', httpOptions)
  }

  getExamples(datasetId:string){
    return this.http.get(URL + 'examples/' + datasetId)
  }

  addExamples(examples:any[], id: string){
    let body = {data: examples, datasetId: id};
    return this.http.post(URL + 'examples', body)
  }

}
