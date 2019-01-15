<template>
  <div class="my-tweets">
    <LeftSidebar />
    <div class="column main-content">
      <List :onlyOwned="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WriterContainer from '@/components/writer/WriterContainer.vue';
import LeftSidebar from '@/components/sidebar/LeftSidebar.vue';
import List from '@/components/tweets/List.vue';

@Component({
  components: {
    LeftSidebar,
    List,
    WriterContainer,
  },
})
export default class Home extends Vue {}
</script>
