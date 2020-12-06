<template>
  <div class="storyList">
    <h2 class="storyTitle">{{story.title}}</h2>
    <source-view :story="story"/>
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
  height: 100%;
  width: 98%;
  text-align: center;
  border: 1px solid lightgrey;
  }

.storyTitle {
  margin-top: 16px;
  margin: 8px;
  margin-bottom: 8px;
  font-size: 40px;
  box-shadow: 0px 1px lightgrey;
}

</style>
