<template>
    <app-slot>
        <template v-slot:title>
           Список пассажиров
        </template>
        <template v-slot:add>
                <add-btn>
                </add-btn>
         </template>

        <template v-slot:forms>
            <div class="inputs-wrapp">
                    <v-text-field v-model="fio"   label="Поиск по ФИО"></v-text-field>
                    <v-text-field v-model="document"  label="Поиск по серии или номеру документа"></v-text-field>
                    <v-text-field v-model="phone" label="Поиск по телефону"></v-text-field>
                
                </div>
                
                <div class="btns-wrapp">
                    <reset-btn  @click="resetSearch"/>
                    <search-btn  @click="setPassenger"/> 
                </div>
        </template>

        <template v-slot:out>
            <table-app>
                <template v-slot:tr>
                    <th v-for="th in thTable" :key="th">
                        {{ th }}
                    </th>                    
                </template>

                <template v-slot:td >
                    <tr v-for="item in passengers" :key="item">
                        <td> {{ item.lastname }}</td>
                        <td>{{ item.firstname }}</td>
                        <td>{{ item.patronymic }}</td> 
                        <td> {{ item.phone }}</td>
                        <td>{{ item.email??'отсутствует' }}</td> 
                        <td>{{ item.sex?'муж': 'жен' }}</td> 
                        <td> 
                            <p v-for="item in item.documents"  :key="item">
                                {{ item.serial }}
                                {{ item.number }}
                            </p>
                            
                        </td>
                        <td>{{ item.birthdate.slice(0,10) }}</td> 
                    </tr>
    
                </template>
            </table-app>

            
            <div class="text-center">
                <v-container>
                <v-row justify="center" @click="setPassenger(page)">
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
        </template>

    </app-slot>
</template>

<script>
import TableApp from './TableApp.vue';
import AppSlot from '../AppSlot.vue';
import bronewStore from '../../store';
import ResetBtn from '../../UI/ResetBtn.vue';
import SearchBtn from '../../UI/SearchBtn.vue';
import AddBtn from '../AddBtn.vue';

export default{
    components: {AppSlot, TableApp, ResetBtn,SearchBtn, AddBtn},
    data(){
        return{
            fio:'',
            document: '',
            phone: '',
            page: '',
            store: bronewStore(),
            thTable: ['Фамилия', 'Имя','Отчество','Телефон','	E-mail','Серия и номер паспорта','Дата рождения',],

        }
    },
    mounted(){
        this.setPassenger()
    },
    computed: {
        passengers(){
            return this.store.getPassengers
        },
        totalPages(){
            return Math.ceil(this.store.totalItemsPassengers / 30)
        },
    },
    methods:{
        setPassenger(page='1'){
            
            this.store.setPassengers(`${page}`, 
            {
                fio:this.fio,
                document: this.document,
                phone: this.phone,
            }
            )
        },
        resetSearch(){
            this.fio=''
            this.document='',
            this.phone =''
        }
    }
}
</script>

<style>
.inputs-wrapp{
    display: flex;
    
}
.btns-wrapp{
    
    gap: 30px;
}
</style>