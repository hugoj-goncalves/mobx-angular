import { NgModule } from '@angular/core';
import { action as mobxAction, computed as mobxComputed, observable as mobxObservable } from 'mobx';
import { MobxAutorunSyncDirective } from './directives/mobx-autorun-sync.directive';
import { MobxAutorunDirective } from './directives/mobx-autorun.directive';
import { MobxReactionDirective } from './directives/mobx-reaction.directive';

export { MobxAutorunDirective, MobxAutorunSyncDirective, MobxReactionDirective };

@NgModule({
  declarations: [
    MobxAutorunDirective,
    MobxAutorunSyncDirective,
    MobxReactionDirective
  ],
  exports: [
    MobxAutorunDirective,
    MobxAutorunSyncDirective,
    MobxReactionDirective
  ],
  imports: [],
  providers: []
})
export class MobxAngularModule {}

export function actionInternal(...args) {
  return (mobxAction as any)(...args);
}
export const action: typeof mobxAction = Object.assign(
  actionInternal,
  mobxAction
) as any;

function computedInternal(...args) {
  return (mobxComputed as any)(...args);
}
export const computed: typeof mobxComputed = Object.assign(
  computedInternal,
  mobxComputed
) as any;

function observableInternal(...args) {
  return (mobxObservable as any)(...args);
}

export const observable: typeof mobxObservable = Object.assign(
  observableInternal,
  mobxObservable
) as any;
