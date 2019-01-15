<template>
  <SimpleWriter v-if="!writing" @onFocus="toggleWriting()" />
  <FullWriter v-else @onBlur="toggleWriting()"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SimpleWriter from './SimpleWriter.vue';
import FullWriter from './FullWriter.vue';

@Component({
  components: {
    SimpleWriter,
    FullWriter,
  },
})
export default class WriterContainer extends Vue {
  private writing: boolean = false;

  public toggleWriting() {
    this.writing = !this.writing;
  }
}
</script>

<style scoped>

</style>
