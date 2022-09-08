import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoMundoEmPanicoPage } from './todo-mundo-em-panico.page';

describe('TodoMundoEmPanicoPage', () => {
  let component: TodoMundoEmPanicoPage;
  let fixture: ComponentFixture<TodoMundoEmPanicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMundoEmPanicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoMundoEmPanicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
