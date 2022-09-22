import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtravesDaMinhaJanelaPage } from './atraves-da-minha-janela.page';

describe('AtravesDaMinhaJanelaPage', () => {
  let component: AtravesDaMinhaJanelaPage;
  let fixture: ComponentFixture<AtravesDaMinhaJanelaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AtravesDaMinhaJanelaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtravesDaMinhaJanelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
