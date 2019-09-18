
import homeTemplate from './home.component.html';

function HomeCtrl() {
    var vm = this;
    this.title = 'Home Component';
    console.log('home');
}

let homeComponent = {
    template: homeTemplate,
    controller: HomeCtrl, 
    controllerAs: 'vm'
}
export default homeComponent