export class PocoyoVideoService {
  public apiHost: string = 'https://www.googleapis.com/youtube/v3/search';

  /** @ngInject */
  constructor(private $log: angular.ILogService, private $http: angular.IHttpService) {
    // 
  }
  getVideos(limit: string = '10', qstring: string = 'pocoyo'): angular.IPromise<any[]> {
    return this.$http.get(this.apiHost, {
      params: {
        key: 'AIzaSyAaVxe2e6AbU3FD2pKTQh1_AySRHC1NY8I',
        type: 'video',
        maxResults: limit,
        pageToken: '',
        part: 'id,snippet',
        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken',
        q: qstring
      }
    })
      .then((response: any): any => {
        return response.data;
      })
      .catch((error: any): any => {
        this.$log.error('XHR Failed for getVideos.\n', error.data);
      });
  }
}
