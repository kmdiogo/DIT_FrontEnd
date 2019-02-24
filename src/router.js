import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login';
import SignUp from '@/views/SignUp';
import CharacterCreation from '@/views/CharacterCreation';
import InitiativeTracker from '@/views/InitiativeTracker';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: "/signup",
      name: 'sign up',
      component: SignUp,
    },
    {
      path:"/charactercreation",
      name:'character creation',
      component: CharacterCreation,
    },
    {
      path:"/initativetracker",
      name:'initative tracker',
      component: InitiativeTracker,
    },
  ]
})
