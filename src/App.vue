<template>

  <div >
    <div v-show="!isAuth">
        <router-view name="login"></router-view>
    </div>


    <div v-show="isAuth">
        <app-header @showMenu="OpenMenu"></app-header>

    <!-- Главная обертка -->
        <div class="wrap">
        
          <left-nav-vue :click="isClose" >
          </left-nav-vue>
              <!-- Обертка для Контента -->
          <div>
            <router-view>
            </router-view>

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
import AppHeader from './components/Home/AppHeader.vue';
import bronewStore from './store/store';


export default {
  components: { LeftNavVue, AppHeader, AppFooter},
  data(){
    return{
      isAuth: true,
      store: bronewStore(),
      isClose: false,
    }
  },
  mounted(){
      this.fetchUser()
  },
  computed:{
    isAuth(){
      return this.store.userName
    }
    
  },  
  methods:{
    fetchUser(){
      this.store.setUserName()
    },
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
  background-color: rgb(200, 214, 216);
}
*{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
div{
  width: 100%;
}
.wrap{
  display: flex;
  height: max-content;
}
</style>