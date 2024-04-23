<template>

    <app-slot-vue>
        <template v-slot:title>Список водителей</template>
        <template v-slot:add>
                <add-btn>
                </add-btn>
         </template>
        <template v-slot:forms>
                <div class="inputs-wrapp">
                    <v-text-field v-model="firstname"   label="Поиск по имени"></v-text-field>
                    <v-text-field v-model="lastname"  label="Поиск по фамилии"></v-text-field>
                    <v-text-field v-model="patronymic" label="Поиск по отчеству"></v-text-field>
                    <v-select
                    v-model="select"
                        label="Выбрать"
                        :items="['Активные', 'Все']"
                    ></v-select>
                </div>
                
                <div class="btns-wrapp">
                    <reset-btn-vue  @click="resetSearch"/>
                    <search-btn-vue  @click="setDrivers()"/> 
                </div>
                
        </template>

        <template v-slot:out>
            <table-app>
                <template v-slot:tr>
                    <th v-for="th in thTable" :key="th">{{ th }}</th>
                
                </template>
                <template v-slot:td >
                    <tr v-for="(item, i) in drivers" :key="i">
                         <td>{{ item.lastname }}</td>
                        <td>{{ item.firstname }}
                        </td>
                       
                        <td>{{ item.patronymic }}</td>
                        <td>{{ item.sex?'муж': 'жен' }}</td>
                        <td>{{ item.birthDate.slice(0,10) }}</td>
                        <td> <span class="active-work">{{ item.active?'да':'нет' }}</span> </td>
                        <td>
                             <img @click="showCardDriver(item)" :src="cardItemDriver.id == item.id && toggleDetails?'/icons/hidden.png':'/icons/глаз.png'" alt="">
                        </td>
                        
                    </tr>
                        <div v-if="toggleDetails">
                                <card-driver
                                    :item="cardItemDriver"
                                    @closeCard="showCardDriver"
                                >
                  
                                </card-driver>
                        </div>

                </template>
            </table-app>

            <div class="text-center">
                <v-container>
                <v-row justify="center" @click="setDrivers(page)">
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

    </app-slot-vue>
    
</template>

<script>
import AppSlotVue from '../AppSlot.vue'
import TableApp from './TableApp.vue'
import bronewStore from '../../store'
import ResetBtnVue from '../../UI/ResetBtn.vue'
import SearchBtnVue from '../../UI/SearchBtn.vue'
import CardDriver from '../../UI/CardDriver.vue'
import AddBtn from '../AddBtn.vue'


export default{
    components: {AppSlotVue,TableApp, ResetBtnVue, SearchBtnVue, CardDriver, AddBtn},
    data(){
        return{
            firstname: '',
            lastname: '',
            patronymic: '',
            thTable: ['Фамилия', 'Имя','Отчество','Пол','Дата рождения','Активность','Действие'],
            select: '',
            store: bronewStore(),
            countPages: 1,
            toggleDetails: false,
            pagec: '1',
            page: '',
            cardItemDriver: [],
        }
    },
    mounted(){
        this.setDrivers()
        
    },
    computed:{
        drivers(){
            return this.store.getDrivers
        },
        totalPages(){
            return Math.ceil(this.store.getTotalItems / 30)
        },
    },
    methods:{
        showCardDriver(item){
            this.toggleDetails = !this.toggleDetails
            this.cardItemDriver = JSON.parse(JSON.stringify(item))
        },
        pages(page='1'){
            this.pagec = page
            console.log(page, '--')
            this.setDrivers(page)
        },      
        setDrivers(page='1'){
            this.store.setDrivers(`${page}`,{
                lastname: this.lastname,
                firstname: this.firstname,
                patronymic: this.patronymic,
            })
        },
        resetSearch(){
            this.lastname = ''
            this.firstname = ''
            this.patronymic = ''
        }
    }


}
</script>

<style lang="scss" scoped>
.active-work{
    padding: 5px;
    background-color: rgb(47, 255, 89);
}
.detail{
    height: 200px;
    position: relative;
}
.btns-wrapp{
    width: 250px;
}
.inputs-wrapp{
    display: flex;
   
}

</style>

