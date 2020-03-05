import loginTemplate from './login.component.html';
import './login.component.less';
import { fakeResponse } from './fakeauth.service';
import { User } from  '../state/user.service';
import { tap } from 'rxjs/operators';

LoginCtrl.$inject = ['UserService', 'AuthService']

function LoginCtrl(UserService: any, AuthService: any) {
  var vm = this;
  vm.user;
  vm.form = {
    user: null,
    password: null
  }
  UserService.getUser.pipe(tap((val) => console.log(val)))
  UserService.getUser().subscribe((val:User) => {
    vm.user = val;
  });

  vm.submitForm = function(){
    AuthService.logIn(vm.form).subscribe((res: fakeResponse<User>) => {
      UserService.setUser(res.data)
      //go to home
    })
  }

  vm.logOut = function() {
    AuthService.logOut().subscribe(() => {
      UserService.removeUser();
    })
  }

}

let loginComponent  = {
  template: loginTemplate,
  controller: LoginCtrl, 
  controllerAs: 'vm'
}

export default loginComponent