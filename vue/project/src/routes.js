import Home from './components/contents/Main/MainPage.vue';
import Register from './components/contents/Register/Register.vue';
import Profile from 'components/profiles/ProfileMainPage.vue';
import {Applications} from 'logic/api';

const Api = new Applications();

const guard = function(to, from, next) {
  console.log('route guard:', to, from);
  //if (to.name == "Register") {
  if (!Api.isUserActive()) {
    console.log("access denied");
    window.location.href = "/";
  } else {
    console.log("access ok");
    next();
  }
};

export const routes = [
  {path: '', component: Home, name: 'Home', meta: { scrollToTop: true }},
  {path: '/registration', component: Register, name: 'Register', meta: { scrollToTop: true },
  beforeEnter: (to, from, next) => {
      guard(to, from, next);
     }
  },
  {path: '/profile', component: Profile, name: 'Profile', meta: { scrollToTop: true }},
  {path: '*', redirect: '/'}

];
