<template>

    <section>
        <app-slot>
            <template v-slot:title>
                Список Направлений</template>
            
            <template v-slot:add>
                <add-btn>
                </add-btn>
            </template>
            <template v-slot:forms >
                <div class="inputsWrapp">
                    <v-text-field   v-model="name"  label="Поиск по Наименованию"></v-text-field>
                    <v-text-field   v-model="DirectionTo" label="Поиск по Сокращению"></v-text-field>
                </div>
                <div class="btnWrapp">
                    <reset-btn-vue  @click="resetSearch"/>
                    <search-btn-vue @click="setDirections"/>  
                </div>
            </template>
            <template v-slot:out>
                <table-app>
                    <template v-slot:tr>
                        <th v-for="th in thTable" :key="th">{{ th }}</th>
                    </template>
                    <template v-slot:td >
                        <tr v-for="item in directions" :key="item"  show-expand>
                                <td>{{ item.name }}</td>
                                <td>{{ item.name }}</td>
                                <td><img src="/icons/глаз.png" alt=""></td>
                            
                            </tr>
                    </template>
                </table-app>

                <div class="text-center">
                <v-container>
                <v-row justify="center" @click="setDirections(page)">
                    <v-col cols="8">
                    <v-container  class="max-width">
                        <v-pagination
                        v-model="page"
                        :length="totalDir"
                        class="my-4"
                        
                        >
                        </v-pagination>
                    </v-container>
                    </v-col>
                </v-row>
                </v-container>
            </div>
            
            <!--  -->
           
            </template>
        </app-slot>
    </section>
        

</template>

<script>
import AppSlot from '../components/AppSlot.vue'
import ResetBtnVue from '../UI/ResetBtn.vue'
import SearchBtnVue from '../UI/SearchBtn.vue'
import TableApp from './TableApp.vue'
import bronewStore from '../store/store'
import AddBtn from '../components/AddBtn.vue'


export default{
    components: {ResetBtnVue, SearchBtnVue, AppSlot,TableApp, AddBtn},
    data(){
        return{
            store: bronewStore(),
            name: '',
            DirectionTo: '',
            page: '',
            thTable: ['Наименование', 'Сокращение', 'Действие']
        }
    },
    mounted(){
        this.setDirections()
        // this.setDirect()
    },
    computed:{
        directions(){
            return this.store.getDirections
        },
        totalDir(){
            return Math.ceil(this.store.getTotalDir / 30)
        },
        getRoutes(){
            return this.store.getRoutes
        }
    },
    methods: {
        resetSearch(){
            this.name = null
            this.DirectionTo = null
        },
        setDirections(){
            this.store.getDir('1', {name: this.name })
        }
       
    }
    
}
</script>

<style lang="scss" scoped>

.inputsWrapp{
    display: flex;
}
.btnWrapp{
    width: max-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    text-align: right;
    top: 0;
}
form{
    display: block;
    position: relative;
    width: 100%;
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