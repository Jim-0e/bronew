<template>
    <div class="modal">
    
        <p class="close" @click="this.$emit('closeCard')">X</p>
           <table>
        <caption>{{item.lastname}} {{ item.firstname }}</caption>
          
                <tr>
                    <th  scope="row">
                        Фамилия </th>
                    <td>{{item.lastname}}</td>
                </tr>
            <tr>
                <th  scope="row">Имя</th>
                <td>{{ item.firstname }}</td>
            </tr>
            <tr>
                <th  scope="row">Отчество</th>
                <td>{{ item.patronymic }}</td>
            </tr>
            <tr>
                <th  scope="row">Пол</th>
                <td>{{ item.sex?'муж': 'жен'  }}</td>
            </tr>
            <tr>
                <th  scope="row">Дата рождения</th>
                <td>{{ item.birthDate.slice(0,10) }}</td>
            </tr>
             
        </table> 
  
        
    </div>
    
</template>
<script>
export default{
    props: ['item'],
    data(){
        return{
            infoDriver: ['Фамилия', 'Имя','Отчество']
        }
    }
}

</script>

<style lang="scss" scoped>

table{
    width: 100%;
    padding: 0 1rem;
   
}
caption{
    color: white;
    background-color: gray;
    padding: 6px 0;
}
th{
    width: 40%;
    text-align: right;
    padding: 0 1rem;
}
td{
    text-align: center;
}
.modal{
    position: fixed;
    width: 800px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 255, 255);
    box-shadow: 2px 1px 8px 0px black;
    @media only screen and (max-width: 600px) {
        width: 80%;
        padding: 2rem;
    }
}
.close{
    position: absolute;
    color: white;
    right: 0;
    margin-right: 1rem;
    cursor: pointer;
}
</style>