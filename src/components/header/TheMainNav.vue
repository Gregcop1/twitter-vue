<template>
  <nav class="main-nav">
    <ul>
      <li v-for="link in links" :key="link.routeName">
        <router-link :to="{ name: link.routeName }" class="nav-item" activeClass="nav-item--active" exact>
          <i class="fa" :class="[link.icon]"/> {{ link.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {NavLink} from '@/interfaces';

@Component
export default class TheMainNav extends Vue {
  private links: NavLink[] = [
    {icon: 'fa-home', label: 'Accueil', routeName: 'home'},
    {icon: 'fa-bell-o', label: 'Mes tweets', routeName: 'my-tweets'},
  ];
}
</script>

<style lang="scss" scoped>
  .main-nav {
    position: absolute; bottom: 0;

    ul { display: inline; margin: 0; padding: 0; }
    li {
      display: inline-block; margin: 0;
      font-size: 1.5em;
    }
    .nav-item {
      display: inline-block; padding: 0 15px 8px; border-bottom: 2px solid transparent;
      font-weight: $fw-semibold;
      transition: border-color 200ms linear;

      &:hover, &--active {
        border-color: $blue;
        text-decoration: none;
      }
      .fa { margin-right: 5px; }
    }
  }
</style>
