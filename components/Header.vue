<script>

</script>


<template>
  <header id="header" class="d-none d-lg-block py-4 ">
    <div class="container">
      <div class="row align-items-center">

        <div class="col">
          <NuxtLink class=" link-white nav-link active" to="/"><img src="@/images/marvel.png" class="logo"
              alt=""></NuxtLink>

        </div>

        <div class="col-9">
          <form class="d-flex" role="search">
            <input class="form-control bg-body-tertiary" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>
        <div class="col d-flex justify-content-center">
          <a class="align-items-center d-flex " href="">
            <span class="icon-user-plus fs-2 me-2"></span>
            Login
          </a>
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