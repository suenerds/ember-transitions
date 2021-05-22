import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class TransitionComponent extends Component {
  @tracked children = A()

  registerChild(component){
    this.children.addObject(component)
  }

  unregisterChild(component) {
    this.children.removeObject(component);
  }

  get isShowing() {
    return this.args.show || !!this.children.length
  }
}
