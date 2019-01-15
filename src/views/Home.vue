<template>
  <div class="home">
    <WriterContainer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WriterContainer from '@/components/writer/WriterContainer.vue';

@Component({
  components: {
    WriterContainer,
  },
})
export default class Home extends Vue {}
</script>
