<script lang="js" setup>
const menu = useState('menu', () => {
    return [
        {
            "name": "Inicio",
            "url": "/"
        },
        {
            "name": "Personagens",
            "url": "/characters"
        },
        {
            "name": "Comics",
            "url": "/comics"
        },
        {
            "name": "Criadores",
            "url": "/creators"
        },
        {
            "name": "Eventos",
            "url": "/eventos"
        },
        {
            "name": "Series",
            "url": "/series"
        },
        {
            "name": "Quadrinhos",
            "url": "/comicbook"
        },
    ]
})
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="item in menu">
                        <NuxtLink class=" link-secondary nav-link active" :to="item.url"> {{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>