<template>
  <div id="pageWrapper">
  <div id="headerWrapper">
  <header>
  <header-component />
  </header>
  </div>
  <div id="contentWrapper">
  <router-view id="routerView"></router-view>
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

@font-face {
  font-family: "Domine";
  src: local("Domine"),
   url(../public/Domine-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Playfair";
  src: local("Playfair"),
   url(../public/PlayfairDisplay-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Playfair-Bold";
  src: local("Playfair-Bold"),
   url(../public/PlayfairDisplay-Bold.ttf) format("truetype");
}

#pageWrapper {
  display: flex;
}

#headerWrapper {
  width: 100%;
  height: 6%;
  position: fixed;
  background: white;
}

#contentWrapper {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 98%;
  margin-left: 0.5%;
  height: 85%;
  margin-top: 6%;
  border-left: 1px solid lightblue;
  border-right: 1px solid lightblue;
  position: fixed;
}

#routerView {
  width: 100%;
}
</style>
