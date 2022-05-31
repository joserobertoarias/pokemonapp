import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public PhotoBase64: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }
}
