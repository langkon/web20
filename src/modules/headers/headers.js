import angluar from 'angular';

import './headers.scss';

import template from './headers.html';

class usersController {
    constructor() {
        'ngInject';
        this.headers = [
            { header_id: 1, name: 'Новости' },
            { header_id: 2, name: 'Анонс' },
            { header_id: 3, name: 'Расписание' }
        ];
    }
};

let controller = headersController;

let headersComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
}

let headersModule = angular.module('headers', [])

    .component('headers', headersComponent);

export default headersModule;