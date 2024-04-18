<template>

    <app-slot-vue>
        <template v-slot:title>Список водителей</template>
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
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Пол</th>
                    <th>Дата рождения</th>
                    <th>Активность</th>
                    <th>Действия</th>
                </template>
                <template v-slot:td >
                    <tr v-for="item in drivers" :key="item">
                         <td>{{ item.lastname }}</td>
                        <td>{{ item.firstname }}
                        </td>
                       
                        <td>{{ item.patronymic }}</td>
                        <td>{{ item.sex ==1?'муж': 'жен' }}</td>
                        <td>{{ item.birthDate.slice(0,10) }}</td>
                        <td>{{ item.active?'да':'нет' }} </td>
                        <td @click="toggleDetails=!toggleDetails">
                             <img src="/icons/глаз.png" alt="">
                        
                        </td>
                        
                    </tr>
                    
                        
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


export default{
    components: {AppSlotVue,TableApp, ResetBtnVue, SearchBtnVue},
    data(){
        return{
            firstname: '',
            lastname: '',
            patronymic: '',
            active: '',
            select: '',
            store: bronewStore(),
            countPages: 1,
            toggleDetails: false,
            // totalItem: '',
            pagec: '1',
            page: '',
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
        pages(page='1'){
            this.pagec = page
            console.log(page, '--')
            this.setDrivers(page)
        },      
        setDrivers(page='1'){
            console.log(page, '++')
            this.store.setDrivers(`${page}`,{
                lastname: this.lastname,
                firstname: this.firstname,
                active: this.active,
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
.detail{
    height: 200px;
    position: relative;
}
.btns-wrapp{
    width: 250px;
    display: flex;
    justify-content: space-between;
}
.inputs-wrapp{
    display: flex;
   
}

</style>

