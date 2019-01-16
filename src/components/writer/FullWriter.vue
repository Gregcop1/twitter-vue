<template>
  <div class="writer-block--unfold">
    <form @submit.prevent="submit()">
      <textarea title="message" rows="3" v-model="value" @blur="blur()" @keyup.ctrl.enter="submit()" ref="input"></textarea>
      <ActionBar :length="value.length" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import {User} from '@/interfaces';
import ActionBar from './ActionBar.vue';

interface TweetSubmission {
  message: string;
  user: User;
}

@Component({
  components: { ActionBar },
})
export default class FullWriter extends Vue {
  @Action('addTweet') public addTweet!: (payload: TweetSubmission) => void;
  @Getter('currentUser') public currentUser!: User;
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

  public submit() {
    if ('' !== this.value.trim()) {
      this.addTweet({message: this.value, user: this.currentUser});
      this.value = '';
      (this.$refs.input as HTMLInputElement).blur();
    }
  }
}
</script>

<style scoped>

</style>
