import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './root.reducer';
import { RootEpics } from './root.epics';
import { IAppState } from './root.types';

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics,
  ) {
    store.configureStore(
      rootReducer,
      {},
      [createLogger(), ...rootEpics.createEpics()],
      devTools.isEnabled() ? [devTools.enhancer()] : []);

  }
}
