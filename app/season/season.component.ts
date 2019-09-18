import ISeason from "../seasons/Iseason";

seasonCtrl.$inject = ['SeasonsService', '$routeParams'];

function seasonCtrl(SeasonsService: any, $routeParams: any) {
  var vm = this;
  SeasonsService.getSeason($routeParams.seasonId).then((res: ISeason) => {
    vm.season = res;
  })
}