<template>
  <aside class="column aside-secondary">
    <SuggestionList />
  </aside>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import SuggestionList from './SuggestionList.vue';

@Component({
  components: {SuggestionList},
})
export default class RightSidebar extends Vue {
}
</script>
