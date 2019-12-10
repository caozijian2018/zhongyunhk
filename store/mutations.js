export default {
  increment(state) {
    state.counter++;
  },
  setLang(state, lang) {
    state.lang = lang;
  },
  search(state,word){
    state.search_word=word;
  },
  setPage(state,page){
    state.page=page;
  }
};
