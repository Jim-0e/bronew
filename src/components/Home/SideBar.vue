<template>

  <div class="sidebar " :class="click ? 'long': 'small'">
    
      <img class="img-main-sidebar" width="100%" src="/imgs/logos.jpg" alt="">

    <ul class="ul-list">

        <li v-for="(link, i) in links" :key="i">

              <div  class="nav">
                  <img width="25" :src="link.imgIcon" alt="">

                  <p @click="showList(link)" v-if="click" href="#">
                    {{link.title}} 
                  </p>

                  <img v-if="click" 
                     @click="showList(link)" 
                     class="img" 
                     :class="showLinkItem.id == link.id && isInnerList?'rotate-img': 'img'" width="20" 
                     :src="link.imgDrop"
                      alt=""
                  > 
              </div>
           
            <ul v-if="click" :class="showLinkItem.id == link.id && isInnerList?'active': 'no-active'">

                <transition-group name="list">
                    <li  v-for="item in link.navLink" :key="item" class="item-list">
                      <img width="20" :src="item.img" alt="">

                      <router-link active-class="active-link"  :to="item.to">
                        {{ item.title }}
                      </router-link>
                    </li>

                </transition-group>
            </ul>
        </li>
    </ul>
  </div>

  </template>

<script>
    export default {
       data(){
        return{
            links: [
              {id: 0, title: 'Справочник', imgIcon: '/icons/sprav.png', imgDrop: '/icons/drop.png', navLink:
                  [
                    {id: 0, title: 'Водители', to: '/drivers', img: './icons/voditels.png'},
                    {id: 1, title: 'Направления', to: '/directions' , img: './icons/naprav.png'},
                    {id: 2, title: 'Пассажиры', to: '/passengers' , img: './icons/pas.png'},
                    {id: 2, title: 'Города', to: '/cities' , img: './icons/cities.png'},
                  ]
              },
              {id: 1, title: 'О нас', imgIcon: '/icons/about.png', navLink:[]},
              {id: 2, title: 'Транспорт',imgIcon: '/icons/bus.png', navLink:[]}
            
            ],
            // navLink:[
            //   {id: 0, title: 'Водители', to: '/drivers', img: './icons/voditels.png'},
            //   {id: 1, title: 'Направления', to: '/directions' , img: './icons/naprav.png'},
            //   {id: 2, title: 'Пассажиры', to: '/passengers' , img: './icons/pas.png'},
            //   {id: 2, title: 'Города', to: '/cities' , img: './icons/cities.png'},
            // ],
            isInnerList: false,
            showLinkItem: [],
        } 
    },
    methods: {
      showList(item){
        this.isInnerList = !this.isInnerList
        this.showLinkItem =  JSON.parse(JSON.stringify(item))
      }
    },
    props: ["click","activeComponent"]
  }
  </script>


<style lang="scss" scoped>

.img{
  rotate: 0deg;
  transition: .4s all;
  margin-left: 2rem;
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
  margin-left: 1rem;
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
    color: rgb(0, 0, 0);
    padding-left: 0rem;

    font-weight: bold;
  }
 
  .small{
    min-height: 100vh;
    transition: .5s all;
  }
  .sidebar{
    width: 60px;
    background-color: rgb(248, 248, 248);
    /* height: 20vh; */
    transition: all .5s;
  }
  .long{
    // width: 15%;
    width: 220px;
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
    transition: .3s all;
    transition: .5s all;

}
a:hover{
    color: rgb(36, 36, 36);
    font-weight: bold;
}
</style>