<template>
    <div class="add"> 
                <img src="/icons/plus.png" alt="">
                <span>Добавить</span>
    </div>
</template>

<script>
export default{

}

</script>

<style lang="scss" scoped>
.add{
    display: flex;
    background-color: rgb(132, 132, 132);
    width: 200px;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    img{
        background-color: rgb(97, 97, 97);
        padding: 10px;
        border-radius: 10px 0 0 10px;
        
    }
    span{
        text-align: center;
        width: 100%;
        color: white;
      
    }
}

</style>