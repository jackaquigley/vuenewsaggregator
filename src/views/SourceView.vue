<template lang="html">
  <div>
    <source-list v-for="(source, index) in filteredSources" :key="index" :source="source" />
  </div>
</template>

<script>

import SourceList from '@/components/SourceList.vue'
import NewsService from '@/helpers/NewsService.js'
import {eventBus} from '@/main.js'

  export default {
    name: 'source-view',
    props: ['story'],
    data() {
      return {
        sources: []
      }
    },
    mounted() {
      NewsService.getSources()
      .then(sources => this.sources = sources);

      eventBus.$on('source-updated', (updatedSource) => {
        let index = this.sources.findIndex(source => source.id === updatedSource.id)
        this.sources.splice(index, 1, updatedSource)
        })
    },
    components: {
      'source-list': SourceList
    },
    computed: {
      filteredSources() {
        let filteredSources = this.sources.filter((source) => {
          return source.story.id === this.story.id
        })
        return filteredSources;
    },
  }
}

</script>

<style lang="css">
</style>
