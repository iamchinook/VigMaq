<template>
  <div style="width: 100%; height: 100%">
    <v-container
      fluid
      style="height: 160%; background-color: #4f4e4e; width: 20%; float: left"
    >
      <v-row no-gutters>
        <v-col cols="12" sm="4"> </v-col>
        <v-col cols="12" sm="4">
          <img
            v-for="(marca, index) in marcas"
            :key="index"
            :src="marca.src"
            alt="marca.title"
            style="max-height: 80px; max-width: 100%; margin-top: 30px"
          />
        </v-col>
        <v-col cols="12" sm="4"> </v-col>
      </v-row>
    </v-container>
    <!-- PC -->
    <v-container
      style="height: 110%; width: 50%; float: left"
      fluid
      v-if="$vuetify.breakpoint.mobile == false"
    >
      <h1>Categorías</h1>

      <v-list>
        <v-list-group
          v-for="(tipo, index) in tipos"
          :key="index"
          v-model="tipo.active"
          :prepend-icon="tipo.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="tipo.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <div v-for="(maquina, index) in maquinas" v-bind:key="index">
            <v-btn
              v-if="maquina.tipo == tipo.title"
              v-text="maquina.title"
              :src="maquina.asset"
              v-on:click="showOverlay(maquina, index)"
              style="margin-bottom: 15px; font-size: x-small; width: 100%"
            ></v-btn>
            <v-overlay :value="maquina.overlay">
              <v-btn
                color="error"
                v-on:click="hideOverlay(maquina, index)"
                small
                elevation="18"
                class="mx-2"
                dark
                fab
                outlined
              >
                <v-icon size="12px"> mdi-close </v-icon>
              </v-btn>
              <div>
                <v-card
                  elevation="24"
                  class="mx-auto"
                  :width="$vuetify.breakpoint.mobile ? 450 : 600"
                  :height="$vuetify.breakpoint.mobile ? 750 : 800"
                >
                  <v-system-bar lights-out></v-system-bar>
                  <v-carousel
                    :show-arrows="false"
                    hide-delimiter-background
                    hide-delimiters
                  >
                    <v-carousel-item
                      :src="maquina.asset"
                      :width="$vuetify.breakpoint.mobile ? 500 : 600"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    ></v-carousel-item>
                  </v-carousel>

                  <v-list two-line>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title
                          style="
                            text-align: center;
                            margin-bottom: 15px;
                            font-size: small;
                          "
                          >{{ maquina.title }}</v-list-item-title
                        >
                        <v-list-item-subtitle>
                          <ul>
                            <li
                              v-for="(item, index) in maquina.info"
                              :key="index"
                            >
                              <p
                                style="
                                  font-size: smaller;
                                  margin-bottom: 10px !important;
                                "
                              >
                                {{ item }}
                              </p>
                            </li>
                          </ul>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </div>
            </v-overlay>
          </div>
        </v-list-group>
      </v-list>
    </v-container>
    <!-- cel -->

    <v-container
      style="height: 110%; width: 80%; float: left"
      fluid
      v-if="$vuetify.breakpoint.mobile == true"
    >
      <h1>Categorías</h1>

      <v-list>
        <v-list-group
          v-for="(tipo, index) in tipos"
          :key="index"
          v-model="tipo.active"
          :prepend-icon="tipo.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                v-text="tipo.title"
                style="font-size: small"
              ></v-list-item-title>
            </v-list-item-content>
          </template>

          <div v-for="(maquina, index) in maquinas" v-bind:key="index">
            <v-btn
              v-if="maquina.tipo == tipo.title"
              v-text="maquina.title"
              :src="maquina.asset"
              v-on:click="showOverlay(maquina, index)"
              style="margin-bottom: 15px; font-size: xx-small; width: 100%"
            ></v-btn>
            <v-overlay :value="maquina.overlay">
              <div>
                <v-card
                  elevation="24"
                  class="mx-auto"
                  :width="$vuetify.breakpoint.mobile ? 350 : 600"
                  :height="600"
                >
                  <v-btn
                    color="error"
                    v-on:click="hideOverlay(maquina, index)"
                    small
                    elevation="18"
                    class="mx-2"
                    dark
                    fab
                    outlined
                    style="float: right"
                  >
                    <v-icon size="12px"> mdi-close </v-icon>
                  </v-btn>
                  <v-system-bar lights-out></v-system-bar>
                  <v-carousel
                    :show-arrows="false"
                    hide-delimiter-background
                    hide-delimiters
                    id="chico"
                  >
                    <v-carousel-item
                      :src="maquina.asset"
                      :max-height="400"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    ></v-carousel-item>
                  </v-carousel>

                  <v-list two-line>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title
                          style="
                            text-align: center;
                            margin-bottom: 15px;
                            font-size: small;
                          "
                          >{{ maquina.title }}</v-list-item-title
                        >
                        <v-list-item-subtitle>
                          <ul>
                            <li
                              v-for="(item, index) in maquina.info"
                              :key="index"
                            >
                              <p
                                style="
                                  font-size: smaller;
                                  margin-bottom: 10px !important;
                                "
                              >
                                {{ item }}
                              </p>
                            </li>
                          </ul>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </div>
            </v-overlay>
          </div>
        </v-list-group>
      </v-list>
    </v-container>
    <v-container
      style="height: 140%; width: 30%; float: right"
      fluid
      v-if="$vuetify.breakpoint.mobile == false"
    >
      <v-carousel
        cycle
        interval="2000"
        height="350"
        style="border-radius: 30px; margin-bottom: 15px; margin-top: 90px"
        hide-delimiter-background
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-img :src="colors[i]"></v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-carousel
        cycle
        interval="2030"
        height="350"
        style="border-radius: 30px; margin-bottom: 15px"
        hide-delimiter-background
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <v-img :src="colors2[i]"></v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<style scoped>
.hidden {
  width: 0%;
}
.v-window-item {
  height: 400px !important;
}
#chico {
  height: 400px !important;
}
</style>

