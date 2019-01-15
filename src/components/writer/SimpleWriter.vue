<template>
  <div class="writer-block--fold" @click="focus()">
    <img :src="getAvatar(currentUser.email)" :alt="currentUser.name" class="avatar" />
    <input type="text" placeholder="Ecrivez votre texte ici..." @focus="focus()"/>
    <i class="fa fa-picture-o"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import gravatarHelper from '@/helpers/gravatar';
import { User } from '@/interfaces/User';
import {mapGetters} from 'vuex';

@Component({
  computed: mapGetters(['currentUser']),
})
export default class SimpleWriter extends Vue {
  @Prop() public onFocus!: () => void;
  public getAvatar: (email: string) => string = gravatarHelper.getAvatar;

  private currentUser!: User;
  private avatar: string = '';

  public focus() {
    this.$emit('onFocus');
  }
}
</script>
