import angluar from 'angular';

import './games.scss';

import template from './games.html';

class orgsController {
    constructor() {
        'ngInject';
        this.s = [
            { game_id: 1, name: 'Арахнофобия' },
            { game_id: 2, name: 'Данс Макабр' }
        ];
    }
};

let controller = gamesController;

let gamesComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
}

let gamesModule = angular.module('games', [])

    .component('games', gamesComponent);

export default gamesModule;
