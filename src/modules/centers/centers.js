import angluar from 'angular';

import './centers.scss';

import template from './centers.html';

class orgsController {
    constructor() {
        'ngInject';
        this.centers = [
            { center_id: 1, name: 'ЛангКон - это мероприятие посвященное кабинетным и павильонным ролевым играм.' }
          
        ];
    }
};

let controller = centersController;

let centersComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
}

let centersModule = angular.module('centers', [])

    .component('centers', centersComponent);

export default centersModule;
