import { TestBed, async } from '@angular/core/testing';
import { NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { ProductActions } from './products/product.actions';

import { AppModule } from './app.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular - POS'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular - POS');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(fixture.nativeElement);
    expect(compiled.querySelector('h1').textContent).toContain('Angular - POS');
  }));
});
