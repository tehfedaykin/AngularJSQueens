import angular from 'angular';
//import 'angular-route'
import '@uirouter/angularjs';
//import 'jquery';
import 'angular1-async-filter';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import '../node_modules/angular-material/angular-material.min.css';

import routing from './app.config';
import './home/home.module';
import queensService from './queens/queens.service';
import homeComponent from './home/home.component';
import loginComponent from './login/login.component';
import QueensComponent from './queens/queens.component';
import queenComponent from './queen/queen.component';
import seasonsComponent from './seasons/season.component';
import navigationDirective from './components/navigation.directive';
import seasonsService from './seasons/season.service';
import userService from './state/user.service';
import authService from './login/fakeauth.service';

angular.module('ngQueenApp', [
    'ui.router',
    'asyncFilter', 
    'ngMaterial'
]).config(routing)
.factory('QueenService', queensService)
.factory('SeasonService', seasonsService)
.factory('UserService', userService)
.factory('AuthService', authService)
.component('loginComponent', loginComponent)
.component('homeComponent', homeComponent)
.component('queensComponent', new QueensComponent())
.component('queenComponent', queenComponent)
.component('seasonsComponent', seasonsComponent)
.directive('queenNav', navigationDirective);