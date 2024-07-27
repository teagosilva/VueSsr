<script setup>

</script>


<template>
  <header id="header" class="d-none d-lg-block">
    <div class="container">
      <div class="row py-4 align-items-center">

        <div class="col-2 text-center">
          <img src="@/images/logo.png" class="logo" alt="">
        </div>

        <div class="col">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>

        <div class="col-3">
          <div class="row">
            <div class="col-6">
              <span class="icon-user fs-3"></span>
              Login
            </div>
            <div class="col-3">
              <span class="icon-cart fs-3"></span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </header>
</template>


<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 150px;
}
</style>