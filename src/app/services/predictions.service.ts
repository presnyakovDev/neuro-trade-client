import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:5000/getpredictions/";

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {
  private labels = [];

  constructor(private http: HttpClient) {}

  getPredictions(){
    return this.http.get(URL)
  }

  mapResults(predictions){
    return predictions.map(num=> Math.round(num*Math.pow(10, 104)))
  }

  setLabels(label){
    this.labels.push(label);
  }

  getLabels(){
    return this.labels
  }
}
