<template>
  <div id="headerWrapper">
    <div id="titleWrapper">
    <h1>News Cycle</h1>
    </div>
    <div id="tagWrapper">
      <tag-list v-for="(tag, index) in uniqueTagList" :key="index" :tag="tag"/>
    </div>
  </div>
</template>

<script>

import TagList from './TagList.vue'
import NewsService from '../helpers/NewsService.js'

export default {
  name: 'header-component',
  data(){
    return {
      tags: []
    }
  },
  mounted() {
    NewsService.getTags()
    .then(tags => this.tags = tags);
  },
  computed: {
    uniqueTagList() {
      let tagList = this.tags.map((tag) => {
        return tag.tagName;
      })
      let uniqueTagList = new Set(tagList);
      return uniqueTagList;
      }
    },
    components: {
      'tag-list': TagList
    }
  }



</script>
<style lang="scss" scoped>

#headerWrapper {
  display: flex;
}

#titleWrapper {
  height: 100%;
  width: 20%;
  text-align: center;
}

#tagWrapper {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
}

</style>
