<template>

  <div >
     <app-login-vue v-show="!isAuth">
    </app-login-vue>

    <div v-show="isAuth">
        <app-header @showMenu="OpenMenu"></app-header>

    <!-- Главная обертка -->
        <div class="wrap">
        
          <left-nav-vue :click="isClose" >
          </left-nav-vue>
              <!-- Обертка для Контента -->
          <div>
            <router-view></router-view>

            <app-footer>
            </app-footer>

          </div>
        </div>
        
    </div>


    
  </div>
    
</template>

<script>
import AppFooter from './components/Home/AppFooter.vue';
import LeftNavVue from './components/Home/SideBar.vue'
import AppLoginVue from './components/login/AppLogin.vue'
import AppHeader from './components/Home/AppHeader.vue';


export default {
  components: { LeftNavVue, AppHeader, AppFooter, AppLoginVue},
  data(){
    return{
      isAuth: true,
      isClose: false,
    }
  },
  methods:{
    OpenMenu(){
        this.isClose = !this.isClose
    }
  },
}
</script>

<style>
.section{
    margin-left: 1rem;
}
body{
  background-color: rgb(170, 193, 197);
}
*{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
div{
  width: 100%;
}
.wrap{
  display: flex;
}
</style>