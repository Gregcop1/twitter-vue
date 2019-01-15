<template>
  <aside class="column aside-primary">
    <ShortProfile />
    <TrendList />
  </aside>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ShortProfile from './ShortProfile.vue';
import TrendList from './TrendList.vue';

@Component({
  components: {ShortProfile, TrendList},
})
export default class LeftSidebar extends Vue {
}
</script>
