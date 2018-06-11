import { Injectable } from '@angular/core';
import { BehaviorSubject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsInteractionService {
  private passedValueSource = new BehaviorSubject<string>(''); 

  constructor() { }
   // Observable string streams
  passedValue$ = this.passedValueSource.asObservable();
  
  // Service message commands
  public passedValue(value: string): void {
    console.log(value);
    this.passedValueSource.next(value);
  }
}
