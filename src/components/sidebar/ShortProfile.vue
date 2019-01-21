<template>
  <div class="block short-profile">
    <div class="profile-infos">
      <img :src="getAvatar(user.email)" :alt="user.name" class="avatar"/>
      <p class="profile-metas">
        {{user.name}}
        <span class="profile-account">{{user.account}}</span>
      </p>
      <div class="profile-relation">
        <p class="col col-30">
          Tweets
          <router-link :to="{name: 'my-tweets'}">{{user.tweetCount}}</router-link>
        </p>
        <p class="col col-40">
          Abonnements
          <router-link :to="{name: 'my-tweets'}">{{user.subscriber}}</router-link>
        </p>
        <p class="col col-30">
          Abonnés
          <router-link :to="{name: 'my-tweets'}">{{user.subscription}}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter} from 'vuex-class';
import gravatarHelper from '@/helpers/gravatar';
import {User} from '@/interfaces';

@Component
export default class ShortProfile extends Vue {

  public getAvatar: (email: string) => string = gravatarHelper.getAvatar;
  @Getter('currentUser') private user!: User;
}
</script>

<style lang="scss" scoped>
  .block.short-profile {
    padding-top: 100px;
    background-color: $blue;

    .profile-infos {
      margin: -1*$page-padding; background-color: $white;

      .avatar, .profile-metas, .col {
        display: inline-block; margin: 0;
        vertical-align: top;
      }
      .avatar { margin: -40px $page-padding 0; border: 5px solid $white; border-radius: 50%; }
      .profile-metas {
        font-size: 1.8em; font-weight: $fw-semibold; line-height: 1.3;

        .profile-account {
          display: block;
          color: $dark-grey; font-size: .85em; font-weight: $fw-regular;
        }
      }

      .col {
        padding: $page-padding;
        font-size: 1.2em; font-weight: $fw-bold; line-height: 1.3; color: $dark-grey;

        a, button {
          display: block;
          font-size: 1.5em;
        }
      }
      .col-30 { width: 30%; }
      .col-40 { width: 40%; }
    }
  }
</style>
