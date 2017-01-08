import { PocoyoVideoService } from '../pocoyoVideo/pocoyoVideo.service';

/** @ngInject */
export function CardVideos(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {
      // videos: '='
    },
    templateUrl: 'app/components/cardVideos/cardVideos.html',
    controller: CardVideosController,
    controllerAs: 'vm',
    bindToController: true
  };
}

/** @ngInject */
export class CardVideosController {
  public videos: any;
  public qlimit: string = '10';
  public qstring: string;
  public pocoyoService: PocoyoVideoService;
  // "this.videos" is initialized by directive option "bindToController: true" 
  constructor(pocoyoVideoService: PocoyoVideoService) {
    this.videos = new Array();
    this.pocoyoService = pocoyoVideoService;
    this.activate();
  }
  activate() {
    this.getVideos();
  }

  getVideos() {
    this.pocoyoService.getVideos(this.qlimit, this.qstring).then((response: any): any => {
      this.videos = response.items;
    });
  }

}
