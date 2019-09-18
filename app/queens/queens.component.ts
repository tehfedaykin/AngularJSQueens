import IQueen from "./Iqueen";
import queensTemplate from './queens.component.html';
import ISeason from "../seasons/Iseason";
import { BehaviorSubject, Observable, } from "rxjs";
import { mergeMap, switchMapTo, map, switchMap } from  'rxjs/operators';

class QueensCtrl implements angular.IComponentController {
  public static $inject: string[] = ['QueenService', 'SeasonService'];

  public title: string = 'Queens Component';
  public selectedSeason: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public seasons: Observable<ISeason[]>;
  public allQueens: Observable<IQueen[]>;
  public displayedQueens: Observable<IQueen[]>;
  public selectedWinners: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private QueenService: any, private SeasonService: any ) {

  }

  public $onInit () {
    this.seasons = this.SeasonService.getSeasons();
    this.allQueens = this.QueenService.getQueens();


    this.displayedQueens = this.selectedSeason.pipe(
      mergeMap((seasonId: string) => {
        if (seasonId) {
          return this.QueenService.getSeasonQueens(seasonId) as Observable<IQueen[]>;
        }
        else {
          console.log('getting all queens');
          return this.QueenService.getQueens() as Observable<IQueen[]>;
        }
      })
    )

  }
}

class QueensComponent implements ng.IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.controller = QueensCtrl;
    this.controllerAs = "vm";
    this.template = queensTemplate;
  }
}


export default QueensComponent