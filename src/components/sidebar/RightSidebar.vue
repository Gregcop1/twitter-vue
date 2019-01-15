<template>
  <aside class="column aside-secondary">
    <Suggestion />
  </aside>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Suggestion from './Suggestion.vue';

@Component({
  components: {Suggestion},
})
export default class RightSidebar extends Vue {
}
</script>
