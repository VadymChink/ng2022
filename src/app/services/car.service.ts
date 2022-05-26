import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICar} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars)
  }

  create(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, car)
  }

  getById(id: string): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`)
  }

  deleteById(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}/${id}`)
  }

  updateById(id: string, carForUpdate: Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(`${urls.cars}/${id}`, carForUpdate)
  }
}
