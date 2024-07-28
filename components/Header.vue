<script>

</script>


<template>
  <header id="header" class="d-none d-lg-block py-4 ">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-2">
          <img src="@/images/marvel.png" class="logo" alt="">
        </div>

        <div class="col">
          <form class="d-flex" role="search">
            <input class="form-control bg-body-tertiary" type="search" placeholder="Search" aria-label="Search">
          </form>
        </div>
        <div class="col-2">
          <div class="row">
            <div class="col-6 fs-6">
              <a href=""><span class="icon-user-plus fs-4"></span> Login</a>
            </div>
            <div class="col-6 fs-6">
              <a href="#"><span class="icon-cart fs-4"></span></a>
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