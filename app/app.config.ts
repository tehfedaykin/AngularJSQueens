import '../app/assets/svg/menu.svg';

routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider: any, $urlRouterProvider: any) {

    var homeState = {
        name: 'home',
        url: '/',
        component: 'homeComponent'
    };

    var queensState = {
        name: 'home.queens',
        url: 'queens',
        component: 'queensComponent',
    }
    var queenState = {
        name: 'home.queen',
        url: 'queens/:queenId',
        component: 'queenComponent',
    }

    var seasonState = {
        name: 'home.seasons',
        url: 'seasons',
        component: 'seasonsComponent'
    }
    $stateProvider.state(homeState);
    $stateProvider.state(queensState);
    $stateProvider.state(queenState);
    $stateProvider.state(seasonState);
    $urlRouterProvider.otherwise("/")
}