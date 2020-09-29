const storyUrl = "http://localhost:8080/api/stories";
const sourceUrl = "http://localhost:8080/api/sources/";
const commentUrl = "http://localhost:8080/api/comments";

export default {
  getStories(){
    return fetch(storyUrl)
    .then(res => res.json());
  },
  getSources(){
    return fetch(sourceUrl)
    .then(res => res.json());
  },
  getComments(){
    return fetch(commentUrl)
    .then(res => res.json());
  },
  postComment(payload){
    return fetch(commentUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  updateSource(id, payload){
    return fetch(sourceUrl + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}
