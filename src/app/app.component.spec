import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginService } from './service/login.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let loginservice = fixture.debugElement.injector.get(LoginService);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CommentsApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    let loginservice = fixture.debugElement.injector.get(LoginService);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Comments App');
  });

});
