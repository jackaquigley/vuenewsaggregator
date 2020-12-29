<template lang="html">
  <div class="storyPage">
    <router-link :to="{ name: 'page', params: { id: story.id  }}">{{story.title}}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'story-page',
    props: ['story'],

    }

</script>

<style lang="css">

.storyPage {
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
