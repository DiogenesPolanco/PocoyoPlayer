/// <reference path="../../typings/index.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { PocoyoVideoService } from '../app/components/pocoyoVideo/pocoyoVideo.service';
import { pocoyoNavbar } from '../app/components/pocoyoNavbar/pocoyoNavbar.directive';

module pocoyoplayer {
  'use strict';

  angular.module('pocoyoplayer', ['ngAnimate', 'ngRoute', 'ngMaterial', 'toastr'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('pocoyoVideoService', PocoyoVideoService)
    .controller('MainController', MainController)
    .directive('pocoyoNavbar', pocoyoNavbar);
}
