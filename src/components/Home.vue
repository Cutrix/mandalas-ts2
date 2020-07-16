<template>
  <div>
    <div class="mobile-menu-button mobile">
      <i class="fa fa-bars"></i> MENU
    </div>
    <div class="mobile-menu-items mobile hidden animated">
      <div class="blueButton print">
        <span class="blueButtonContainer"><i class="fa fa-print icon" aria-hidden="true"></i> <span class="translate" data-id="1"></span></span>
      </div>

      <div class="blueButton download">
        <span class="blueButtonContainer"><i class="fa fa-download icon" aria-hidden="true"></i> <span class="translate" data-id="2"></span></span>
      </div>

      <div class="blueButton reset">
        <span class="blueButtonContainer"><i class="fa fa-trash icon" aria-hidden="true"></i> <span class="translate" data-id="4"></span></span>
      </div>
    </div>

    <div class="rotateDeviceBackground"></div>
    <div class="rotateDevice"><img src="assets/img/Landscape_Ipad.svg" /><div class="translate" data-id="30"></div></div>

    <img src="assets/img/STAG_DCA_schnipsel.png" class="pens" />
    <div class="vignette"></div>

    <div class="middiv">
      <!--<img class="logo" src="assets/img/staedler.svg" />-->
      <canvas id="paper" style="background:#fff; width: 800px; height: 800px;"></canvas>
    </div>

    <div class="scrollContainer desktop">
      <div class="scrollButtonUp hidden">
        <img src="assets/img/Scroll.svg" />
      </div>
      <!--papa-->
      <div class="image-select-container" id="image-select-container">
        <div class="image-items-container" v-for="(el, index) in elements" :key="index">
          <div class="profileContainer" :style="'background-color: '+el.color">
            <div class="profile" v-b-toggle="'accordion-'+index">
              <span class="profileImageContainer">               
                <img :src="'assets/img/profileImages/'+el.img+'.jpg'">'
              </span>
              <span class="profileText" v-if="el.user != ''"><span>{{el.kat}}</span> <span class="username">{{el.user}}</span></span>
              <span class="profileText" v-else><span class="username" style="color: #00458b">{{el.kat}}</span></span>
            </div>

            <b-collapse :id="'accordion-'+index">
            <div class="image-item-container" v-for="(v, i) in el.elem" :key="i">
              <!-- Creer des directives pour marquer des elements comme replicable -->
              <div v-if="v.replicable"><a href="#" class="image-item"><img :src="'assets/elements/'+v.value+'.svg'" /></a></div>
              <div v-else><a href="#" class="image-item" @click="onImageItemClick(v.value, v.replicable)"><img :src="'assets/elements/'+v.value+'.svg'" style="background-color: transparent"/></a></div>
            </div>
            </b-collapse>
          </div>
        </div>
      </div>
      <div class="scrollButtonDown">
        <img src="assets/img/Scroll.svg" />
      </div>
    </div>
    <div class="layer-options tk-museo-sans-rounded desktop">
      <div class="basic-image-options">
        <div class="options-header">
          <div class="current-image"></div>
          <h2 class="element-name"><span class="translate" data-id="15"></span> <span class="layerNumber"></span></h2>
        </div>
        <p class="settingsText" v-if="!newImageIsReplicable"><span class="xitems">x</span> <span class="translate" data-id="11" ></span></p>
        <div class="settings" v-if="!newImageIsReplicable">
          <a href="#" class="count_less bLeft"><img src="assets/img/Minus.svg" /></a>
          <div class="slider-wrapper">
            <div id="slider-count" class="slider-horizontal slider-horizontal_pos"></div>
          </div>
          <a href="#" class="count_more bRight"><img src="assets/img/Plus.svg" /></a>
        </div>
        <p class="settingsText translate" data-id="12"></p>
        <div class="settings">
          <a href="#" class="scale_less bLeft"><img src="assets/img/Resize_Small.svg" /></a>
          <div class="slider-wrapper">
            <div id="slider-scale" class="slider-horizontal slider-horizontal_pos"></div>
          </div>
          <a href="#" class="scale_more bRight"><img src="assets/img/Resize_Big.svg" /></a>
        </div>
        <p class="settingsText translate" data-id="13"></p>
        <div class="settings">
          <a href="#" class="rotate_less bLeft"><img src="assets/img/Rotation_Right.svg" /></a>
          <div class="slider-wrapper">
            <div id="slider-rotate" class="slider-horizontal slider-horizontal_pos"></div>
          </div>
          <a href="#" class="rotate_more bRight"><img src="assets/img/Rotation_Left.svg" /></a>
        </div>
      </div>
      <div class="basic-layer-options">
        <h2 class="circle-name"><span class="translate" data-id="14"></span> <img src="assets/img/Icon_ring_6.svg" /> <span class="layerNumber"></span></h2>
        <p class="settingsText translate" data-id="12"></p>
        <div class="settings">
          <a href="#" class="scale_less bLeft"><img src="assets/img/Resize_Small.svg" /></a>
          <div class="slider-wrapper">
            <div id="slider-circle-scale" class="slider-horizontal slider-horizontal_pos"></div>
          </div>
          <a href="#" class="scale_more bRight"><img src="assets/img/Resize_Big.svg" /></a>
        </div>
        <p class="settingsText translate" data-id="13"></p>
        <div class="settings">
          <a href="#" class="rotate_less bLeft"><img src="assets/img/Rotation_Right.svg" /></a>
          <div class="slider-wrapper">
            <div id="slider-circle-rotate" class="slider-horizontal slider-horizontal_pos"></div>
          </div>
          <a href="#" class="rotate_more bRight"><img src="assets/img/Rotation_Left.svg" /></a>
        </div>
        <!--  <a href="#" class="rotate_reset">Reset</a>-->
        <!--  <a href="#" class="scale_reset">Reset</a>-->
      </div>
      <div class="layer-finish-buttons">
        <a href="#" class="settings-done">
          <i class="fa fa-check"></i><span class="translate finish" data-id="3"></span>
        </a>
        <a href="#" class="layerDelete">
          <i class="fa fa-trash"></i><span class="translate delete" data-id="16"></span>
        </a>
      </div>
    </div>
    <div class="layer-options-mobile tk-museo-sans-rounded mobile">

      <div class="scrollContainer">
        <div class="scrollButtonUp hidden">
          <img src="assets/img/Scroll.svg" />
        </div>
        <div class="image-select-container" id="image-select-container-mobile">
        </div>
        <div class="scrollButtonDown">
          <img src="assets/img/Scroll.svg" />
        </div>
      </div>

      <div class="basic-image-options layer-options-tab">
        <div class="options-header">
          <div class="current-image"></div>
          <p v-if="!newImageIsReplicable"><span class="translate settingsText" data-id="15"></span></p>
        </div>
        <div class="settings">
          <table>
            <tr>
              <td>
                <span class="settingsText"><span class="xitems">x</span><span class="translate" data-id="11"></span></span>
              </td>
              <td>
                <div class="slider-wrapper">
                  <div id="slider-count2" class="slider-horizontal slider-horizontal_pos"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="settingsText translate" data-id="12"></span>
              </td>
              <td>
                <div class="slider-wrapper">
                  <div id="slider-scale2" class="slider-horizontal slider-horizontal_pos"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="settingsText translate" data-id="13"></span>
              </td>
              <td>
                <div class="slider-wrapper">
                  <div id="slider-rotate2" class="slider-horizontal slider-horizontal_pos"></div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- <div class="clear"></div> -->
      <div class="basic-layer-options layer-options-tab hidden">
        <div class="options-header">
          <div class="layerDelete"><i class="fa fa-trash"></i></div>
          <p><span class="translate settingsText" data-id="16"></span></p>
        </div>

        <div class="settings">
          <table>
            <tr>
              <td>
                <span class="settingsText translate" data-id="12"></span>
              </td>
              <td>
                <div class="slider-wrapper">
                  <div id="slider-circle-scale2" class="slider-horizontal slider-horizontal_pos"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="settingsText translate" data-id="13"></span>
              </td>
              <td>
                <div class="slider-wrapper">
                  <div id="slider-circle-rotate2" class="slider-horizontal slider-horizontal_pos"></div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- <div class="clear"></div> -->
      <div class="layer-options-tabs topShadow">
        <div class="layer-options-tab-button pattern">
          <span class="translate" data-id="15"></span> <span class="layerNumber"></span>
        </div>

        <div class="layer-options-tab-button layer">
          <span class="translate" data-id="14"></span> <img src="assets/img/Icon_ring_6.svg" /> <span class="layerNumber"></span>
        </div>

        <div class="layer-options-tab-button finish settings-done">
          <i class="fa fa-download"></i> <span class="translate" data-id="17">--></span>
        </div>
      </div>

    </div>

    <div style="float: right; height: 900px; width: 150px; background-color: #756049">
      <h2 class="text-white text-center">Calques</h2>
      <div>    
