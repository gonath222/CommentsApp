import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        HeaderComponent
      ]//,
      //providers:[Router]
    }).compileComponents()
  });

    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      let userService = fixture.debugElement.injector.get(LoginService);
      //let router = fixture.debugElement.injector.get(Router);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });


    it('should render title', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      let loginservice = fixture.debugElement.injector.get(LoginService);
      //let router = fixture.debugElement.injector.get(Router);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.nav-bar span').textContent).toContain('Welcome Guest');
    });
  });
