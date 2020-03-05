import { BehaviorSubject, Observable } from "rxjs";

export interface User {
  name: string;
  avatar_url: string;
}

function userService() {
  const userState = new BehaviorSubject<null | User>(null)

  return {
    getUser: getUser,
    setUser: setUser,
    removeUser: removeUser
  }

  function getUser(): Observable<User> {
    return userState;
  }

  function setUser(user: User): void {
    userState.next(user);
  }

  function removeUser(): void {
    userState.next(null);
  }

}

export default userService;