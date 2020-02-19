import angluar from 'angular';

import './orgs.scss';

import template from './orgs.html';

class orgsController {
    constructor() {
        'ngInject';
        this.orgs = [
            { org_id: 1, name: 'Дионис' },
            { org_id: 2, name: 'Иля' }
        ];
    }
};

let controller = orgsController;

let orgsComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
}

let orgsModule = angular.module('orgs', [])

    .component('orgs', orgsComponent);

export default orgsModule;
