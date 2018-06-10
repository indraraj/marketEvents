import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsInteractionService {
  private passedValueSource = new Subject<string>();

  constructor() { }
   // Observable string streams
  passedValue$ = this.passedValueSource.asObservable();
  
  // Service message commands
  passedValue(mission: string) {
    console.log(mission);
    this.passedValueSource.next(mission);
  }
}
