import angluar from 'angular';

import './news.scss';

import template from './news.html';

class newsController {
    constructor() {
        'ngInject';
        this.news = [
            { new_id: 1, name: 'Питерский лангкон' },
            { new_id: 2, name: '18-10' }
        ];
    }
};

let controller = newsController;

let newsComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
}

let newsModule = angular.module('news', [])

    .component('news', newsComponent);

export default newsModule;
