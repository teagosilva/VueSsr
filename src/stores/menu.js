import { defineStore } from 'pinia';


export const useMenuStore = defineStore('menu', {
    state: () => {
        return [
            {
                name: 'Home',
                url: '/'
            },
            {
                name: 'Eletronicos',
                url: '/eletronics'
            },
            {
                name: 'Eletronicos',
                url: '/eletronics'
            },
            {
                name: 'Eletronicos',
                url: '/eletronics'
            },
            {
                name: 'Eletronicos',
                url: '/eletronics'
            },
        ]
    }
})