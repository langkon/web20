import angular from 'angular';
import './modules/modules.js';
import './style.scss';
import template from './app.html';

class appController {
  constructor() {
    'ngInject';
  }
};

let controller = appController;

let appComponent = {
  template,
  restrict: 'E',
  controller,
  controllerAs: 'vm'
};

var appModule = angular.module('app', ['modules'])
.component('app', appComponent);
