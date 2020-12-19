<template>
  <div class="home" style="height: 100%">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
              <!-- MOBILE -->

          <v-img
            :src="require('../assets/logo3.png')"
            class="my-3"
            contain
            height="100"
            v-if="$vuetify.breakpoint.mobile == true"
          />
              <!-- DESKTOP -->

          <v-img
            :src="require('../assets/logo3.png')"
            class="my-3"
            contain
            height="200"
            v-if="$vuetify.breakpoint.mobile == false"
          />
        </v-col>
    <!-- DESKTOP -->

        <v-col class="mb-4" v-if="$vuetify.breakpoint.mobile == false">
          <h1 class="display-2 font-weight-bold mb-3">Vigolo Maquinarias</h1>
          <br />

          <p class="subheading font-weight-regular">
            VIG-MAQ comenzó su labor en el año 1990. Dedicados a la
            comercialización de máquinas de carpintería en estado nuevas o
            usadas, nacionales e importadas. Brindamos un servicio personalizado
            e integral, asesorándo y adecuándonos a la necesidad de cada cliente
            en particular.
          </p>
          <p class="subheading font-weight-regular">
            Disponemos de un taller propio, en dónde realizamos la reparación de
            las máquinas usadas, las cuales una vez reparadas poseen garantía de
            funcionamiento.
          </p>
          <p class="subheading font-weight-regular">
            Contamos con más de 30 años de experiencia en el mercado.
          </p>
          <p class="subheading font-weight-regular"></p>
        </v-col>
    <!-- MOBILE -->

        <v-col class="mb-4" v-if="$vuetify.breakpoint.mobile == true">
          <h1 class="display-1 font-weight-bold mb-1">Vigolo Maquinarias</h1>
          <br />

          <p class="subheading font-weight-regular" style="font-size: small">
            VIG-MAQ comenzó su labor en el año 1990. Dedicados a la
            comercialización de máquinas de carpintería en estado nuevas o
            usadas, nacionales e importadas. Brindamos un servicio personalizado
            e integral, asesorándo y adecuándonos a la necesidad de cada cliente
            en particular.
          </p>
          <p class="subheading font-weight-regular" style="font-size: small">
            Disponemos de un taller propio, en dónde realizamos la reparación de
            las máquinas usadas, las cuales una vez reparadas poseen garantía de
            funcionamiento.
          </p>
          <p class="subheading font-weight-regular" style="font-size: small">
            Contamos con más de 30 años de experiencia en el mercado.
          </p>
          <p class="subheading font-weight-regular"></p>
          <br /><br />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
