<template>
  <div class="writer-block--unfold">
    <textarea title="message" rows="3" v-model="value" @blur="blur()"></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FullWriter extends Vue {
  @Prop() public onBlur!: () => void;

  private value: string = '';

  public blur() {
    if ('' === this.value.trim()) {
      this.$emit('onBlur');
    }
  }
}
</script>

<style scoped>

</style>
