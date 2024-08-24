<script lang="js" setup>
import { faker } from '@faker-js/faker';

const department = [
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    },
    {
        name: faker.commerce.department(),
    }
]

console.log(department);


const products = [
        {
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription()
        },
        {
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription()
        },
        {
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription()
        },
        {
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription()
        },
    {
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription()
    },
    {
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription()
    }
]


</script>

<template>
    <slider :xl="{ slidesToShow: 1 }" slide="hero">
        <img src="https://fastly.picsum.photos/id/352/1980/600.jpg?hmac=fr9iCE0e9m8KcIKSM3HEuTjy19bLjqobtvLGUXtnFVk"
            class="img-fluid mx-auto" alt=""></img>
        <img src="https://fastly.picsum.photos/id/613/1980/600.jpg?hmac=g0mUjx6j3v9KvqyApmCLSjm1aNy0gMaIjYSI7RYGy1o"
            class="img-fluid mx-auto" alt=""></img>
        <img src="https://fastly.picsum.photos/id/177/1980/600.jpg?hmac=akw2Zi-4jiR3k8imj_Lwxi3UCXKER-32eKEbmc4uKME"
            class="img-fluid mx-auto" alt=""></img>
        <img src="https://fastly.picsum.photos/id/606/1980/600.jpg?hmac=xYgNr_ZGii_KVYgDUs0kRK56qjMirufhO67kQF4dmLQ"
            class="img-fluid mx-auto" alt=""></img>

    </slider>

    <div class="container">
        <div class="row">
            <SectionTitle title="Produtos" subtitle="Melhores produtos" />
            <slider slide="products">
                <div v-for="product in products" class=" p-2">
                    <ProductCard class="" :product="product" />
                </div>
            </slider>
        </div>
    </div>

</template>

<style lang="scss">
.products {
    div {
        height: 100%;
    }
}
</style>
