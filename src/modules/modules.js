import './events/events.js';
import './users/users.js';
import './users/centers.js';
import './users/games.js';
import './users/heads.js';
import './users/news.js';
import './users/orgs.js';

angular.module('modules', [
    'events',
    'users',
    'centers',
    'games',
    'heads',
    'news',
    'orgs'
]);
