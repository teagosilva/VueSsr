<script setup lang="js">
</script>

<template>
  <section id="home" class="">

    <div class="container">
      <div class="row">

        <div class="col-12">
          <SectionTitle title="Avengers" />
          <div class="row">
            <div v-for="index in [1,2,3,4,5,6]" class="col-2">
              <ProductCard />
            </div>
          </div>
        </div>

        <div class="col-12">
          <SectionTitle title="Alguma historia que ngm liga" />
          Lorem ipsum dolor sit, amet consectet ur adipisicing elit. Aperiam itaque temporibus ullam, distinctio
          doloribus iste maiores fugiat laboriosam ratione quam cupiditate accusamus officia consequatur minus est ab
          minima fuga perspiciatis sed atque! Quibusdam earum in dignissimos quod, totam suscipit corrupti sit alias
          obcaecati aperiam deleniti minima esse sunt at omnis velit voluptas numquam ut, corporis odio. Deserunt,
          adipisci! Dolorem esse assumenda pariatur eaque reprehenderit culpa sed placeat beatae nostrum provident hic,
          iure quasi vitae velit molestias illo accusamus excepturi nisi vel quis animi. Doloremque in mollitia optio
          atque, dolorum deleniti ipsa nihil, reprehenderit illum ex, quis voluptas eligendi molestias nisi quas
          architecto nemo quia similique? Provident rem rerum, quia quis nostrum, minus, voluptatum amet eaque officiis
          fugit reprehenderit doloribus id sunt. Nemo, incidunt, nam ipsum neque magnam odio sunt facere soluta,
          veritatis ab fuga consequatur nihil animi consequuntur distinctio labore quas vel quos repudiandae quia
          aspernatur eos commodi! Totam, ipsam et. Ipsa, dicta fugit! Veniam, maxime. Quisquam dolorem earum incidunt,
          eaque iusto excepturi magnam ratione natus sit cumque aspernatur ullam modi porro quibusdam aperiam repellat
          fugit, corrupti enim ab, praesentium minima sed similique. Cupiditate tempora voluptatem itaque laboriosam,
          quidem totam eum maxime doloribus iure, voluptate aspernatur a sit blanditiis delectus!
        </div>

        <div class="col-12">
          <SectionTitle title="Guardiões da galaxia" />
          <div class="row">
            <div v-for="index in [1, 2, 3]" class="col-4">
              <ProductCard />
            </div>
          </div>
        </div>

        <div class="col-12">
          <SectionTitle title="Teste" />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam itaque temporibus ullam, distinctio
          doloribus
          iste maiores fugiat laboriosam ratione quam cupiditate accusamus officia consequatur minus est ab minima fuga
          perspiciatis sed atque! Quibusdam earum in dignissimos quod, totam suscipit corrupti sit alias obcaecati
          aperiam
          deleniti minima esse sunt at omnis velit voluptas numquam ut, corporis odio. Deserunt, adipisci! Dolorem esse
          assumenda pariatur eaque reprehenderit culpa sed placeat beatae nostrum provident hic, iure quasi vitae velit
          molestias illo accusamus excepturi nisi vel quis animi. Doloremque in mollitia optio atque, dolorum deleniti
          ipsa nihil, reprehenderit illum ex, quis voluptas eligendi molestias nisi quas architecto nemo quia similique?
          Provident rem rerum, quia quis nostrum, minus, voluptatum amet eaque officiis fugit reprehenderit doloribus id
          sunt. Nemo, incidunt, nam ipsum neque magnam odio sunt facere soluta, veritatis ab fuga consequatur nihil
          animi
          consequuntur distinctio labore quas vel quos repudiandae quia aspernatur eos commodi! Totam, ipsam et. Ipsa,
          dicta fugit! Veniam, maxime. Quisquam dolorem earum incidunt, eaque iusto excepturi magnam ratione natus sit
          cumque aspernatur ullam modi porro quibusdam aperiam repellat fugit, corrupti enim ab, praesentium minima sed
          similique. Cupiditate tempora voluptatem itaque laboriosam, quidem totam eum maxime doloribus iure, voluptate
          aspernatur a sit blanditiis delectus!
        </div>
      </div>
    </div>
  </section>

</template>


<style lang="scss" scoped>
</style>