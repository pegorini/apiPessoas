import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPessoasComponent } from './adicionar-pessoas.component';

describe('AdicionarPessoasComponent', () => {
  let component: AdicionarPessoasComponent;
  let fixture: ComponentFixture<AdicionarPessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarPessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
