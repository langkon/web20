import './events/events.js';
import './users/users.js';
import './users/center.js';
import './users/games.js';
import './users/head.js';
import './users/news.js';
import './users/org.js';

angular.module('modules', [
    'events',
    'users',
    'center',
    'games',
    'head',
    'news',
    'org'
]);
