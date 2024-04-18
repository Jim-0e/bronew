<template>
    <div class="wrapper">
        <div class="img-block">
            <img  src="/imgs/BusLog.jpeg" alt="">
        </div>
        <div class="login-block">
            <div class="login-wrapp">
                <h2>Добро пожаловать в систему управления продажами <u>БРОНЕВ</u></h2>
                <p>Для продолжения работы необходимо пройти авторизацию</p>
                <hr>
                    <button  @click="login" v-ripple class="login-btn">
                             Войти
                    </button>

                 <div class="modal-login" v-if="showModal">
                    <form-login-vue @isAuthUser="Auth" @closeModal="close">
                    </form-login-vue>
                 </div>
                
            </div>
         
        </div>
    </div>
    
</template>




<script>
import bronewStore from '../../store'
export default{
    created() {
        this.urlRef = import.meta.env.VITE_APP_URL_REF
        this.urlAuth = import.meta.env.VITE_APP_URL_AUTH
    },
    data(){
        return{
            showModal: false,
            urlRef: '',
            urlAuth: '',
            store: bronewStore(),
        }
    },
    methods:{
        close(){
            this.showModal = !this.showModal
        },
        login(){
            const urls = this.urlAuth 
            const loginWindow = window.open(urls)
                
                const checkToken = () => {
                        const url = new URL(loginWindow.location.href)
                        const token = url.searchParams.get('token')
                    if(token){
                            localStorage.setItem('token', token)
                            loginWindow.close()
                            console.log('es')
                    }else{
                            setTimeout(checkToken, 1000) 
                            console.log('note')
                     }
                }
                checkToken() 
        },
        
    },
    provide(){
        return{
            Auth: true
        }
    }
}
</script>

<style lang="scss" scoped>
u{
    font-weight: 700;
    color: rgb(73, 65, 65)
}
    .modal-login{
        position: absolute;
        left: 0%;
        top: -10%; 
        width: 100%;
        color: black;
        /* background-color: rgb(255, 255, 255); */
    }
    .login-btn{
        margin-top: 10px;
        border-radius: 15px;
        width: 50%;
        border: 1px solid #00b3ff;
        color: #00b3ff;
    }
    .img-block{
        width: 40%;
        /* overflow: hidden; */
    }
    .img-block img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .login-wrapp{
        position: relative;
        color: #606367;
        width: 50%;
        margin-left: 50%;
        margin-top: 30%;
        transform: translate(-50%, -30%);
        h2{
            font-size: 1.5rem;
            font-weight: 400;
        }
    }
    .login-wrapp > *{
        margin-top: 1rem;
    }
    .wrapper{
        padding: 0 !important;
        margin: 0 !important;
        height: 100vh;
        width: 100%;
        display: flex;
        background-color: rgb(239, 239, 239);
        margin-left: 1rem;
    }
</style>