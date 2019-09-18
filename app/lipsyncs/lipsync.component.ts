import LipsyncTemplate from './lipsync.component.html';

class LipsyncCtrl implements angular.IComponentController {
  constructor() {

  }

  public $onInit() {

  }
}

class LipsyncComponent implements ng.IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.controller = LipsyncCtrl;
    this.controllerAs = "vm";
    this.template = LipsyncTemplate;
  }
}


export default LipsyncComponent