import IQueen from './Iqueen';
import { from } from 'rxjs';

queensService.$inject = ['$http'];

interface error {
  error: {
    message: string
  }
}


function queensService($http: angular.IHttpService) {
  return {
    getQueens: getQueens,
    getQueen: getQueen,
    getSeasonQueens: getSeasonQueens,
    getWinningQueens: getWinningQueens,
    getQueenLipsync: getQueenLipsync
  }

  function getQueens() {
    return from($http.get('http://www.nokeynoshade.party/api/queens/all')
        .then(getQueensComplete)
        .catch(getQueensFailed));

    function getQueensComplete(response: angular.IHttpResponse<IQueen[]> ): IQueen[] {
      return response.data;
    }

    function getQueensFailed(error: angular.IHttpResponse<error>) {
      //console.log('error', error?.data?.error.message);
    }
  }

  function getQueen(id: string) {
    return $http.get(`http://www.nokeynoshade.party/api/queens/${id}`)
        .then(getQueenComplete)
        .catch(getQueenFailed);

    function getQueenComplete(response: angular.IHttpResponse<IQueen>): IQueen {
        return response.data;
    }

    function getQueenFailed(error: any) {
        console.log('XHR Failed for getQueen.' + error.data);
    }
  }

  function getSeasonQueens(id: string) {
    return from($http.get(`http://www.nokeynoshade.party/api/seasons/${id}/queens`)
      .then(getQueensComplete)
      .catch(getQueensFailed))

    function getQueensComplete(response: angular.IHttpResponse<[]> ): IQueen[] {
      return response.data;
    }

    function getQueensFailed(error: angular.IHttpResponse<error>) {
      console.log('error', error.data.error.message);
    }
  }

  function getWinningQueens() {
    return from($http.get(`http://www.nokeynoshade.party/api/queens/winners`)
      .then(getQueensComplete)
      .catch(getQueensFailed))

    function getQueensComplete(response: angular.IHttpResponse<[]> ): IQueen[] {
      return response.data;
    }

    function getQueensFailed(error: angular.IHttpResponse<error>) {
      console.log('error', error.data.error.message);
    }
  }

  function getQueenLipsync(id: string) {
    return $http.get(`http://www.nokeynoshade.party/api/queens/${id}/lipsyncs`)
        .then(getQueenComplete)
        .catch(getQueenFailed);

    function getQueenComplete(response: angular.IHttpResponse<IQueen>): IQueen {
        return response.data;
    }

    function getQueenFailed(error: any) {
        console.log('XHR Failed for getQueen.' + error.data);
    }
  }
}

export default queensService;