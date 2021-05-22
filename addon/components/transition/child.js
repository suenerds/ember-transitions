import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TransitionChildComponent extends Component {

  constructor() {
    super(...arguments);
    this.args.parent.registerChild(this)
  }

  @action
  didTransitionOut() {
    this.args.parent.unregisterChild(this)
  }
}
