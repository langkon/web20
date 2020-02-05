import './events/events.js';
import './users/users.js';
import './center/center.js';
import './games/games.js';
import './head/head.js';
import './news/news.js';
import './org/org.js';

angular.module('modules', [
    'events',
    'users',
    'center',
    'games',
    'head',
    'news',
    'org'
]);
