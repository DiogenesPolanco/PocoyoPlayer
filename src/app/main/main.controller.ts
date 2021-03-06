
export class MainController {
  public classAnimation: string;
  public toastr: any;
  public mdDialog: any;
  public CurrentVideo: string;

  /* @ngInject */
  constructor($timeout: angular.ITimeoutService, toastr: any, $mdDialog: any) {
    this.classAnimation = '';
    this.toastr = toastr;
    this.mdDialog = $mdDialog;
    this.activate($timeout);
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 2000);

    this.showToastr();
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/diogenespolanco/pocoyoplayer" target="_blank"><b>PocoyoPlayer</b></a>');
    this.classAnimation = '';
  }
}
