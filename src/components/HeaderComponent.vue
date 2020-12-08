<template>
  <div id="headerWrapper">
    <h1>Newzit</h1>
  </div>
</template>

<script>

import NewsService from '../helpers/NewsService.js'

export default {
  name: 'header-component',
  data(){
    return {
      stories: []
    }
  },
  mounted() {
    NewsService.getStories()
    .then(stories => this.stories = stories);
  },
  computed: {
    getTags() {
      let tagList = this.stories.map((story) => {
         return story.tags;
      })
      let mergedTagList = [].concat.apply([], tagList);
      let uniqueTagList = mergedTagList.filter((tag, i, mergedTagList) => mergedTagList.indexOf(tag) === i);
      return uniqueTagList;
      }
    }
  }



</script>
<style lang="scss" scoped>
</style>
