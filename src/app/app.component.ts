import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './actions/contador.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(state => {
      this.contador = state;
    });
  }

  incrementarContador() {
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }
  decrementarContador() {
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
}
