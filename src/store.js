import { defineStore } from "pinia";
import axios from "axios";



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
         setDirections(page='1', name=''){
            const token = localStorage.getItem('token')
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/ld+json',
                'Content-Type': 'application/json; charset=utf-8',
            };
          
            axios.get('https://core.dev.bronew.ru/api/dictionary/directions'
             + `?page=1`, 
            { headers, params: {
                name: name
            } })
                .then(response => {
                    const data = response.data;
                    const directions = data['hydra:member'];
                    const totalItems = data['hydra:totalItems'];
                    const xJwtToken = response.headers['X-Jwt-Token']
                    console.log(data)
                    this.totalItemsDirections = totalItems
                    console.log(response.headers['X-Jwt-Token'])
                
                    
                    this.directions = directions
                   
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
            },
         setDrivers(page='1', query={}){
            console.log(page,'страница')
            console.log(query.firstname)
            const token = localStorage.getItem('token')
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/ld+json',
                'Content-Type': 'application/json; charset=utf-8',
            };
            
            axios.get('https://core.dev.bronew.ru/api/dictionary/drivers' 
             + `?page=${page}`
             , { headers,
                 params: {
                    firstname: query.firstname,
                    lastname: query.lastname,
                    patronymic: query.patronymic,
                }})
                .then(response => {
                    const data = response.data;
                    const drivers = data['hydra:member'];
                    const totalItems = data['hydra:totalItems'];
                    const xJwtToken = response.headers['X-Jwt-Token']
                    console.log('data - ',data)
                    // console.log(drivers)
                    console.log(response.headers['X-Jwt-Token'])
                    
                    this.drivers = drivers
                    this.totalItemsDriver =  totalItems
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
            },
         setPassengers(page='1', query={}){
           
            console.log(page, '---')
            const token = localStorage.getItem('token')
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/ld+json',
                'Content-Type': 'application/json; charset=utf-8',
            };
            axios.get('https://core.dev.bronew.ru/api/people/people' 
             + `?smart-search?page=${page}`
             , { headers,
                 params:{
                        lastname: query.fio,
                        document: query.document,
                        phone: query.phone,
                    }
                })
                .then(response => {
                    const data = response.data;
                    const passengers = data['hydra:member'];
                    const totalItems = data['hydra:totalItems'];
                    console.log(data['hydra:view'].id)
                    const xJwtToken = response.headers['X-Jwt-Token']
                    console.log('data - ',data)
                    // console.log(drivers)
                    console.log(response.headers['X-Jwt-Token'])
                    
                    this.passengers = passengers
                    this.totalItemsPassengers =  totalItems
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
            },


         setCities(page='1', query={}){
            const token = localStorage.getItem('token')
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/ld+json',
                "Cache-Control": "no-cache",
                'Content-Type': 'application/json; charset=utf-8',
            };
            axios.get('https://svida.routeam.ru/api'
             , { headers, withCredentials: true 
                //  params:{
                //     name: query.name,
                //     shortName: query.shortName,
                //     okato: query.okato,
                //     oktmo: query.oktmo,
                //     }
                })
                .then(response => {
                    const data = response.data;
                    const cities = data['hydra:member'];
                    const totalItems = data['hydra:totalItems'];
                
                    // const xJwtToken = response.headers['X-Jwt-Token']
                    console.log('data - ',data)
                    // console.log(drivers)
                    // console.log(response.headers['X-Jwt-Token'])
                    
                    this.cities = cities
                    this.totalItemsCities =  totalItems
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
            },

         setUserName() {
                const token = localStorage.getItem('token')
                axios.get('https://core.dev.bronew.ru/api/users/current', {
                  headers: {
                    'Authorization': `Bearer ${token}`,
                  },
                }).then(response=>{
                    const data =  response.data
                    // console.log(data)
                    this.userName =  data.username
                })
          
                
        },
    }
})
export default bronewStore;