</div>
      <!--<div class="layers-list desktop">
      <div class="wrapper">
        <div class="layer-list-item" data-rel="5" v-b-tooltip.left title="Au commencement" id="layer-1" style="border: 1px solid red">
          <a href="#" class="select-layer" data-rel="5">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_1.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_1.svg" />
              <span class="ringNr">1</span>
            </div>
          </a>
        </div>
      </div>
      </div>-->
    </div>    
    <div class="tut1 translate animated" data-id="20"></div>
    <div class="tut2 translate animated hidden" data-id="21"></div>
    <div class="tut3 translate animated hidden" data-id="22"></div>
    <div class="tut3-mobile translate animated hidden" data-id="24"></div>
    <div class="layers-list desktop">
      <div class="wrapper">
        <!--<div class="layer-list-item" :data-rel="defaultNumberLayers-c" v-b-tooltip.left title="Pour commencez, choisissez un motif en cliquant sur un carré"
             v-for="c in defaultNumberLayers"
        >
          <a href="#" class="select-layer" :data-rel="defaultNumberLayers-c">
            <div class="border">
              <img class="default ringIcon" :src="'assets/img/Icon_ring_'+c+'.svg'" />
              <img class="activeimg ringIcon" :src="'assets/img/Icon_ring_active_'+c+'.svg'" />
              <span class="ringNr pr-2">{{ c }}</span>
              <span class="view"><i class="fa fa-eye"></i></span>
            </div>
          </a>
        </div>-->

        <div class="layer-list-item empty" :data-rel="defaultNumberLayers-c" v-for="c in defaultNumberLayers" :key="c">
          <a href="#" class="select-layer" :data-rel="defaultNumberLayers - c">
            <div class="border">
              <img class="default ringIcon" :src="'assets/img/Icon_ring_'+c+'.svg'" />
              <img class="activeimg ringIcon" :src="'assets/img/Icon_ring_active_'+c+'.svg'" />
              <span class="ringNr pr-2">{{ c }}</span>
              <span class="view"><i class="fa fa-eye"></i></span>
            </div>
          </a>
        </div>

        <!--<div class="layer-list-item" data-rel="4">
          <a href="#" class="select-layer" data-rel="4">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_2.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_2.svg" />
              <span class="ringNr pr-2">2</span>
              <span class="view"><i class="fa fa-eye"></i></span>
            </div>
          </a>
        </div>-->

        <!--<div class="layer-list-item" data-rel="3">
          <a href="#" class="select-layer" data-rel="3">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_3.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_3.svg" />
              <span class="ringNr pr-2">3</span>
              <span class="view"><i class="fa fa-eye"></i></span>
            </div>
          </a>
        </div>-->

        <!--<div class="layer-list-item" data-rel="2">
          <a href="#" class="select-layer" data-rel="2">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_4.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_4.svg" />
              <span class="ringNr pr-2">4</span>
              <span class="view"><i class="fa fa-eye"></i></span>
            </div>
          </a>
        </div>-->

        <!--<div class="layer-list-item" data-rel="1">
          <a href="#" class="select-layer" data-rel="1">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_5.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_5.svg" />
              <span class="ringNr pr-2">5</span>
              <span class="view"><i class="fa fa-eye"></i></span>
            </div>
          </a>
        </div>-->

        <!--<div class="layer-list-item" data-rel="0">
          <a href="#" class="select-layer" data-rel="0">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_6.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_6.svg" />
              <span class="ringNr pr-2">6</span>
              <span class="view"><i class="fa fa-eye"></i></span>
            </div>
          </a>
        </div>-->

        <div class="layer-list-item empty" @click="addLayer" id="add-layer">
          <a href="#" class="">
            <div class="border">
              <span class=""><i class="fa fa-plus"></i><br>Ajouter un calque</span>
            </div>
          </a>
        </div>

        <div class="layer-list-item empty" id="lang">
          <a href="#" class="">
            <div class="border">
              <span class="">FR</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="layers-list-mobile mobile">
      <div class="wrapper topShadow">
        <div class="layer-list-item" data-rel="5">
          <a href="#" class="select-layer" data-rel="5">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_1.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_1.svg" />
              <span class="ringNr">1</span>
            </div>
          </a>

        </div>

        <!--<div class="layer-list-item" data-rel="4">
          <a href="#" class="select-layer" data-rel="4">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_2.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_2.svg" />
              <span class="ringNr">2</span>
            </div>
          </a>
        </div>-->

        <!--<div class="layer-list-item" data-rel="3">
          <a href="#" class="select-layer" data-rel="3">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_3.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_3.svg" />
              <span class="ringNr">3</span>
            </div>
          </a>
        </div>-->

        <!--<div class="layer-list-item" data-rel="2">
          <a href="#" class="select-layer" data-rel="2">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_4.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_4.svg" />
              <span class="ringNr">4</span>
            </div>
          </a>
        </div>-->

        <!--<div class="layer-list-item" data-rel="1">
          <a href="#" class="select-layer" data-rel="1">
            <div class="border">
              <img class="default ringIcon" src="assets/img/Icon_ring_5.svg" />
              <img class="activeimg ringIcon" src="assets/img/Icon_ring_active_5.svg" />
              <span class="ringNr">5</span>
            </div>
          </a>
        </div>-->
      </div>
    </div>

    <!--<div class="blueButtons desktop">
      <div class="tut4 translate animated hidden" data-id="23"></div>

      <div class="blueButton print">
        <span class="blueButtonContainer"><i class="fa fa-print icon" aria-hidden="true"></i> <span class="translate" data-id="1"></span></span>
      </div>

      <div class="blueButton download">
        <span class="blueButtonContainer"><i class="fa fa-download icon" aria-hidden="true"></i> <span class="translate" data-id="2"></span></span>
      </div>
      -->
      <div class="blueButton reset">
        <span class="blueButtonContainer"><i class="fa fa-trash icon" aria-hidden="true"></i> <span class="translate" data-id="4"></span></span>
      </div>
    </div>
  <!--</div>-->
