<template>

    <section>
        
        <h2>
            <slot name="title">
         </slot>
        </h2>
        
        <div class="wrapper">
            <slot name="add">

            </slot>
            

            <form action="" @click.prevent="">
                <slot name="forms"></slot>
            </form>
            <slot name="out">
               
            </slot>

        </div>
    </section>
        

</template>

<script>
export default{
    data(){
        return{
            search: '',
        }
    }
}
</script>

<style lang="scss" scoped>

form{
    margin-bottom: 3rem;
}
form :last-child{
    margin-right: 10px;
    
}
h2{
    font-weight: 100;
    color: rgb(108, 108, 108);
   padding: 1rem  1rem 2rem;
   background-color: rgb(255, 255, 255);
}
    .wrapper{
        padding: 15px;
        width: 100%;
        background-color: rgb(251, 251, 251);
        min-height: 90vh;
        margin-top: 1rem;
        margin-left: 1rem;
    }
</style>