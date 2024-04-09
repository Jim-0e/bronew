<template>

    <section>
        <app-slot>
            <template v-slot:title><h2>Список Направлений</h2></template>
            <template v-slot:forms>
                <div class="inputsWrapp">
                    <v-text-field   v-model="DirectionFrom"  label="Поиск по Наименованию"></v-text-field>
                    <v-text-field   v-model="DirectionTo" label="Поиск по Сокращению"></v-text-field>
                </div>
                <div class="btnWrapp">
                    <reset-btn-vue  @click="resetSearch"/>
                    <search-btn-vue @click="searchPass"/>  
                </div>
            </template>
            <template v-slot:out>
                <p>Направления</p>
            </template>
        </app-slot>
    </section>
        

</template>

<script>
import AppSlot from '../AppSlot.vue'
import ResetBtnVue from '../../UI/ResetBtn.vue'
import SearchBtnVue from '../../UI/SearchBtn.vue'

export default{
    components: {ResetBtnVue, SearchBtnVue, AppSlot},
    data(){
        return{
            DirectionFrom: '',
            DirectionTo: '',
            arr: [],
        }
    },
    methods: {
        resetSearch(){
            this.DirectionFrom = null
            this.DirectionTo = null
        },
        async searchPass(){
            const responce = fetch("https://core.t2.routeam.ru/api/dictionary/directions")
            this.arr = await responce.json
            console.log(this.arr)
        }
    }
    
}
</script>

<style scoped>
.inputsWrapp{
    display: flex;
}
.btnWrapp{
    width: max-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    position: relative;
    /* left: 30%; */
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