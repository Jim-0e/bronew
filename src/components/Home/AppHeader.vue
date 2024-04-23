<template>

    <header>
      <span class="logo">бронев</span>
      <ul>
        
        <li @click="showMenu"  class="hamburger" onclick="this.classList.toggle('change')">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </li>
        <li><router-link to="#">Продажи</router-link></li>
        <li><router-link :to="{name: 'directions'}">Маршруты </router-link></li>
        <li><router-link to="#">Отчеты</router-link> </li>
      </ul>
    </header>
</template>
  <script>
      export default {
        methods:{
            showMenu(){
                this.$emit("showMenu")
            } 
        }
      }
    </script>

  <style lang="scss" scoped>
  .logo{
    position: absolute;
    left: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 24px;
    top: 50%;
    margin-left: 1rem;
    translate: 0 -50%;
    color: rgb(214, 214, 214);
  }
    header{
      width: 100%;
      background-color: rgb(0, 0, 0);
      color: white;
      position: relative;
     
    }
    ul{
        margin-left: 7rem ;
        display: flex;
        padding: 10px;
        justify-content: space-around;
        width: 500px;
        position: relative;
    }
    ul li{
        list-style-type: none;
        a{
          color: white;
          text-decoration: none;
        }
    }
    .hamburger {
  
  cursor: pointer;
}
.bar {
  width: 30px;
  height: 3px;
  background-color: #ffffff;
  margin: 6px 0;
  
  transition: 0.4s;
}
.change .bar:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 8px);
}
.change .bar:nth-child(2) {
  opacity: 0;
}
.change .bar:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -8px);
}
  </style>