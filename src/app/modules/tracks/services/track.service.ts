import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as dataRaw from '../../../data/tracks.json'
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {
   
   }

   private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
     return new Promise((resolve, reject) => {
       const listTmp = listTracks.filter(a => a._id != id);
       resolve(listTmp);
     })
   }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map((dataRaw: any) => {
        return dataRaw.data;
      })
    )
  } 

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map((dataRaw: any) => {
        return dataRaw.data;
      })
    )
    // .pipe(
    //   mergeMap((dataRaw: any) => this.skipById(dataRaw.data, 1)),
    //   catchError((err) => {
    //     const { status, statusText } = err;
    //     console.log('Algo paso', [status, statusText]);
    //     return of([])
    //   })
      
    // )
  } 

}