</template>

<script lang="ts">
import axios from "axios";
//import motifTypeDirective from '@/directives/motif-type';
  /* ts-ignore */
import { Component, Prop, Vue } from "vue-property-decorator";
import 'jquery';
@Component
export default class Home extends Vue {
  constructor() {
    super();
    this.newImageIsReplicable = false;
  }
  private elements: object[] = [];
  private newImageIsReplicable: boolean;
  private newImageName: string = "";
  private defaultNumberLayers: number = 3;

  private mounted() {
    // this.$bvModal.show('modal-1');
    axios.get("elements.json").then((s) => {
      this.elements = s.data;
    });
    const EN = {
      1: "PRINT",
      2: "DOWNLOAD",
      3: "Finish",
      4: "RESET",
      11: " Items",
      12: "Size",
      13: "Rotation",
      14: "Layer",
      15: "Pattern",
      16: "Delete",
      17: "Finish",
      20: "1. Choose a layer",
      21: "2. Choose and edit your pattern",
      22: "3. Next layer",
      23: "4. Ready? Let's go!",
      24: "3. Edit your layer or finish",
      30: "Please rotate your device.",
    };

    const FR = {
      1: "IMPRIMER",
      2: "TELECHARGER",
      3: "Terminer",
      4: "REINITIALISER",
      11: " Elements",
      12: "Taille",
      13: "Tourner",
      14: "Layer",
      15: "Pattern",
      16: "Supprimer",
      17: "Termine",
      20: "1. Choisir un layer",
      21: "2. Choisir et modifier votre pattern",
      22: "3. Layer suivant",
      23: "4. Etes vous pret ! Allons y",
      24: "3. Modifier votre layer ou termine",
      30: "SVP retourner votre terminal.",
    };

    function doTranslate(data: any) {
      $(".translate").each(function() {
        const id = $(this).data("id");
        $(this).html(data[id]);
      });
    }
    $("#lang").on("click", function() {
      switch ($(this).text().trim()) {
        case "FR":
          doTranslate(FR);
          $(this).html(`<div class="layer-list-item empty" id="lang">
            <a href="#" class="">
                <div class="border">
                    <span class="">EN</span>
                </div>
            </a>
        </div>`);
          break;
        case "EN":
          doTranslate(EN);
          $(this).html(`<div class="layer-list-item empty" id="lang">
            <a href="#" class="">
                <div class="border">
                    <span class="">FR</span>
                </div>
            </a>
        </div>`);
          break;
      }
    });
  }

  public onImageItemClick(image: string, replicable: boolean): void {
    this.newImageIsReplicable = !replicable;
    this.newImageName = image;
  }

  public addLayer(): void {
    this.defaultNumberLayers++;
    $(document).trigger('add-layer');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-layer:hover {
    background-color: #fff;
  }
</style>
