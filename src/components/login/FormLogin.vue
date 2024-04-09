<template>
    <div class="login">
        <h1>Вход</h1>
        <p @click="closeModal">X</p>
        <form @click.prevent="" action="">
            <label for="email">Email</label><br>
            <input v-model="emailUser" id="email"  type="email"><br>

            <label  for="passwrd">Пароль</label><br>
            <input v-model="passUser" id="passwrd"  type="password"><br>

            <input v-model="rememberIm" type="checkbox"  id="identification">
           
            <label  for="identification">Запомнить меня</label>
            
            <button  @click="login" v-ripple type="submit">Войти</button>
        </form>
    </div>
</template>

<script>
export default{
    created() {
        this.urlRef = import.meta.env.VITE_APP_URL_REF
        this.urlAuth = import.meta.env.VITE_APP_URL_AUTH
    },
    data(){
        return{
           emailUser: '',
           passUser: '',
           rememberIm: false,
           urlRef: '',
           urlAuth: '',
        }
    },
   
    methods: {
        isAuth(){
            this.$emit("isAuthUser")
        },
        closeModal(){
            this.$emit("closeModal")
           
        },
        async login(){
            try{
                const url = this.urlAuth 
                const loginPage = window.open(url, '', 'no-opener', 'no-referrer' )
                const loginUrlTo = loginPage.location.href
                console.log(loginUrlTo)

            }catch(e){
                console.log(e)
            }
        
        }
    }
}
</script>
<style scoped>
   .login{
        position: relative;
        width: 500px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 1px 8px 4px rgb(199, 199, 199);
        padding: 2rem;
   }
   form{
    width: 100%;
   }
   form input > :not(:last-child) {
        width: 100%;
   }
   form input{
    border-bottom: 1px solid rgb(11, 107, 70);
    border-radius: 4px;
    background-color: rgba(187, 216, 241, 0.362);
    width: 100%;
   }
   button{
    background-color: rgb(0, 149, 255);
    padding: 4px 10px;
    border-radius: 5px;
   }
</style>