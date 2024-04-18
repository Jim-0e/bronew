<template>
        <app-slot>

            <template v-slot:title>
           Список пассажиров
        </template>

        <template v-slot:forms>
            <div class="inputs-wrapp">
                    <v-text-field v-model="name"   label="Поиск по наименованию"></v-text-field>
                    <v-text-field v-model="shortName"  label="Поиск по сокращению"></v-text-field>
                    <v-text-field v-model="okato" label="Поиск по окато"></v-text-field>
                    <v-text-field v-model="oktmo" label="Поиск по октмо"></v-text-field>
                
                </div>
                
                <div class="btns-wrapp">
                    <reset-btn  @click="resetSearch"/>
                    <search-btn  @click="setPassenger"/> 
                </div>
        </template>

        <template v-slot:out>
            <table-app>
                <template v-slot:tr>
                    <th>Сокращение</th>
                    <th>Наименование</th>
                    <th>Оф.наименование</th>
                    <th>окато</th>
                    <th>октмо</th>
                    <th>Долгота</th>
                    <th>Широта</th>
                  
                </template>

                <template v-slot:td >
                    <tr v-for="item in allCities" :key="item">
                        <td> {{ item.name }}</td>
                        <td> {{ item.shortName }}</td>
                        <td> {{ item.okato }}</td>
                        <td> {{ item.oktmo }}</td>
                        
                    </tr>
    
                </template>
            </table-app>

            
            <div class="text-center">
                <v-container>
                <v-row justify="center" @click="setCities(page)">
                    <v-col cols="8">
                    <v-container  class="max-width">
                        <v-pagination
                        v-model="page"
                        :length="totalPages"
                        class="my-4"
                        
                        >
                        </v-pagination>
                    </v-container>
                    </v-col>
                </v-row>
                </v-container>
            </div>
            {{ page }}
        </template>
        </app-slot>


</template>

<script>
import AppSlot from '../AppSlot.vue';
import ResetBtn from '../../UI/ResetBtn.vue';
import SearchBtn from '../../UI/SearchBtn.vue';
import bronewStore from '../../store';
export default{
    components: {AppSlot, SearchBtn,ResetBtn},
    data(){
        return{
            store: bronewStore(),
            name: '',
            shortName: '',
            okato: '',
            oktmo: '',
        }
    },
    mounted(){
        this.setCities()
       
    },
    computed:{
        allCities(){
            return this.store.cities
        },
        totalPages(){
            return Math.ceil(this.store.totalItemsCities / 30)
        }
    },
    methods:{
        setCities(page){
            this.store.setCities(`${page}`, {
                name: this.name,
                shortName: this.shortName,
                okato: this.okato,
                oktmo: this.oktmo,
            })
        }
    }
}
</script>

<style>
.inputs-wrapp{
    display: flex;
}
</style>