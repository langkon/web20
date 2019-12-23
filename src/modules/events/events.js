import angluar from 'angular';

import './events.scss';

import template from './events.html';

class eventsController {
  constructor() {
    'ngInject';
    this.events = [
      { event_id: 1, name: 'Лангкон' },
      { event_id: 2, name: 'РМЛ' }
    ];
  }
};

let controller = eventsController;

let eventsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

let eventsModule = angular.module('events', [])

.component('events', eventsComponent);

export default eventsModule;
