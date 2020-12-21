<template>
  <div class="home" style="width: 100%; height: 200%">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <!-- MOBILE 

          <v-img
            :src="require('../assets/logo3.png')"
            class="my-3"
            contain
            height="100"
            v-if="$vuetify.breakpoint.mobile == true"
          />-->
          <!-- DESKTOP

          <v-img
            :src="require('../assets/logo3.png')"
            class="my-3"
            contain
            height="200"
            v-if="$vuetify.breakpoint.mobile == false"
          />
        </v-col> -->


  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="empresa"
      :rules="empresaRules"
      label="Empresa"
      required
    ></v-text-field>

    <v-text-field
      v-model="mail"
      :rules="emailRules"
      label="Correo electrónico"
      required
    ></v-text-field>

    <v-text-field
      v-model="telefono"
      :rules="telefonoRules"
      label="Teléfono"
      required
    ></v-text-field>

    <v-text-field
      v-model="pais"
      :rules="paisRules"
      label="País"
      required
    ></v-text-field>

    <v-text-field
      v-model="ciudad"
      :rules="ciudadRules"
      label="Ciudad"
      required
    ></v-text-field>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      Enviar
    </v-btn>
<!--
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
  </v-form><br><br>
 </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
      data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'El campo NOMBRE es requerido',
        v => (v && v.length >= 5) || 'El nombre debe ser mayor a 5 caracteres',
      ],
      empresa: '',
      empresaRules: [
        v => !!v || 'El campo EMPRESA es requerido',
        v => (v && v.length >= 5) || 'La empresa debe ser mayor a 5 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'El campo CORREO ELECTRÓNICO es requerido',
        v => /.+@.+\..+/.test(v) || 'Correo electrónico inválido',
      ],
      telefono: '',
      telefonoRules: [
        v => !!v || 'El campo TELÉFONO es requerido',
        v => (v && v.length >= 5) || 'El teléfono debe ser mayor a 5 caracteres',
      ],
      pais: '',
      paisRules: [
        v => !!v || 'El campo PAÍS es requerido',
        v => (v && v.length >= 5) || 'El país debe ser mayor a 5 caracteres',
      ],
      ciudad: '',
      ciudadRules: [
        v => !!v || 'El campo CIUDAD es requerido',
        v => (v && v.length >= 5) || 'La ciudad debe ser mayor a 5 caracteres',
      ]
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
};
</script>
