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

console.log(products);


</script>

<template>
    <Slider />
    <div class="container">
        <SectionTitle title="Produtos" subtitle="Melhores produtos" />
        <div class="row">
            <div v-for="product in products" class="col-3 border border-danger">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>

</template>
