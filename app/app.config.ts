
routing.$inject = ['$stateProvider'];

export default function routing($stateProvider: any) {
    var homeState = {
        name: 'home',
        url: '/',
        component: 'homeComponent'
    };

    var queensState = {
        name: 'queens',
        url: '/queens',
        component: 'queensComponent',
    }
    var queenState = {
        name: 'queen',
        url: '/queens/:queenId',
        component: 'queenComponent',
    }
    $stateProvider.state(homeState);
    $stateProvider.state(queensState);
    $stateProvider.state(queenState);
}