<template>
  <div class="home">
    <div class="column main-content">
      <WriterContainer />
      <List />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WriterContainer from '@/components/writer/WriterContainer.vue';
import List from '@/components/tweets/List.vue';

@Component({
  components: {
    List,
    WriterContainer,
  },
})
export default class Home extends Vue {}
</script>
