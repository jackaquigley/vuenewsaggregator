<template>
  <div class="storyList">
    <h2>{{story.title}}</h2>
    <source-view />
  </div>
</template>

<script>

import SourceView from '../views/SourceView.vue'

export default {
  name: "story-list",
  props: ['story'],
  components: {
    'source-view': SourceView
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
