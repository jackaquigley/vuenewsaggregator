<template>
  <div class="storyList">
    <h2>{{story.title}}</h2>
    <source-list v-for="(source, index) in story.sources" :key="index" :source="source" />
  </div>
</template>

<script>

import SourceList from './SourceList.vue'

export default {
  name: "story-list",
  props: ['story'],
  components: {
    'source-list': SourceList
  }
}
</script>

<style lang="scss" scoped>

.storyList {
  height: auto;
  width: 100%;
  text-align: center;
}

</style>
