<template>
  <div class="writer-block--fold" @click="focus()">
    <img :src="avatar" :alt="user.name" class="avatar" />
    <input type="text" placeholder="Ecrivez votre texte ici..." @focus="focus()"/>
    <i class="fa fa-picture-o"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import gravatarHelper from '@/helpers/gravatar';
import { User } from '@/interfaces/User';

@Component
export default class SimpleWriter extends Vue {
  @Prop() public onFocus!: () => void;

  private user: User = {account: 'gregcop1', email: 'gregcop1@gmail.com', name: 'Grégory Copin'};
  private avatar: string = '';

  public mounted() {
    this.avatar = gravatarHelper.getAvatar(this.user.email);
  }

  public focus() {
    this.$emit('onFocus');
  }
}
</script>
