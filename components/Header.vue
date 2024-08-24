<script setup>
</script>

<template>
  <div>
    <header class="bg-primary py-2 d-none d-lg-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-2 d-flex">
            <NuxtLink class="link-white nav-link active" to="/">
              <img src="@/images/logo.png" alt="" class="img-fluid logo" />
            </NuxtLink>
          </div>
          <div class="col">
            <form action="">
              <input type="text" class="form-control">
            </form>
          </div>
          <div class="col-2 align-items-center justify-content-center d-flex text-white">
            <i class="bi bi-person-circle fs-3 me-3"></i>
            <NuxtLink class="nav-link" to="/login"> Login</NuxtLink>
          </div>
          <div class="col-1 text-white">
            <i class="bi bi-cart2 fs-3"></i>
          </div>
        </div>
        <div class="row">
          <NavBar />
        </div>
      </div>
    </header>
  </div>
</template>

<style>
.logo {
  max-width: 150px;
}
</style>
