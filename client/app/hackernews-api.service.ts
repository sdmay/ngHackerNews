import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {getResponseURL} from "@angular/http/src/http_utils";

@Injectable()
export class HackernewsApiService {

    baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  getStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
      .map(response => response.json());
  }
  getItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
      .map(response => response.json());
  }
  getComments(id: number): Observable<any> {
    console.log(`${this.baseUrl}/item/${id}`)
    return this.http.get(`${this.baseUrl}/item/${id}`)
      .map(response => response.json());
  }
}
