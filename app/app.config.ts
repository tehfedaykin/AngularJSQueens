
routing.$inject = ['$routeProvider'];
import homeTemplate from './home/home.component.html';
import HomeCtrl from './home/home.component';
import queensTemplate from './queens/queens.component.html';
import QueensCtrl from './queens/queens.component';
import queenTemplate from './queen/queen.component.html';
import QueenCtrl from './queen/queen.component';


export default function routing($routeProvider: any) {
    console.log('routing', $routeProvider);
    $routeProvider
        .when('/', {
            template: homeTemplate,
            controller: HomeCtrl,
            controllerAs: 'vm'
        })
        .when('/queens', {
            template: queensTemplate,
            controller: QueensCtrl,
            controllerAs: 'vm'
        })
        .when('/queens/:queenId', {
            template: queenTemplate,
            controller: QueenCtrl,
            controllerAs: 'vm'
        })
        .otherwise('/');

}