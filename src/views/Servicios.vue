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
              Venta de Máquinas Nuevas y Usadas
            </p>
            <p class="subheading font-weight-regular" style="font-size: small">
              Adquisición de Máquinas Usadas
            </p>
            <p class="subheading font-weight-regular" style="font-size: small">
              Garantía y Servicio Post-Venta
            </p>
            <p class="subheading font-weight-regular" style="font-size: small">
              Reparación de Máquinarias
            </p>
            <p class="subheading font-weight-regular" style="font-size: small">
              Tasación de Máquinarias
            </p>
          
          <br /><br />
        </v-col>
                        <!-- DESKTOP -->

        <v-col class="mb-4" v-if="$vuetify.breakpoint.mobile == false">
          <h1 class="display-2 font-weight-bold mb-3">Vigolo Maquinarias</h1>
          <br />
          
            <p class="subheading font-weight-regular">
              Venta de Máquinas Nuevas y Usadas
            </p>
            <p class="subheading font-weight-regular">
              Adquisición de Máquinas Usadas
            </p>
            <p class="subheading font-weight-regular">
              Garantía y Servicio Post-Venta
            </p>
            <p class="subheading font-weight-regular">
              Reparación de Máquinarias
            </p>
            <p class="subheading font-weight-regular">
              Tasación de Máquinarias
            </p>
         
          <br /><br />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Servicios"
};
</script>
