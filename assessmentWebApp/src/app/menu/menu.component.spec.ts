

import { MenuComponent } from './menu.component';
import {DataService} from "../service/data.service";
import {Router} from "@angular/router";
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const router = jasmine.createSpyObj('Router',['navigate']);
  let service = jasmine.createSpyObj('DataService',['getService']);
  let pathName:string;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        MenuComponent,
        {provide: DataService, useValue: service},
        {provide: Router, useValue: router}
      ]
    });
    // Inject
    component = TestBed.get(MenuComponent);
    service= TestBed.get(DataService);
  });
   it('login(): should use login path name',()=>{
    //Arrange
    pathName='/login';
    router.navigate([pathName]);
    //Act
    component.login();
    //Assert
    expect(pathName).toBe('/login');
  });

  it('logout(): should set user type to null',()=>{
    //Arrange

    //Act
    component.logout();
    //Assert
    expect(service.userType).toBe('null');
  });
 });
