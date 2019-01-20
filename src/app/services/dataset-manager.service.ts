import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})

export class DatasetManagerService {

  constructor(private http: HttpClient) {}

  getDatasets(){
    return this.http.get(URL + 'datasets')
  }
}
