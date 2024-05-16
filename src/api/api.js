import axios from 'axios';

const apiUrl = import.meta.env.VITE_APP_URL_REF
const apiUrlCities = import.meta.env.VITE_APP_URL_CITIES
const token = localStorage.getItem('token')


const api = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    'Authorization': `Bearer ${token}`,
     'Accept': 'application/ld+json',
     'Content-Type': 'application/json; charset=utf-8',
  },
});


async function axiosRequest(url, page='1', objParams){
      return await api.get(`${apiUrl}${url}`
      + `?page=${page}`, 
     {  
      params: {
        ...objParams
      }
     })
      .then(response => {
             const data = response.data['hydra:member'];
             const totalItems = data['hydra:totalItems']
             return {data, totalItems}
      })
}



async function axiosRequestCities(objParams){
      return await api.get(`${apiUrlCities}`, 
      {  
        params: {
          ...objParams
        }
      })
     .then(response => {
         const data = response.data['hydra:member'];
         const totalItems = data['hydra:totalItems']
         return {data, totalItems}
     })
}

async function checkRequest(url, page, objParams, message){
      try{
          return await axiosRequest(url, page, objParams, message)
      }catch(err){
          console.error(`Ошибка при запросе к api ${message} - ${err}`)
      }
}


const apiResponce = {
      async getDirect(page, objParams){
            return await checkRequest('dictionary/directions', page, objParams, 'направлениям') 
      },

      async getDrivers(page, objParams){
        return await checkRequest('dictionary/drivers', page, objParams, 'водетелей')
      },

      async getPassengers(page, objParams){
        return await checkRequest('people/people?smart-search', page, objParams, 'пассажиров')
      },

      async getCities(objParams){
        try{
            return await axiosRequestCities(objParams)
        }catch(err){
          console.error('Ошибка при запросе к api городам',err)
        }
      },
}

export default apiResponce