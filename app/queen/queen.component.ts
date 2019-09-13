import IQueen from "../queens/queensI";

QueenCtrl.$inject = ['Queen', '$routeParams']

function QueenCtrl(Queen: any, $routeParams: any) {
  var vm = this;
  Queen.getQueen($routeParams.queenId).then((res: IQueen) => {
    console.log('getting queen', res);
    vm.queen = res;
  })
}

export default QueenCtrl