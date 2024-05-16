import { defineStore } from "pinia";
import axios from "axios";
import apiResponce from "../api/api";

const bronewStore = defineStore('storeBronew',{
    state: ()=>{
        return {
            token: localStorage.getItem('token'),
            directions: [],
            drivers: [],
            passengers: [],
            cities: [],
            totalItemsDriver: 1,
            totalItemsDirections: 1,
            totalItemsPassengers: 1,
            totalItemsCities: 1,
            userName: null,
        }
    },
    getters: {
        isAuth(){
            return this.token
        },
        getTotalItems(){
            return this.totalItemsDriver
        },
        getTotalDir(){
            return this.totalItemsDirections
        },
        getTotalCities(){
            return this.totalItemsCities
        },
        getDirections(){
            return this.directions
        },
        getDrivers(){
            return this.drivers
        },
        getPassengers(){
            return this.passengers
        },
        getCities(){
            return this.cities
        }
    },
    actions: {
        async getDir(page, objParams){
           const { data, totalItems } = await  apiResponce.getDirect(page, objParams) 
           this.directions = data
           this.totalItemsDirections = totalItems
        },

        async getApiDrivers(page, objParams){
            const {data, totalItems} = await apiResponce.getDrivers(page, objParams)
            this.drivers = data
            this.totalItemsDriver = totalItems
        },
        async getApiPassengers(page, objParams){
            const {data, totalItems} = await apiResponce.getPassengers(page, objParams)
            this.passengers = data
            this.totalItemsPassengers = totalItems
        
        },
        async getApiCities(objParams){
            const {data, totalItems} = await apiResponce.getCities(objParams)
            this.cities = data
            this.totalItemsCities = totalItems
        },
       
         setUserName() {
                const token = localStorage.getItem('token')
                axios.get('https://core.dev.bronew.ru/api/users/current', {
                  headers: {
                    'Authorization': `Bearer ${token}`,
                  },
                }).then(response=>{
                    const data = response.data
                    this.userName = data.username
                })                
        },
    }
})
export default bronewStore;