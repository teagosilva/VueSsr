import { defineStore } from 'pinia';


export const useMenuStore = defineStore('menu', {
    state: () => {
            return [
                {
                    "name": "Kids",
                    "url": "/kids",
                    "subcategories": [
                        {
                            "name": "Clothing",
                            "url": "/clothing"
                        }
                    ]
                },
                {
                    "name": "Toys",
                    "url": "/toys",
                    "subcategories": []
                },
                {
                    "name": "Movies",
                    "url": "/movies",
                    "subcategories": []
                },
                {
                    "name": "Health",
                    "url": "/health",
                    "subcategories": []
                },
                {
                    "name": "Clothing",
                    "url": "/clothing",
                    "subcategories": []
                },
                {
                    "name": "Computers",
                    "url": "/computers",
                    "subcategories": []
                },
                {
                    "name": "Beauty",
                    "url": "/beauty",
                    "subcategories": []
                }
            ]

    }
})