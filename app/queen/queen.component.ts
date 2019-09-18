import IQueen from "../queens/Iqueen";
import queenTemplate from './queen.component.html';
import './queen.component.less';

QueenCtrl.$inject = ['QueenService', '$stateParams']

function QueenCtrl(QueenService: any, $stateParams: any) {
  var vm = this;
  QueenService.getQueen($stateParams.queenId).then((res: IQueen) => {
    vm.queen = res;
    console.log('queen', vm.queen);
  })
}

let queenComponent  = {
  template: queenTemplate,
  controller: QueenCtrl, 
  controllerAs: 'vm'
}

export default queenComponent