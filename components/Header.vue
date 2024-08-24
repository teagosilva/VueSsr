<script setup>
</script>

<template>
  <div>
    <header class="bg-primary py-2 d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-2 d-flex">
            <NuxtLink class="link-white nav-]link active" to="/">
              <img src="@/images/logo.png" alt="" class="img-fluid logo" />
            </NuxtLink>
          </div>
          <div class="col-8">
            <form action="">
              <input type="text" class="form-control ms-3 mt-2">
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <NavBar />
          </div>
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
