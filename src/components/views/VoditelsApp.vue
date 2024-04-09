<template>

    <app-slot-vue>
        <template v-slot:title><h2>Список водителей</h2></template>
        <template v-slot:forms>
                <v-text-field v-model="name"   label="Поиск по имени"></v-text-field>
                <v-text-field  label="Поиск по отчеству"></v-text-field>
                <v-text-field  label="Поиск по фамилии"></v-text-field>
                <v-select
                v-model="select"
                    label="Выбрать"
                    :items="['Активные', 'Все']"
                ></v-select> 
        </template>

        <template v-slot:out>
           <h2>{{ name }}</h2>  
           <h2>{{ select }}</h2>  
        </template>
           
    </app-slot-vue>
    
</template>

<script>
import AppSlotVue from '../AppSlot.vue'

export default{
    components: {AppSlotVue},
    data(){
        return{
            name: '',
            select: '',
        }
    }
}
</script>

<style>
h2{
    font-weight: 100;
    color: rgb(108, 108, 108);
    padding: 1rem  1rem 2rem;
    background-color: rgb(209, 227, 227);
}
</style>