<script>
export default {
  name: "Maquinarias",
  data: () => ({
    colors: [
      require("../assets/Carousel/1.png"),
      require("../assets/Carousel/2.png"),
      require("../assets/Carousel/3.png"),
      require("../assets/Carousel/4.png"),
      require("../assets/Carousel/5.png"),
      require("../assets/Carousel/6.png"),
      require("../assets/Carousel/7.png"),
      require("../assets/Carousel/8.png"),
      require("../assets/Carousel/9.png"),
      require("../assets/Carousel/10.png"),
      require("../assets/Carousel/11.png")
    ],
    colors2: [
      require("../assets/Carousel/12.png"),
      require("../assets/Carousel/13.png"),
      require("../assets/Carousel/14.png"),
      require("../assets/Carousel/23.jpeg"),
      require("../assets/Carousel/16.png"),
      require("../assets/Carousel/17.png"),
      require("../assets/Carousel/18.png"),
      require("../assets/Carousel/19.png"),
      require("../assets/Carousel/20.png"),
      require("../assets/Carousel/21.png"),
      require("../assets/Carousel/22.png"),
      require("../assets/Carousel/24.jpeg")
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    maquinas: [
      {
        title: "Agujereadora múltiple marca Maggi 21 mechas",
        tipo: "Agujereadoras",
        asset: require("../assets/Agujereadoras/Agujereadora múltiple marca Maggi 21 mechas.png"),
        info: [],
        overlay: false
      },
      {
        title: "Agujereadora para bisagras MZ73031A",
        tipo: "Agujereadoras",
        asset: require("../assets/Agujereadoras/Agujereadora para bisagras MZ73031A.png"),
        info: [
          "Origen: China",
          "Velocidad de avance variable",
          "Cantidad de ejes: 3",
          "Peso 170 Kg."
        ],
        overlay: false
      },
      {
        title: "Equipo de Aspiración de una manga y dos bocas",
        tipo: "Aspiradores",
        asset: require("../assets/Equipos de Aspiracion/1.png"),
        info: ["1 Manga", "2 Bocas", "Motor 3 HP"],
        overlay: false
      },
      {
        title: "Equipo de Aspiración de dos mangas y tres bocas",
        tipo: "Aspiradores",
        asset: require("../assets/Equipos de Aspiracion/2.png"),
        info: ["2 Mangas", "3 Bocas", "Motor 3 HP / 4 HP"],
        overlay: false
      },
      {
        title: "Equipo para aspiración central",
        tipo: "Aspiradores",
        asset: require("../assets/Equipos de Aspiracion/3.png"),
        info: ["Se fabrica según necesidad de cada cliente"],
        overlay: false
      },
      {
        title: "Avance para Tupi",
        tipo: "Avances",
        asset: require("../assets/Avances/Avance para tupi.jpeg"),
        info: [
          "Alimentador para tupi",
          "4 ruedas",
          "8 velocidades de avance",
          "Motor 1 HP Trifásico"
        ],
        overlay: false
      } /*
      {
        title: "Sin Stock",
        tipo: "Barrenos",
        //asset: require("../assets/.png"),
        info: [],
        overlay: true
      },*/,
      {
        title: "MB104H",
        tipo: "Cepilladoras",
        asset: require("../assets/Cepilladoras/104 105 106.png"),
        info: [
          "Ancho máx cepillo: 400mm.",
          "Altura máx cepillo: 200mm.",
          "3 Vel. avance m/mm: 8-10-12",
          "Muñeco de 4 cuchillas: si",
          "Motor: 5.5 HP",
          "2 rolos en la mesa: si"
        ],
        overlay: false
      },
      {
        title: "MB105H",
        tipo: "Cepilladoras",
        asset: require("../assets/Cepilladoras/104 105 106.png"),
        info: [
          "Ancho máx cepillo: 500mm.",
          "Altura máx cepillo: 200mm.",
          "3 Vel. avance m/mm: 8-10-12",
          "Muñeco de 4 cuchillas: si",
          "Motor: 5.5 HP",
          "2 rolos en la mesa: si"
        ],
        overlay: false
      },
      {
        title: "MB106H",
        tipo: "Cepilladoras",
        asset: require("../assets/Cepilladoras/104 105 106.png"),
        info: [
          "Ancho máx cepillo: 600mm.",
          "Altura máx cepillo: 200mm.",
          "3 Vel. avance m/mm: 8-10-12",
          "Muñeco de 4 cuchillas: si",
          "Motor: 10 HP",
          "2 rolos en la mesa: si"
        ],
        overlay: false
      },
      {
        title: "CNC Laser",
        tipo: "Centros de Trabajo",
        asset: require("../assets/Centros de Trabajo/CNC Laser.png"),
        info: [
          "Amplia gama de laser CNC",
          "Dimensiones de mesa de trabajo y potencia de laser variadas para corte y grabado",
          "Los equipos cuentan con Chiller de refrigeración",
          "Motocomprensor",
          "Extractor de humo",
          "Pantalla de fácil manejo que permite visualizar el trabajo a realizar"
        ],
        overlay: false
      },
      {
        title: "CNC Router",
        tipo: "Centros de Trabajo",
        asset: require("../assets/Centros de Trabajo/CNC Router.png"),
        info: [
          "Amplia gama de fresadores con dimensiones de mesa y potencia de motor variadas",
          "1 o 2 cabezales y con o sin cambio de herramientas automáticas",
          "Los equipos cuentan con Chiller de refrigeración",
          "Todas están dimensionadas para altas producciones y trabajo continuo",
          "Bomba de vacío para sujeción de piezas",
          "Software de fácil manejo"
        ],
        overlay: false
      },
      {
        title: "Combinada",
        tipo: "Combinadas",
        asset: require("../assets/Combinadas/Combinada.jpeg"),
        info: [
          "Tensión: 220V / 50 Hz - Potencia: 1,5 kW (2HP) - Velocidad: 2840 rpm",
          "Largo mesa: 1200 mm - Ancho mesa: 300 mm - Peso: 210 Kg",
          "Tupi Horizontal",
          "Sierra circular 250 mm",
          "Garlopa 3 cuchillas (300 x 3mm)",
          "Cepilladora 3 cuchillas (300 x 125mm)",
          "Barreno y perforadora hasta 13 mm",
          "Auto-afilado de cuchillas - Uso Profesional"
        ],
        overlay: false
      },

      {
        title: "Escuadradora E I 260",
        tipo: "Escuadradoras",
        asset: require("../assets/Escuadradoras/E I 260.png"),
        info: [
          "Con o sin Incisor",
          "Corte Util 2.600 mm",
          "Opcional motores monofásicos o trifásicos blindados",
          "Inclinación hoja 45°",
          "Diametro de mesa fija 850 x 900 mm",
          "Diametro de mesa móvil 850 x 900 mm"
        ],
        overlay: false
      },
      {
        title: "Escuadradora",
        tipo: "Escuadradoras",
        asset: require("../assets/Escuadradoras/TT 6132 b.png"),
        info: [
          "Corte útil 3.200 mm",
          "Inclinación 0.45",
          "Motor principal 5.5 hp",
          "Incisor 1 hp",
          "Guía de carro tipo alternof"
        ],
        overlay: false
      },
      {
        title: "Escuadradora C3200M",
        tipo: "Escuadradoras",
        //asset: require("../assets/Escuadradoras/TT 6132 b.png"),
        info: [],
        overlay: false
      },
      {
        title: "Escuadradora C3200H",
        tipo: "Escuadradoras",
        //asset: require("../assets/Escuadradoras/TT 6132 b.png"),
        info: [],
        overlay: false
      },
      {
        title: "Pegadora de Cantos TT-306DB",
        tipo: "Pegadora de cantos",
        asset: require("../assets/Escuadradoras/TT 306 DB.png"),
        info: [
          "Longitud mínima del panel 120mm",
          "Ancho mínimo del panel 80mm",
          "Espesor del panel 9-45mm",
          "Espesor de banda 0.4-3mm",
          "Velocidad de alimentación 8m/min",
          "Voltaje de entrada 380V - Frecuencia de entrada 50Hz - Ambos opcional",
          "Dimensiones totales 2000mmx600mmx1400mm",
          "Peso 540kg"
        ],
        overlay: false
      },
      {
        title: "MB 504 F",
        tipo: "Garlopas",
        asset: require("../assets/Garlopas/MB 504 F.png"),
        info: [
          "Ancho de Mesa 400mm.",
          "Largo total 2.500mm.",
          "Muñeco 4 cuchillas",
          "Motor 4 HP"
        ],
        overlay: false
      },
      {
        title: "Lijadora de Banda Modelo L 2300",
        tipo: "Lijadoras",
        asset: require("../assets/Lijadoras/Lijadora de Banda Modelo L 2300.png"),
        info: [
          "Mesa de trabajo 3.005 mm. x 1.250 mm.",
          "Movimiento de mesa eléctrico",
          "Potencia 5 HP",
          "Aspiración incorporada",
          "Velocidad de lijado 10 - 15 m/seg.",
          "Peso 500 Kg."
        ],
        overlay: false
      },
      {
        title: "Lijadora de Banda Modelo LB 660",
        tipo: "Lijadoras",
        asset: require("../assets/Lijadoras/Lijadora de Banda Modelo LB 660.png"),
        info: [
          "Mesa de trabajo 2.500 mm. x 800 mm.",
          "Movimiento de mesa con colisas",
          "Potencia 3 HP"
        ],
        overlay: false
      },
      {
        title: "Moldulera Modelo 520 / 620",
        tipo: "Molduleras",
        asset: require("../assets/Molduleras/520 620.png"),
        info: [
          "Ancho de trabajo min 20 mm / max 200 mm",
          "Cantidad de husillos 520.5 / 620.6.",
          "Potencial total 520 39 HP / 620 48 HP",
          "Velocidad de Alimentación 6 - 24 m/min",
          "Peso neto 520 3.500 Kg. / 620 4.000 Kg."
        ],
        overlay: false
      },
      {
        title: "Pegadora de cantos Modelo CBC . Mr",
        tipo: "Pegadoras de cantos",
        asset: require("../assets/Pegadora de Canto/CBC ME.png"),
        info: [
          "Colero flotante con regulación fácil y precisa",
          "Permite pegar madera, papel, PVC y ABS",
          "Espesor de Canto 0,3 a 2 mm",
          "Velocidad de avance regulable 3,5 a 8 metros/min.",
          "El pegamento es aplicado en la pieza",
          "Potencia 1.500 Watss.",
          "Dimensiones con mesa extendida 2.550 x 400mm.",
          "Peso Neto 110 Kg.",
          "La pegadora de cantos Maksiwa tiene mesas extensibles",
          "que proponen un área de trabajo 2,5 veces más larga"
        ],
        overlay: false
      },
      {
        title: "Pegadora de cantos Modelo 225-P",
        tipo: "Pegadoras de cantos",
        asset: require("../assets/Pegadora de Canto/COMPACT 225-P.png"),
        info: [
          "Filos de melamina, chapa, ABS, PVC.",
          "Espesor de Panel (min/max) 10 - 45 mm.",
          "Espesor de filo (min/max) 0,4 - 2 mm.",
          "Velocidad de Avance 8 m/min",
          "Retestado a circulares",
          "Refilado con fresa combinada",
          "Pulidores",
          "Peso 380 Kg."
        ],
        overlay: false
      },
      {
        title: "Pegadora de cantos Compact 306 - D",
        tipo: "Pegadoras de cantos",
        asset: require("../assets/Pegadora de Canto/TT 306 DB.png"),
        info: [
          "Pegadora de cantos con colero",
          "Avance a oruga",
          "Espesor de Panel (min/max) 10 - 45 mm.",
          "Espesor de filo (min/max) 0,4 - 3 mm.",
          "Retestado a circulares",
          "Refilado con Fresas combinadas",
          "Pulidores"
        ],
        overlay: false
      },
      {
        title: "Pegadora de cantos COMPACT 306 - DS",
        tipo: "Pegadoras de cantos",
        asset: require("../assets/Pegadora de Canto/TT 306 DB.png"),
        info: [
          "Pegadora de cantos con colero",
          "Avance a oruga",
          "Espesor de Panel (min/max) 10 - 45 mm.",
          "Espesor de filo (min/max) 0,4 - 3 mm.",
          "Retestado a circulares",
          "Grupo Rascador",
          "Refilado con Fresas combinadas",
          "Pulidores"
        ],
        overlay: false
      },
      {
        title: "Pegadora de cantos Modelo 308 DS",
        tipo: "Pegadoras de cantos",
        asset: require("../assets/Pegadora de Canto/COMPACT 308 P.jpeg"),
        info: [
          "Pantalla Táctil",
          "Avance a oruga",
          "Pre-calentamiento con guía",
          "Filos de melamina, chapa ABS y PVC",
          "Espesor de Panel (min/max) 10 - 50 mm.",
          "Espesor de filo (min/max) 0,4 - 3 mm.",
          "Velocidad de trabajo 8, 12 y 15 m/min.",
          "Retestado a dos motores inclinables",
          "Refilador alta frecuencia con Fresas combinadas",
          "Grupo Rascador y Pulidores"
        ],
        overlay: false
      },
      {
        title: "Seccionadora Horizontal",
        tipo: "Seccionadoras",
        asset: require("../assets/Seccionadoras/Seccionadora Horizontal.png"),
        info: [
          "Naxing ha desarrollado una amplia gama de Seccionadoras Manuales / CNC",
          "Las mismas son configuradas según la necesidad del cliente",
          "Son de contrucción robusta y precisa"
        ],
        overlay: false
      },
      {
        title: "Seccionadora Vertical con Incisor",
        tipo: "Seccionadoras",
        asset: require("../assets/Seccionadoras/Seccionadora Vertical con incisor.png"),
        info: [
          "Altura máxima de corte 1900 / 2200",
          "Largo máximo de corte 410",
          "Hoja de corte 250 mm de diametro",
          "Motor 4 HP",
          "Aspiración incorporada",
          "Panel robusto de fácil instalación",
          "Dimensiones 5.000 x 2.980 x 1.150 mm"
        ],
        overlay: false
      },
      {
        title: "TUPI Modelo MX 5115 B",
        tipo: "Tupies",
        asset: require("../assets/Tupies/TUPI Modelo MX 5115 B.png"),
        info: [
          "Motor 5 HP",
          "Eje de 40 mm de diámetro",
          "Mesa 1.130 x 670 mm",
          "3 velocidades 4.000 / 6.000 / 8.000 RPM"
        ],
        overlay: false
      },
      {
        title: "Herramientas neumaticas y compresores",
        tipo: "Otros Productos",
        asset: require("../assets/Otros productos/Herramientas neumaticas y compresores.png"),
        info: [],
        overlay: false
      },
      {
        title: "Adhesivos Hotmelt",
        tipo: "Otros Productos",
        asset: require("../assets/Otros productos/Adhesivos Hotmelt.png"),
        info: ["Adhesivos de alta y baja velocidad para pegadoras de canto"],
        overlay: false
      },
      {
        title: "Sierras circulares e incisores",
        tipo: "Otros Productos",
        asset: require("../assets/Otros productos/Sierras circulares e incisores.png"),
        info: [],
        overlay: false
      }
    ],
    tipos: [
      {
        action: "mdi-moon-waxing-crescent",
        title: "Agujereadoras"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Aspiradores"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Avances"
      } /*
      {
        action: "mdi-moon-waxing-crescent",
        title: "Barrenos - Sin Stock"
      },*/,
      {
        action: "mdi-moon-waxing-crescent",
        title: "Centros de Trabajo"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Cepilladoras"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Combinadas"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Escuadradoras"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Garlopas"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Lijadoras"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Molduleras"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Pegadoras de cantos"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Seccionadoras"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Tupies"
      },
      {
        action: "mdi-moon-waxing-crescent",
        title: "Otros Productos"
      }
    ],
    marcas: [
      {
        src: require("../assets/Marcas/vmigroup.png"),
        title: "vmigroup"
      },
      {
        src: require("../assets/Marcas/nanxing.png"),
        title: "nanxing"
      },
      {
        src: require("../assets/Marcas/indfema.png"),
        title: "indfema"
      },
      {
        src: require("../assets/Marcas/maggi.png"),
        title: "maggi"
      },
      {
        src: require("../assets/Marcas/maksiwa.png"),
        title: "maksiwa"
      },
      {
        src: require("../assets/Marcas/reingnmac.png"),
        title: "reingnmac"
      },
      {
        src: require("../assets/Marcas/bta.png"),
        title: "bta"
      }
    ],
    absolute: true,
    opacity: 1
  }),
  methods: {
    showOverlay(maquina, index) {
      this.maquinas.map(a => (a.overlay = false));
      this.maquinas[index].overlay = true;
    },
    hideOverlay(maquina, index) {
      this.maquinas.map(a => (a.overlay = false));
      this.maquinas[index].overlay = false;
    }
  }
};
</script>
