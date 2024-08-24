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
    <!-- <slider slide="hero">
        <img src="https://fastly.picsum.photos/id/82/1700/730.jpg?hmac=xtw3Oiin_Lf7NItH3Fj8xySTMVws0EhqvIHvgdSfJYQ"
            class="img-fluid mx-auto" alt=""></img>
        <img src="https://fastly.picsum.photos/id/82/1700/730.jpg?hmac=xtw3Oiin_Lf7NItH3Fj8xySTMVws0EhqvIHvgdSfJYQ"
            class="img-fluid mx-auto" alt=""></img>
        <img src="https://fastly.picsum.photos/id/82/1700/730.jpg?hmac=xtw3Oiin_Lf7NItH3Fj8xySTMVws0EhqvIHvgdSfJYQ"
            class="img-fluid mx-auto" alt=""></img>

    </slider> -->

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
