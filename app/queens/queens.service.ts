import IQueen from './queensI';

queensService.$inject = ['$http'];

interface error {
  error: {
    message: string
  }
}
function queensService($http: angular.IHttpService) {
  return {
    getQueens: getQueens,
    getQueen: getQueen
  }

  function getQueens() {
    return $http.get('http://www.nokeynoshade.party/api/queens/all')
        .then(getQueensComplete)
        .catch(getQueensFailed);

    function getQueensComplete(response: angular.IHttpResponse<[]> ): IQueen[] {
        return response.data;
    }

    function getQueensFailed(error: angular.IHttpResponse<error>) {
      console.log('error', error.data.error.message);
    }
  }

  function getQueen(id: number) {
    return $http.get('http://www.nokeynoshade.party/api/queens/' + id)
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