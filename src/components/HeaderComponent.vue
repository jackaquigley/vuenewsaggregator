<template>
  <div id="headerWrapper">
    <span id="titleWrapper">
    <h1 > <router-link id="title" :to="{ name: 'storyView'}">News Cycle</router-link> </h1>
    </span>
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

@font-face {
  font-family: "Domine";
  src: local("Domine"),
   url(../../public/Domine-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Playfair";
  src: local("Playfair"),
   url(../../public/PlayfairDisplay-Regular.ttf) format("truetype");
}

#headerWrapper {
 display: flex;
 flex-direction: row;
}

#titleWrapper {
  width: 15%;
  height: 100%;
  text-align: center;
  border-right: solid lightblue 0.5px;
}

#title {
  font-family: Domine;
  color: black;
  text-decoration: none;
}

#tagWrapper {
display: flex;
flex-wrap: wrap;
font-family: Playfair;
width: 85%;
margin-left: 1%;
}

</style>
