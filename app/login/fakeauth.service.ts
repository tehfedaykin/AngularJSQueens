import { User } from  '../state/user.service';
import { of, Observable } from 'rxjs';

export interface fakeResponse<data> {
  response: string,
  data?: data
}
function authService() {
  return {
    logIn: logIn, 
    logOut: logOut
  }

  function logIn(userName: string, passWord:string): Observable<fakeResponse<User>> {
    console.log(`sending ${userName} : ${passWord} to login service`)
    return of({
      response: 'success',
      data: {
        name: 'Jennifer',
        avatar_url: 'merp'
      }
      
    })
  }

  function logOut(): Observable<fakeResponse<User>> {
    return of({
      response: 'success'
    })
  }
}

export default authService;