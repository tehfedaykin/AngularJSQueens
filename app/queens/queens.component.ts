import IQueen from "./queensI";

QueensCtrl.$inject = ['Queen']

function QueensCtrl(Queen: any) {
  var vm = this;
  this.title = 'Queens Component';
  Queen.getQueens().then((res: IQueen[]) => {
    console.log('getting queens', res);
    vm.queens = res;
  })
}

export default QueensCtrl