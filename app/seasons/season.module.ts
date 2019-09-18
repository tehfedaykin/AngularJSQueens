import { module } from 'angular';

import seasonsService from "./season.service";

export let season = module('Season', [
  'ngRoute'
])
.factory('SeasonsService', seasonsService);