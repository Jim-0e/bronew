<template>

    <header>
      <ul>
        <li @click="showMenu"  class="hamburger" onclick="this.classList.toggle('change')">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </li>
        <li>Продажи</li>
        <li>Маршруты</li>
        <li>Отчеты</li>
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

  <style scoped>
    header{
      width: 100%;
      background-color: rgb(0, 0, 0);
      color: white;

     
    }
    ul{
        margin-left: 7rem ;
        display: flex;
        padding: 10px;
        justify-content: space-around;
        width: 500px;
        
    }
    ul li{
        list-style-type: none;
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