import navTemplate from './navigation.template.html';
import { BehaviorSubject } from 'rxjs';

function navigationDirective() {
  var directive = {
      template: navTemplate,
      restrict: 'EA',
      controller: navigationCtrl,
      controllerAs: 'vm',
      bindToController: true
  };
  return directive;
}

navigationCtrl.$inject = ['$scope'];

function navigationCtrl($scope: angular.IScope) {
  const vm = this;
  vm.searchInput = new BehaviorSubject<string>('');
  
  //vm.queens = 
  //vm.queens = vm.searchInput
  // vm.searchInput.subscribe((val: string) => {
  //   console.log('searching', val);
  // })

}

export default navigationDirective