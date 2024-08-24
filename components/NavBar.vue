<script lang="js" setup>
const menu = useMenuStore();
const menuList = menu.$state;
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
                    <div v-for="item in menuList">
                        <li v-if="item.subcategories.length" class=" dropdown nav-item">
                            <a class=" dropdown-toggle link-white nav-link active" data-bs-toggle="dropdown">
                                {{ item.name }}
                                <ul class="dropdown-menu">
                                    <li v-for="subcat in item.subcategories">
                                        <NuxtLink
                                            class="dropdown-item" :to="subcat.url"> {{ subcat.name }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </a>
                        </li>
                        <li v-else class="dropdown nav-item">
                            <NuxtLink :class="{ 'dropdown-toggle': item.subcategories.length }"
                                class="link-white nav-link active" :to="item.url"> {{ item.name }}</NuxtLink>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>

