<template>
  <div>
  <div id="pageWrapper"
  <header>
  <header-component />
  </header>
  <story-view />
  </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import StoryView from './views/StoryView.vue'


export default {
  name: 'App',
  components: {
    'header-component': HeaderComponent,
    'story-view': StoryView,  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
