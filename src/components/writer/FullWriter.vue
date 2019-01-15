<template>
  <div class="writer-block--unfold">
    <textarea title="message" rows="3" v-model="value" @blur="blur()" ref="input"></textarea>
    <ActionBar :length="value.length" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ActionBar from './ActionBar.vue';

@Component({
  components: { ActionBar },
})
export default class FullWriter extends Vue {
  @Prop() public onBlur!: () => void;

  public value: string = '';

  public blur() {
    if ('' === this.value.trim()) {
      this.$emit('onBlur');
    }
  }

  public mounted() {
    (this.$refs.input as HTMLInputElement).focus();
  }
}
</script>

<style scoped>

</style>
