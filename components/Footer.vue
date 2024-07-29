<script setup>
const menu = useState('menu')
</script>

<template>
  <footer class="bg-primary py-4 mt-4 text-white">
    <div class="container">
      <div class="row ">

        <div class="col-2 text-center d-flex align-items-center">
          <img src="@/images/marvel.png" class="logo img-fluid" alt="">
        </div>

        <div class="col">
          <ul class="list-group-flush">
            <li class="list-group-item mb-4">Menu</li>
            <li v-for="(item, index) in menu" class="list-group-item">
              <NuxtLink class=" link-secondary nav-link active" :to="item.url"> {{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col">
          <ul class="list-group-flush">
            <li class="list-group-item mb-4">Menu</li>
            <li v-for="(item, index) in menu" class="list-group-item">
              <NuxtLink class=" link-secondary nav-link active" :to="item.url"> {{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col">
          <ul class="list-group-flush">
            <li class="list-group-item mb-4">Menu</li>
            <li v-for="(item, index) in menu" class="list-group-item">
              <NuxtLink class=" link-secondary nav-link active" :to="item.url"> {{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped></style>