import { TestBed } from '@angular/core/testing';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component:AppComponent;
  let component1:AddComponent
  beforeEach(async () => {
    component1=new AddComponent();
     component=new AppComponent();
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  it('Subtraction with two numbers', () => {
    const result = component.subtract(5, 3);
    expect(result).toEqual(2);
  });
  it('Subtraction with zero',()=>{
    const result=component.subtract(2,0);
    expect(result).toBe(2);
  });
  it('Subtraction with -value',() =>{
    const result=component.subtract(3,-1);
    expect(result).toBe(4);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testjasmine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testjasmine');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testjasmine app is running!');
  });
  it('should add two number',()=>{
    const result=component1.add(2,8);
    expect(result).toEqual(10);
  });
  it('should add two negative number',()=>{
    const result=component1.add(-9,-1);
    expect(result).toEqual(-10);
  });
  it('Addition with zero', () => {
    const result = component1.add(5, 0);
    expect(result).toEqual(5);
  });
});
