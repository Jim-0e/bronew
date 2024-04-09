<template>

    <section>
        
        <slot name="title"></slot>
        <div class="wrapper">
            <form action="">
                <slot name="forms"></slot>
            </form>
            <slot name="out"></slot>
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

<style scoped>
form{
    display: flex;
}
form :last-child{
    margin-right: 10px;
    
}
h2{
    font-weight: 100;
    color: rgb(108, 108, 108);
    padding: 1rem  1rem 2rem;
    background-color: rgb(209, 227, 227);
}
    .wrapper{
        padding: 15px;
        width: 100%;
        background-color: rgb(251, 251, 251);
        height: 90vh;
        margin-top: 1rem;
        margin-left: 1rem;
    }
</style>