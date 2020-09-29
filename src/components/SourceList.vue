<template>
  <article>
    <hr>
  <div class="sourceItem">
    <div class="sourceData">
      <div class="sourceTitle">
        <p>{{source.sourceTitle}}</p>
      </div>
      <div class="sourceJournalist">
        <p>{{source.journalist}}</p>
      </div>
      <div class="sourcePublisherName">
        <p>{{source.publisher}}</p>
      </div>
      <div class="sourceLink">
        <a v-bind:href="source.sourceLink">View Article</a>
      </div>
      <div class="sourceRating">
        <p>Rating: {{source.rating}}</p>
      </div>
      <div class="upvoteDownvote">
        <button v-on:click.prevent="upvote(source)">Upvote</button>
        <button v-on:click.prevent="downvote(source)">Downvote</button>
      </div>
    </div>
  <div class="sourceImgWrapper">
    <img class="sourceImg" v-bind:src="source.sourceImg" alt="">
  </div>
  </div>
  <hr>
  <div class="commentWrapper">
    <comment-view :source="source"/>
  </div>
</article>
</template>
<script>

import NewsService from '@/helpers/NewsService.js'
import CommentView from '@/views/CommentView'
import { eventBus } from "@/main.js";

export default {
  name: "source-list",
  props: ['source'],
  components: {
    'comment-view': CommentView
  },
  methods: {
    upvote(source){
      const upvotedSource = {
        sourceTitle: this.source.sourceTitle,
        sourceLink: this.source.sourceLink,
        rating: this.source.rating + 1,
        sourceImg: this.source.sourceImg,
        story: this.source.story,
        publisher: this.source.publisher,
        comments: this.source.comments,
        journalist: this.source.journalist
      }

      NewsService.updateSource(source.id, upvotedSource)
      .then(upvotedSource => eventBus.$emit('source-updated', upvotedSource))
    },
    downvote(source){
      const downvotedSource = {
        sourceTitle: this.source.sourceTitle,
        sourceLink: this.source.sourceLink,
        rating: this.source.rating - 1,
        sourceImg: this.source.sourceImg,
        story: this.source.story,
        publisher: this.source.publisher,
        comments: this.source.comments,
        journalist: this.source.journalist
      }

      NewsService.updateSource(source.id, downvotedSource)
      .then(downvotedSource => eventBus.$emit('source-updated', downvotedSource))
    }
    }
  }


</script>
<style lang="scss" scoped>

.sourceImg {
object-fit: cover;
width: 100%;
height: 180px;
}

.sourceItem {
  display: flex;
  flex-wrap:
  wrap;
  flex-direction: row;
  height: 100%;
}

.sourceImgWrapper {
  height: 180px;
  width: 20%;
  order: 4
}

.sourceData {
  width: 80%;
  height: auto;
  flex-wrap: wrap;
  display: flex;
}

.sourceTitle {
  width: 100%;
  height: 20%;
  font-size: 22px;
}

.sourceJournalist{
  width: 50%;
  height: 20%;
  font-size: 18px;
}

.sourcePublisherName {
  width: 50%;
  height: 20%;
  font-size: 18px;
}

.sourceLink {
  height: 20%;
  width: 33%;
}

.sourceRating {
  height: 20%;
  width: 33%;
}

.commentWrapper {
 display: flex;
 margin-top: 2px;
 margin-bottom: 2px;
 justify-content: center;
flex-wrap: wrap;
}
</style>
