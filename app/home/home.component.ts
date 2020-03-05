import homeTemplate from './home.component.html';
import './home.component.less';

HomeCtrl.$inject = ['$mdSidenav']

function HomeCtrl($mdSidenav: any) {
    const vm = this;
    vm.$mdSidenav = $mdSidenav;

    vm.title = 'Angular Queens Demo';
    vm.toggleUsersList = function (){
        vm.$mdSidenav('left').toggle();
    }
}

let homeComponent = {
    template: homeTemplate,
    controller: HomeCtrl, 
    controllerAs: 'vm'
}
export default homeComponent