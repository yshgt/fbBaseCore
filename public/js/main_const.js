Main.LOADING_IMAGE_URL = '/img/infinite-gif-preloader.gif';
Main.DEFAULT_IMAGEURL = 'https://firebasestorage.googleapis.com/v0/b/fbblog-e9a62.appspot.com/o/0%2Fbooks-1245744_1920.jpg?alt=media&token=577c6bf6-00ab-4c1d-9452-f8eef68c7065';

Main.CARD_TEMPLATE = [
  '<article class="card">',
    '<div class="card-image contain"></div>',
    '<div class="card-content">',
      '<div class="media">',
        '<div class="media-content">',
          '<p class="title is-5"></p>',
        '</div>',
      '</div>',
      '<div class="content tags"></div>',
    '</div>',
  '</article>'
].join('');

Main.LIST_HEADER_TEMPLATE = [
  // '<div id="featured_post" class="hero-body cardheader">',
    '<div class="container has-text-centered featured-post">',
      '<h3 class="subtitle">Featured Lesson</h1>',
      '<h1 class="title"></h1>',
      '<div class="columns">',
        '<div class="column">',
          '<div class="card-image contain"></div>',
        '</div>',
      '</div>',
    '</div>',
  // '</div>'
].join('');

Main.BG_CLASSES = ['bg01','bg02','bg03','bg04','bg05','bg06','bg07','bg08','bg09','bg10','bg11','bg12'];

Main.GROUP_CARD_TEMPLATE = [
  '<article class="card">',
    '<div class="card-image contain"></div>',
    '<div class="card-content">',
      '<div class="media">',
        '<div class="media-content">',
          '<p class="title is-5"></p>',
        '</div>',
      '</div>',
    '</div>',
  '</article>'
].join('');

Main.POST_SUBJECTS = {
  japanese: '国語',
  science: '理科',
  math: '算数/数学',
  music: '音楽'
};

Main.POST_GRADES = {
  1: '小学1年生',
  2: '小学2年生',
  3: '小学3年生',
  4: '小学4年生',
  5: '小学5年生',
  6: '小学6年生',
  7: '中学1年生',
  8: '中学2年生',
  9: '中学3年生',
  10: '高校1年生',
  11: '高校2年生',
  12: '高校3年生'
};
