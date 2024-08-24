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

const buytoos = [
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

    <section id="hero">
        <slider class="slider" :xl="{ slidesToShow: 1 }" slide="hero">
            <img src="https://fastly.picsum.photos/id/352/1980/600.jpg?hmac=fr9iCE0e9m8KcIKSM3HEuTjy19bLjqobtvLGUXtnFVk"
                class="img-fluid mx-auto" alt=""></img>
            <img src="https://fastly.picsum.photos/id/613/1980/600.jpg?hmac=g0mUjx6j3v9KvqyApmCLSjm1aNy0gMaIjYSI7RYGy1o"
                class="img-fluid mx-auto" alt=""></img>
            <img src="https://fastly.picsum.photos/id/177/1980/600.jpg?hmac=akw2Zi-4jiR3k8imj_Lwxi3UCXKER-32eKEbmc4uKME"
                class="img-fluid mx-auto" alt=""></img>
            <img src="https://fastly.picsum.photos/id/606/1980/600.jpg?hmac=xYgNr_ZGii_KVYgDUs0kRK56qjMirufhO67kQF4dmLQ"
                class="img-fluid mx-auto" alt=""></img>

        </slider>
    </section>

    <section id="products">
        <div class="container">
            <div class="row">
                <SectionTitle title="Os Mais vendidos" subtitle="produtos mais comprados pelos clientes" />
                <slider class="slider" slide="products">
                    <div v-for="product in products" class=" p-2">
                        <ProductCard class="" :product="product" />
                    </div>
                </slider>
            </div>
        </div>
    </section>

    <section id="features" class="bg-secondary">
        <div class="container">
            <div class="row pb-4 text-white">
                <SectionTitle title="Produtos" titleColor="white" subtitle="Melhores produtos" subtitleColor="white" />
                <div class="col-12 col-lg-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam modi
                    ipsum fugit
                    aliquid corporis similique autem officia in ut ipsam architecto magni deleniti consectetur
                    perferendis eveniet nihil libero nemo quas, quasi optio distinctio sunt! Perferendis dicta
                    accusantium quam expedita. Magni, atque quo. Sit molestiae quia deleniti dolorem esse repellat.
                </div>
                <div class="col-12 col-lg-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatem
                    officia
                    debitis consequatur ducimus ea quidem eligendi voluptates quas mollitia?
                </div>
                <div class="col-12 col-lg-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatem
                    officia
                    debitis consequatur ducimus ea quidem eligendi voluptates quas mollitia?
                </div>
            </div>
        </div>
    </section>

    <section id="buytoo">
        <div class="container">
            <div class="row">
                <SectionTitle title="Compre também" />
                <slider class="slider" slide="buytoo">
                    <div v-for="buytoo in buytoos" class=" p-2">
                        <ProductCard class="" :product="buytoo" />
                    </div>
                </slider>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
.slider {
    div {
        height: 100%;
    }
}
</style>
