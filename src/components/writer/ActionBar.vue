<template>
  <p class="writer-actions">
    <span class="writer-actions-controls-block">
        <i class="fa fa-picture-o fa-border fa-fw"/>
        <i class="fa fa-th-list fa-border fa-fw"/>
        <i class="fa fa-map-marker fa-border fa-fw"/>
    </span>
    <span class="writer-actions-submit-block">
      <span
        class="writer-actions-counter"
        :class="{
          'writer-actions-counter--danger': isNearTheEnd,
          'writer-actions-counter--alert': isBelowEnd,
        }">{{ remaining }}</span>
      <button
        type="submit"
        class="writer-actions-submit"
        :class="{
          'writer-actions-submit--disabled': !isTweetable
        }"
      >Tweeter</button>
    </span>
  </p>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ActionBar extends Vue {
  public get remaining() {
    return ActionBar.MAX_LENGTH - this.length;
  }

  public get isBelowEnd() {
    return 0 > this.remaining;
  }
  public get isNearTheEnd() {
    return !this.isBelowEnd && 20 >= this.remaining;
  }

  public get isTweetable() {
    return !this.isBelowEnd && ActionBar.MAX_LENGTH !== this.remaining;
  }

  public static MAX_LENGTH: number = 140;
  @Prop() public length!: number;
}
</script>

<style scoped>

</style>
