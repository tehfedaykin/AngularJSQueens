import ISeason from "./Iseason";

seasonsCtrl.$inject = ['SeasonsService'];

function seasonsCtrl(SeasonsService: any) {
  var vm = this;
  SeasonsService.getSeasons().then((res: ISeason[]) => {
    vm.seasons = res;
  });

  //create async pipe for angularJS?? 
}