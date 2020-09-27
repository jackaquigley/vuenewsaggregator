<template lang="html">
  <div>
    <source-list v-for="(source, index) in sources" :key="index" :source="source" />
  </div>
</template>

<script>

import SourceList from '@/components/SourceList.vue'
import NewsService from '@/helpers/NewsService.js'
import {eventBus} from '@/main.js'

  export default {
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
    }
  }
</script>

<style lang="css">
</style>
