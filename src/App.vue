<template>
  <div id="pageWrapper">
  <div id="headerWrapper">
  <header>
  <header-component />
  </header>
  </div>
  <div id="contentWrapper">
  <router-view></router-view>
  <div id="sidebar">
  </div>
  </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import StoryView from './views/StoryView.vue'
import { eventBus } from "@/main.js";


export default {
  name: 'App',
  components: {
    'header-component': HeaderComponent,
    'story-view': StoryView,  }
}
</script>

<style>

#pageWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#headerWrapper {
  height: 10%;
  width: 100%;
  margin: 16px
}

#contentWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

#sidebar {
  width: 20%;
  height: 100;
  background: darkblue;
  margin-right: 2%;
}

#StoryView {
  margin-left: 2%;
  margin-right: 4%;
  overflow: scroll;
}

* {
    margin: 0;
    padding: 0;
  }

</style>
