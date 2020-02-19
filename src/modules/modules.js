import './events/events.js';
import './users/users.js';
import './center/centers.js';
import './games/games.js';
import './header/headers.js';
import './news/news.js';
import './org/orgs.js';

angular.module('modules', [
    'events',
    'users',
    'centers',
    'games',
    'headers',
    'news',
    'orgs'
]);
