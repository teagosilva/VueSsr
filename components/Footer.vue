<script setup>
const menu = useState('menu')
</script>

<template>
  <footer class="bg-primary py-4 mt-4 text-white">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-2 text-center">
          <img src="@/images/marvel.png" class="logo img-fluid" alt="">
        </div>

        <div class="col">
          <ul class="list-group-flush">
            <li class="list-group-item mb-4">Menu</li>
            <li v-for="(item, index) in menu" class="list-group-item">{{item.name}}</li>
          </ul>
        </div>

        <div class="col">
          <ul class="list-group-flush">
            <li class="list-group-item mb-4">Another Shit</li>
            <li class="list-group-item">another Shit 1</li>
            <li class="list-group-item">another Shit 2</li>
            <li class="list-group-item">another Shit 3</li>
            <li class="list-group-item">another Shit 4</li>
          </ul>
        </div>

        <div class="col">
          <ul class="list-group-flush">
            <li class="list-group-item mb-4">Another Shit</li>
            <li class="list-group-item">Another Shit 1</li>
            <li class="list-group-item">Another Shit 2</li>
            <li class="list-group-item">Another Shit 3</li>
            <li class="list-group-item">Another Shit 4</li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped></style>