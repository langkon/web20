import angluar from 'angular';

import './users.scss';

import template from './users.html';

class usersController {
    constructor() {
        'ngInject';
        this.users = [
            { user_id: 1, name: '���' },
            { user_id: 2, name: '������' }
        ];
    }
};

let controller = usersController;

let usersComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
}

let usersModule = angular.module('users', [])

    .component('users', usersComponent);

export default usersModule;