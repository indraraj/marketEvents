import { TestBed, inject } from '@angular/core/testing';

import { ComponentsInteractionService } from './components-interaction.service';

describe('ComponentsInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentsInteractionService]
    });
  });

  it('should be created', inject([ComponentsInteractionService], (service: ComponentsInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
