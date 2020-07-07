<template>
  <div id="pageWrapper">
  <div id="headerWrapper">
  <header>
  <header-component />
  </header>
  </div>
  <div id="contentWrapper">
  <story-view />
  <div id="sidebarWrapper">
    <p>Side Bar</p>
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
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#headerWrapper {
  width: 100%;
  height: 20%;
}

#contentWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#sidebarWrapper {
  width: 20%;
  height: 100%;
}

</style>
