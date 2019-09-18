import angular from 'angular';
//import 'angular-route'
import '@uirouter/angularjs';
//import 'jquery';
import 'angular1-async-filter';

import routing from './app.config';
import './home/home.module';
import queensService from './queens/queens.service';
import homeComponent from './home/home.component';
import QueensComponent from './queens/queens.component';
import queenComponent from './queen/queen.component';
import navigationDirective from './components/navigation.directive';
import seasonsService from './seasons/season.service';


angular.module('ngQueenApp', [
    'ui.router',
    'asyncFilter'
]).config(routing)
.factory('QueenService', queensService)
.factory('SeasonService', seasonsService)
.component('homeComponent', homeComponent)
.component('queensComponent', new QueensComponent())
.component('queenComponent', queenComponent)
.directive('queenNav', navigationDirective);