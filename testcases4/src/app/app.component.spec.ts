import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreetingComponent } from './greeting/greeting.component';


describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreetingComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the initial greeting', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('Hello, World!');
  });

  it('should change the greeting on button click', () => {
    const button = fixture.nativeElement.querySelector('button');
    const greetingElement = fixture.nativeElement.querySelector('h2');

    expect(greetingElement.textContent).toContain('Hello, World!');

    button.click();
    fixture.detectChanges();

    expect(greetingElement.textContent).toContain('Welcome to Angular!');
  });
});
