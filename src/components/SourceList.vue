<template>
  <article>
  <div class="sourceItem">
    <div class="sourceData">
      <div class="sourceTitle">
        <p>{{source.sourceTitle}}</p>
      </div>
      <div class="sourceJournalist">
        <p>By {{source.journalist}}</p>
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
  <div class="commentWrapper">
    <comment-view id="commentView" :source="source"/>
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

      NewsService.updateStory(story.id, upvotedStory)
      .then(upvotedStory => eventBus.$emit('story-upvoted', upvotedStory))
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

      NewsService.updateStory(story.id, downvotedStory)
      .then(downvotedStory => eventBus.$emit('story-upvoted', downvotedStory))
    },
    }
  }


</script>
<style lang="scss" scoped>

article {
  margin: 1%;
  display: flex;
  border-top: 1px solid lightblue;
  margin-top: 1%;
  margin-bottom: 1%;
  height: 40%;
  flex-wrap: wrap;
  flex-direction: row;
}

.sourceItem {
 width: 100%;
 display: flex;
}

.sourceData {
  width: 100%;
}


.sourceData {
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.sourceImgWrapper {
  height: 80%;
  width: 20%;
}

.sourceImg {
  width: 100%;
  height: auto;
}

.sourceTitle {
  height: 30%;
  width: 65%;
  text-align: center;
  font-family: Playfair;
  font-size: 32px;
}

.sourceJournalist {
  min-height: 30%;
  width: 35%;
  font-family: Playfair;
  font-size: 24px;
  text-align: center;
  align-items: center;
}

.sourcePublisherName {
  min-height: 20%;
  width: 50%;
  text-align: center;
  font-family: Playfair;
  font-size: 24px;
  align-items: center;
}

.sourceLink {
  min-height: 20%;
  width: 50%;
  font-family: Playfair;
  text-align: center;
  font-size: 24px;
  align-items: center;
}

.sourceRating {
  min-height: 20%;
  width: 50%;
  font-family: Playfair;
  text-align: center;
  font-size: 24px;
  align-items: center;
}

.upvoteDownvote {
  min-height: 20%;
  width: 50%;
  font-family: Playfair;
  text-align: center;
  font-size: 24px;
  align-items: center;
}

button {
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 20%;
  margin-right: 20%;
  font-size: 24px;
}

.commentWrapper {
  margin-top: 1%;
  margin-bottom: 1%;
  width: 100%;
  border-top: 1px solid lightblue;
}

.commentForm {
  width: 100%;
}
</style>
