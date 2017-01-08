import { PocoyoVideoService } from '../components/pocoyoVideo/pocoyoVideo.service';

export class MainController {
  public videos: any;
  public pocoyoService: PocoyoVideoService;
  public classAnimation: string;
  public toastr: any;
  public mdDialog: any;
  public CurrentVideo: string;

  /* @ngInject */
  constructor($timeout: angular.ITimeoutService, pocoyoVideoService: PocoyoVideoService, toastr: any, $mdDialog: any) {
    this.videos = new Array();
    this.pocoyoService = pocoyoVideoService;
    this.classAnimation = '';
    this.toastr = toastr;
    this.mdDialog = $mdDialog;
    this.activate($timeout);
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {
    this.getVideos();

    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 2000);

    this.showToastr();
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/diogenespolanco/pocoyoplayer" target="_blank"><b>PocoyoPlayer</b></a>');
    this.classAnimation = '';
  }

  getVideos()  {
    this.pocoyoService.getVideos().then((response: any): any => {
      this.videos = response.items;
    });
  }

}
