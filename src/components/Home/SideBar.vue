<template>

  <div class="sidebar " :class="click ? 'long': 'small'">
    
      <img width="100%"  src="/imgs/BusLog.jpeg" alt="">
    <ul class="ul-list">
        <li>
              <div  class="nav">
                  <img width="25" src="/icons/sprav.png" alt="">
                  <p @click="isInnerList=!isInnerList" v-if="click" href="#">Справочник <img @click="drop" class="img" :class="isInnerList?'rotate-img': 'img'" width="20" src="/icons/drop.png" alt=""></p>
              </div>
           
                <ul v-if="click" :class="isInnerList?'active': 'no-active'">
                <transition-group name="list">
                    <li  v-for="item in navLink" :key="item" class="item-list">
                      <img width="20" :src="item.img" alt="">
                    <router-link active-class="active-link"  :to="item.to"> {{ item.title }}</router-link>
                    </li>
                  </transition-group>
                </ul>
            
        </li>

        <li>
            <div  class="nav">
              <img width="25" src="/icons/about.png" alt="">
              <a v-if="click" href="#">О нас</a>
            </div>
        </li>

        <li>
          <div  class="nav">
              <img width="30" src="/icons/bus.png" alt="">
              <transition name="fade">
                  <a v-if="click" href="#">Транспорт</a>
              </transition>
                </div>
        </li> 
    </ul>
  </div>

  </template>

<script>
    export default {
       data(){
        return{
            navLink:[
              {id: 0, title: 'Водители', to: '/voditels', img: './icons/voditels.png'},
              {id: 1, title: 'Направления', to: '/napr' , img: './icons/naprav.png'},
              {id: 2, title: 'Пассажиры', to: '/passengers' , img: './icons/pas.png'},
              {id: 2, title: 'Города', to: '/cities' , img: './icons/cities.png'},
            ],
            isInnerList: false
        } 
    },
    props: ["click","activeComponent"]
  }
  </script>


<style lang="scss" scoped>

.img{
  rotate: 0deg;
  transition: .4s all;
}
.rotate-img{
  rotate: 180deg;
  transition: .4s all;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.nav-link{
  color: red;
}
.ul-list{
  margin-left: 50%;
  translate: -50%;
  li{
    width: max-content;
  }
}
.item-list{
  display: flex;
  img{
    margin-right: 10px;
  }
}
  .no-active{
    position: relative;
    transition: .5s all;
    transform: scaleY(0);
    height: 0px;
    opacity: 0;
    font-size: 13px;
    
  }
  .active{
    padding-left: 1rem;
    width: 40%;
    transform: scaleY(1);
    text-align: left;
    font-size: 13px;
    transition: .5s all;
    color: rgb(139, 139, 139);
  }
  .active-link{
    color: rgb(28, 111, 183);
    padding-left: 0rem;
  }
 
  .small{
    min-height: 100vh;
    transition: .5s all;
  }
  .sidebar{
    width: 5%;
    background-color: rgb(248, 248, 248);
    /* height: 20vh; */
    transition: all .5s;
  }
  .long{
    width: 15%;
    transition: all .5s;
    min-height: 100vh;
  }
   li{
     width: 100%; 
    list-style-type: none;
    /* margin: 0 auto; */
    transition: .5s all;
    padding-top: 2rem;
    height: max-content;
    text-align: center;
  }
  .nav{
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: left;
    transition: .5s all;
    align-items: center;
    img{
      margin-right: 15px;
    }
  }
  .nav p{
    cursor: pointer;
    color: rgb(56, 56, 56);
  }
  .nav > * {
    display: block;
    color: rgb(96, 96, 96);
}
a{
  color: rgb(99, 99, 99);
    text-decoration: none;
    // width: max-content;
    // transition: .5s all;

}
a:hover{
    color: rgb(22, 179, 214)
}
</style>