import { from } from "rxjs";

seasonsService.$inject = ['$http'];

interface error {
  error: {
    message: string
  }
}

function seasonsService($http: angular.IHttpService) {
  return {
    getSeasons: getSeasons,
    getSeason: getSeason
  }

  function getSeasons() {
    return from($http.get('http://www.nokeynoshade.party/api/seasons')
      .then(getSeasonsComplete)
      .catch(getSeasonsFailed));
    
      function getSeasonsComplete(response: angular.IHttpResponse<[]>) {
        return response.data

      }
      
      function getSeasonsFailed(error: angular.IHttpResponse<error>) {
        console.log('error', error.data.error.message);
      }
  }
  function getSeason(id: number) {
    return $http.get('http://www.nokeynoshade.party/api/seasons/' + id)
      .then(getSeasonComplete)
      .catch(getSeasonFailed)
    
      function getSeasonComplete(response: angular.IHttpResponse<[]>) {
        return response.data

      }
      
      function getSeasonFailed(error: angular.IHttpResponse<error>) {
        console.log('error', error.data.error.message);
      }
  }
}

export default seasonsService;