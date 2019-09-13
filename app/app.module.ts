import angular from 'angular';
import 'angular-route'
import 'jquery';

import routing from './app.config';
import './home/home.module';
import queensService from './queens/queens.service';

angular.module('ngQueenApp', [
    'ngRoute'
]).config(routing)
.factory('Queen', queensService);