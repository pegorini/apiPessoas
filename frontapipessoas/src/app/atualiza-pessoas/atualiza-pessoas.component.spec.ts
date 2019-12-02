import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaPessoasComponent } from './atualiza-pessoas.component';

describe('AtualizaPessoasComponent', () => {
  let component: AtualizaPessoasComponent;
  let fixture: ComponentFixture<AtualizaPessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizaPessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
