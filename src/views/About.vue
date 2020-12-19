<template>
  <div class="home" style="width: 100%; height: 150%">
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
    <!-- MOBILE -->

        <v-col class="mb-4" v-if="$vuetify.breakpoint.mobile == true">
          <h1 class="display-1 font-weight-bold mb-1">Vigolo Maquinarias</h1>
          <br />

          <p class="subheading font-weight-regular" style="font-size: small">
            Teléfono: (0223) 4859012
          </p>
          <p class="subheading font-weight-regular" style="font-size: small">
            Teléfono Móvil: +54 223 4224375
          </p>
          <p class="subheading font-weight-regular" style="font-size: small">
            Fortunato de la Plaza 2644 - Mar del Plata
          </p>
          <p class="subheading font-weight-regular" style="font-size: small">
            E-mail: ventas@vigolomaquinarias.com
          </p>
          <br /><br />
        </v-col>

            <!-- DESKTOP -->


        <v-col class="mb-4" v-if="$vuetify.breakpoint.mobile == false">
          <h1 class="display-2 font-weight-bold mb-3">Vigolo Maquinarias</h1>
          <br />

          <p class="subheading font-weight-regular">Teléfono: (0223) 4859012</p>
          <p class="subheading font-weight-regular">
            Teléfono Móvil: +54 223 4224375
          </p>
          <p class="subheading font-weight-regular">
            Fortunato de la Plaza 2644 - Mar del Plata
          </p>
          <p class="subheading font-weight-regular">
            E-mail: ventas@vigolomaquinarias.com
          </p>
          <br /><br />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
