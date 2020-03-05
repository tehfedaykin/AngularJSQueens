import ISeason from "./Iseason";
import seasonTemplate from './season.component.html';

seasonsCtrl.$inject = ['SeasonService', 'QueenService'];

function seasonsCtrl(SeasonService: any, QueenService: any) {
  var vm = this;
  SeasonService.getSeasons().subscribe((res: ISeason[]) => {
    vm.seasons = res
  });
}

let seasonsComponent  = {
  template: seasonTemplate,
  controller: seasonsCtrl, 
  controllerAs: 'vm'
}

export default seasonsComponent