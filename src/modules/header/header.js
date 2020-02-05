import angluar from 'angular';

import './headers.scss';

import template from './headers.html';

class orgsController {
    constructor() {
        'ngInject';
        this.s = [
            { header_id: 1, name: 'Анонс' },
            { header_id: 2, name: 'Расписание' }
        ];
    }
};

let controller = headersController;

let gamesComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
}

let headsModule = angular.module('headers', [])

    .component('headers', headsComponent);

export default headersModule;
