import angluar from 'angular';

import './heads.scss';

import template from './heads.html';

class orgsController {
    constructor() {
        'ngInject';
        this.s = [
            { head_id: 1, name: 'Анонс' },
            { head_id: 2, name: 'Расписание' }
        ];
    }
};

let controller = headsController;

let gamesComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
}

let headsModule = angular.module('heads', [])

    .component('heads', headsComponent);

export default headsModule;
