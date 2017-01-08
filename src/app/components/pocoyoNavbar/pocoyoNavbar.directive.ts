/** @ngInject */
export function pocoyoNavbar(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/pocoyoNavbar/pocoyoNavbar.html',
    controller: PocoyoNavbarController,
    controllerAs: 'vm',
    bindToController: true
  };
}

/** @ngInject */
export class PocoyoNavbarController {
  public urlgithub: string = 'https://github.com/diogenespolanco/pocoyoplayer';
  public urlblog: string = 'http://diogenespolanco.com';
  public repoName: string = 'Pocoyo Player';

  constructor() {
    // 
  }
}
