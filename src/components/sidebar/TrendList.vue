<template>
  <div class="block trend-list">
    <h3>Tendances</h3>
    <ul>
      <li><button>#NationalSelfieDay</button></li>
      <li><button>#QueensSpeech</button></li>
      <li><button>#LaLunaSangreAngItinakda</button></li>
      <li><button>#FelizMiercoles</button></li>
      <li><button>#Mersal</button></li>
      <li><button>La Salada</button></li>
      <li><button>Pompeyo Márquez</button></li>
      <li><button>Le Brivido</button></li>
      <li><button>Machado de Assis</button></li>
      <li><button>いわきFC</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class TrendList extends Vue {
}
</script>

<style lang="scss" scoped>
  .trend-list {
    h3, ul{ margin: 0; padding: 0; }
    h3 {
      margin-bottom: 2*$page-padding;
      font-size: 1.8em;
    }
    li {
      margin: .5 *$page-padding; list-style-type: none;
      font-weight: $fw-semibold;

      button { color: $dark-blue; }
      button:hover { color: $blue; }
    }
  }
</style>
