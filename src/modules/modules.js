import './events/events.js';
import './users/users.js';
import './centers/centers.js';
import './games/games.js';
import './headers/headers.js';
import './news/news.js';
import './orgs/orgs.js';

angular.module('modules', [
    'events',
    'users',
    'centers',
    'games',
    'headers',
    'news',
    'orgs'
]);
