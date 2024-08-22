<script lang="js" setup>
import { faker } from '@faker-js/faker';

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
        }
]


</script>

<template>
    <slider slide="hero">
        <img src="https://fastly.picsum.photos/id/82/1700/730.jpg?hmac=xtw3Oiin_Lf7NItH3Fj8xySTMVws0EhqvIHvgdSfJYQ"
            class="img-fluid mx-auto" alt=""></img>
        <img src="https://fastly.picsum.photos/id/82/1700/730.jpg?hmac=xtw3Oiin_Lf7NItH3Fj8xySTMVws0EhqvIHvgdSfJYQ"
            class="img-fluid mx-auto" alt=""></img>
        <img src="https://fastly.picsum.photos/id/82/1700/730.jpg?hmac=xtw3Oiin_Lf7NItH3Fj8xySTMVws0EhqvIHvgdSfJYQ"
            class="img-fluid mx-auto" alt=""></img>

    </slider>

    <div class="container">
        <SectionTitle title="Produtos" subtitle="Melhores produtos" />
        <div class="row">
                <slider slide="products">
                    <div v-for="product in products" class="col-3 border border-danger">
                        <ProductCard :product="product" />
                    </div>
                </slider>
        </div>
    </div>

</template>
