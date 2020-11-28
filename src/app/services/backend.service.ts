import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignedUp } from '../models/signedUp';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  async getTrainingsList(): Promise<Training[]>{
    return await this.httpClient.get<Training[]>(`${this.baseUrl}/trainings`).toPromise();
  }

  async getSignUpsList(): Promise<SignedUp[]>{
    return await this.httpClient.get<SignedUp[]>(`${this.baseUrl}/signUps`).toPromise();
  }
}
