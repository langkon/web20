import angluar from 'angular';

import './centers.scss';

import template from './centers.html';

class orgsController {
    constructor() {
        'ngInject';
        this.s = [
            { center_id: 1, name: 'Дионис' },
            { center_id: 2, name: 'Иля' }
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
