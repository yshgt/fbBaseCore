Main.prototype.showGroupDetail = function(post, group, callback){

  this.groupArticleBlock =　this.groupArticleBlock ||  document.getElementById('group-article-block');

  var methods = this.showGroupDetailMethods(this);
  if(!group.id) return;
  if(group.title){
    methods.setupButton(post, group);
    methods.drawContents(post, group);
    methods.openPage(post, group, callback);
  } else {
    var ref = this.groupsDbRef.child(post.id).child(group.id);
    ref.once('value').then(function(snapshot) {
      console.log(snapshot.val());
      group = snapshot.val();
      var refPost = this.postsDbRef.child(post.id);
      refPost.once('value').then(function(snapshot2){
        post = snapshot2.val();
        methods.setupButton(post, group);
        methods.drawContents(post, group);
        methods.openPage(post, group, callback);
      }.bind(this));
    }.bind(this));
  }
};

Main.prototype.showGroupDetailMethods = function(scope){
  return {
    setupButton: function(post, group){
      if(!currentUser.admin) return;
      var btn = document.getElementById('editGroup-button');
      btn.style.display = 'block';
      btn.addEventListener('click', scope.showEditGroup.bind(scope, post, group, null));
    },
    drawContents: function(post, group){
      var subtitle = document.getElementById('groupSubTitle');
      subtitle.innerHTML = [
        "<a href='", "/posts/", post.id, "'>",
        post.title,
        "</a>"
      ].join('');
      document.getElementById('groupTitle').innerHTML = group.title;

      var groupFileImg = document.getElementById('groupFileImg');
      var url = '';
      if(group.file && group.file.urls){
        url = group.file.urls.original;
      } else {
        url = Main.DEFAULT_IMAGEURL;
      }
      scope.setImageUrl(url, groupFileImg, false, 'small', function(){
        groupFileImg.addEventListener('click', function(){
          var imgurl = groupFileImg.getAttribute('src');
          var originalUrl = groupFileImg.getAttribute('data-original-url');
          if(originalUrl) imgurl = originalUrl;
          scope.openImageModal(imgurl);
        });
      });

      var yid = tool.getYoutubeId(group.movie);
      if(yid){
        var movieIframe = document.getElementById('group-movie');
        var yembedUrl = "https://www.youtube.com/embed/" + yid + "?rel=0&showinfo=0";
        movieIframe.setAttribute('src', yembedUrl);
      }

      if(group.article){
        scope.groupArticleBlock.innerHTML = group.article;
        scope.tmpGroupProcess(post, group);
      }
    },

    openPage: function(post, group, callback){
      var pages = ['group-header-section', 'group-body-section'];
      scope.openSection(pages, true);
      callback(post, group);
    }
  };
};

Main.prototype.tmpGroupProcess = function(post, group){
  var items = null;
  if(post.id === '4186tq' || post.id === 'v2np0h' || post.id === 'd60ccb'){
    // post.id === '4186tq'
    if(group.id === '221ocs'){
      items = [
        {imgurl: '/files/rs5-1-01-1.png', yurl: 'https://youtu.be/zZy6bgU6BEU'},
        {imgurl: '/files/rs5-1-01-2.png', yurl: 'https://youtu.be/kHUIS5-uzrE'},
        {imgurl: '/files/rs5-1-01-3.png', yurl: 'https://youtu.be/Hw_SS6jkE4c'},
        {imgurl: '/files/rs5-1-01-4.png', yurl: 'https://youtu.be/t2nlILP7wAw'}
      ];
    } else if(group.id === 'mfg646'){
      items = [
        {imgurl: '/files/rs5-1-02-1.png', yurl: 'https://youtu.be/ikq_u85eCWM'},
        {imgurl: '/files/rs5-1-02-2.png', yurl: 'https://youtu.be/mjkcCHGCmhM'},
        {imgurl: '/files/rs5-1-02-3.png', yurl: 'https://youtu.be/8lF0Dh95OWY'},
        {imgurl: '/files/rs5-1-02-4.png', yurl: 'https://youtu.be/xn_MySCSusI'}
      ];
    } else if(group.id === '1j48al'){
      items = [
        {imgurl: '/files/rs5-1-03-1.png', yurl: 'https://youtu.be/F4Zzyz2-N-M'},
        {imgurl: '/files/rs5-1-03-2.png', yurl: 'https://youtu.be/_2nPOJTTMfk'},
        {imgurl: '/files/rs5-1-03-3.png', yurl: 'https://youtu.be/nSSKF9qbXRE'}
      ];
    } else if(group.id === 'ed3wl6'){
      items = [
        {imgurl: '/files/rs5-1-04-1.png', yurl: 'https://youtu.be/FGUlOkSD3FE'},
        {imgurl: '/files/rs5-1-04-2.png', yurl: 'https://youtu.be/11yUBL_8qEo'},
        {imgurl: '/files/rs5-1-04-3.png', yurl: 'https://youtu.be/uyDo7i-mI-4'},
        {imgurl: '/files/rs5-1-04-4.png', yurl: 'https://youtu.be/yMagid3BCX0'}
      ];
    } else if(group.id === 'xmnoux'){
      items = [
        {imgurl: '/files/rs5-1-05-1.png', yurl: 'https://youtu.be/eSlSVkdXZAw'},
        {imgurl: '/files/rs5-1-05-2.png', yurl: 'https://youtu.be/GWx9GVVe7mU'},
        {imgurl: '/files/rs5-1-05-3.png', yurl: 'https://youtu.be/DvZWG9_HC50'},
        {imgurl: '/files/rs5-1-05-4.png', yurl: 'https://youtu.be/FVAaQT3CCK0'}
      ];
    } else if(group.id === 'rbq3uc'){
      items = [
        {imgurl: '/files/rs5-1-06-1.png', yurl: 'https://youtu.be/yckOW_fLJLk'},
        {imgurl: '/files/rs5-1-06-2.png', yurl: 'https://youtu.be/lMK9kuwydpY'},
        {imgurl: '/files/rs5-1-06-3.png', yurl: 'https://youtu.be/lmMP6m3wUlw'},
        {imgurl: '/files/rs5-1-06-4.png', yurl: 'https://youtu.be/i8isIKQZnww'}
      ];
    } else if(group.id === 'a3khku'){
      items = [
        {imgurl: '/files/rs5-1-07-1.png', yurl: 'https://youtu.be/Kb_UzzGqS1U'},
        {imgurl: '/files/rs5-1-07-2.png', yurl: 'https://youtu.be/3S0It_CWpaA'},
        {imgurl: '/files/rs5-1-07-3.png', yurl: 'https://youtu.be/yUM7cOLmP6o'},
        {imgurl: '/files/rs5-1-07-4.png', yurl: 'https://youtu.be/dGNnrG9AvxI'}
      ];
    } else if(group.id === '4rsr3b'){
      items = [
        {imgurl: '/files/rs5-1-08-1.png', yurl: 'https://youtu.be/Sos0OhzDiWE'},
        {imgurl: '/files/rs5-1-08-2.png', yurl: 'https://youtu.be/W7G2LqV4CQY'},
        {imgurl: '/files/rs5-1-08-3.png', yurl: 'https://youtu.be/4_1neyDlQUk'},
        {imgurl: '/files/rs5-1-08-4.png', yurl: 'https://youtu.be/dUoXL1dTRuU'}
      ];
    } else if(group.id === 'pahvpn'){
      items = [
        {imgurl: '/files/rs5-1-09-1.png', yurl: 'https://youtu.be/WoACnla1CB4'},
        {imgurl: '/files/rs5-1-09-2.png', yurl: 'https://youtu.be/xf2Y7-d3_QM'},
        {imgurl: '/files/rs5-1-09-3.png', yurl: 'https://youtu.be/8ETpAJlSMPA'},
        {imgurl: '/files/rs5-1-09-4.png', yurl: 'https://youtu.be/C1YJn99paYI'}
      ];
    } else if(group.id === '0mqndo'){
      items = [
        {imgurl: '/files/rs5-1-10-1.png', yurl: 'https://youtu.be/VhD_lenJhzc'},
        {imgurl: '/files/rs5-1-10-2.png', yurl: 'https://youtu.be/sXFsVshGM-g'},
        {imgurl: '/files/rs5-1-10-3.png', yurl: 'https://youtu.be/itrhXV7bYc8'},
        {imgurl: '/files/rs5-1-10-4.png', yurl: 'https://youtu.be/ClQD9iPojT0'}
      ];
    }
    // post.id === 'v2np0h'
    else if(group.id === 'q7pzls'){
      items = [
        {imgurl: '/files/rs5-2-01-1.png', yurl: 'https://youtu.be/_IyKuxbX6eE'},
        {imgurl: '/files/rs5-2-01-2.png', yurl: 'https://youtu.be/jA6iU4_PiUE'},
        {imgurl: '/files/rs5-2-01-3.png', yurl: 'https://youtu.be/i8ojcCJAoXs'},
        {imgurl: '/files/rs5-2-01-4.png', yurl: 'https://youtu.be/-LjV6VAQQkg'}
      ];
    } else if(group.id === 'vs4os8'){
      items = [
        {imgurl: '/files/rs5-2-02-1.png', yurl: 'https://youtu.be/AVNrY-_fwfk'},
        {imgurl: '/files/rs5-2-02-2.png', yurl: 'https://youtu.be/HdwhgR9oPrk'},
        {imgurl: '/files/rs5-2-02-3.png', yurl: 'https://youtu.be/w_dq5-IKb3A'},
        {imgurl: '/files/rs5-2-02-4.png', yurl: 'https://youtu.be/MGUVpbYRiEE'}
      ];
    } else if(group.id === 'teuitm'){
      items = [
        {imgurl: '/files/rs5-2-03-1.png', yurl: 'https://youtu.be/wqnpnrl7tXw'},
        {imgurl: '/files/rs5-2-03-2.png', yurl: 'https://youtu.be/BIkktptcbAk'},
        {imgurl: '/files/rs5-2-03-3.png', yurl: 'https://youtu.be/d808eKfyvN4'},
        {imgurl: '/files/rs5-2-03-4.png', yurl: 'https://youtu.be/rS-qOfuOp9M'}
      ];
    } else if(group.id === 'ycf19f'){
      items = [
        {imgurl: '/files/rs5-2-04-1.png', yurl: 'https://youtu.be/9a3AV08P4OM'},
        {imgurl: '/files/rs5-2-04-2.png', yurl: 'https://youtu.be/1gC-ujmXoT0'},
        {imgurl: '/files/rs5-2-04-3.png', yurl: 'https://youtu.be/qPo4TjJ6Zt4'},
        {imgurl: '/files/rs5-2-04-4.png', yurl: 'https://youtu.be/HRfTa1mrYWU'}
      ];
    } else if(group.id === 'de7oc3'){
      items = [
        {imgurl: '/files/rs5-2-05-1.png', yurl: 'https://youtu.be/76PX2vxTRmI'},
        {imgurl: '/files/rs5-2-05-2.png', yurl: 'https://youtu.be/Zt7YF0iAY1Q'},
        {imgurl: '/files/rs5-2-05-3.png', yurl: 'https://youtu.be/FnpOpblZbc0'},
        {imgurl: '/files/rs5-2-05-4.png', yurl: 'https://youtu.be/XvqgrYt-Uzk'}
      ];
    } else if(group.id === 'j2c8ni'){
      items = [
        {imgurl: '/files/rs5-2-06-1.png', yurl: 'https://youtu.be/2hSqlTe4UnY'},
        {imgurl: '/files/rs5-2-06-2.png', yurl: 'https://youtu.be/LiWCGY1s_0Q'},
        {imgurl: '/files/rs5-2-06-3.png', yurl: 'https://youtu.be/dW0_SoU2wYs'},
        {imgurl: '/files/rs5-2-06-4.png', yurl: 'https://youtu.be/fwAecfv0Yu8'}
      ];
    } else if(group.id === 'nipiw1'){
      items = [
        {imgurl: '/files/rs5-2-07-1.png', yurl: 'https://youtu.be/jqOW-cNCmLc'},
        {imgurl: '/files/rs5-2-07-2.png', yurl: 'https://youtu.be/Lq8pByu2cOs'},
        {imgurl: '/files/rs5-2-07-3.png', yurl: 'https://youtu.be/8h2G7YN09Rs'},
        {imgurl: '/files/rs5-2-07-4.png', yurl: 'https://youtu.be/hsXtxAQgQ3o'}
      ];
    } else if(group.id === 'u6lyok'){
      items = [
        {imgurl: '/files/rs5-2-08-1.png', yurl: 'https://youtu.be/NtzCjl_Ghf8'},
        {imgurl: '/files/rs5-2-08-2.png', yurl: 'https://youtu.be/Agi3SRE53j4'},
        {imgurl: '/files/rs5-2-08-3.png', yurl: 'https://youtu.be/iLOkzs8SNEE'},
        {imgurl: '/files/rs5-2-08-4.png', yurl: 'https://youtu.be/RFI5EHum9kA'}
      ];
    } else if(group.id === 'ykrtvd'){
      items = [
        {imgurl: '/files/rs5-2-09-1.png', yurl: 'https://youtu.be/LIGED4laGAw'},
        {imgurl: '/files/rs5-2-09-2.png', yurl: 'https://youtu.be/FDMWHEpy5Ss'},
        {imgurl: '/files/rs5-2-09-3.png', yurl: 'https://youtu.be/Bnfzz7BNxTU'},
        {imgurl: '/files/rs5-2-09-4.png', yurl: 'https://youtu.be/lSK7_s0XkI8'}
      ];
    } else if(group.id === 'pt9keb'){
      items = [
        {imgurl: '/files/rs5-2-10-1.png', yurl: 'https://youtu.be/o-a8hNrJoxk'},
        {imgurl: '/files/rs5-2-10-2.png', yurl: 'https://youtu.be/4RcCstFLK-s'},
        {imgurl: '/files/rs5-2-10-3.png', yurl: 'https://youtu.be/haSptW8g35M'}
      ];
    } else if(group.id === 'jpbrae'){
      items = [
        {imgurl: '/files/rs5-2-T-1.png', yurl: 'https://youtu.be/i11UNzrUYf4'},
        {imgurl: '/files/rs5-2-T-2.png', yurl: 'https://youtu.be/Eybgu0oz9W0'},
        {imgurl: '/files/rs5-2-T-3.png', yurl: 'https://youtu.be/Zoq5tdEJLdM'},
        {imgurl: '/files/rs5-2-T-4.png', yurl: 'https://youtu.be/cWazEkkiwX8'},
        {imgurl: '/files/rs5-2-T-5.png', yurl: 'https://youtu.be/KHdimSga1Kk'}
      ];
    }
    var block = document.getElementById('group-article-tmp');
    if(block) block.innerHTML = 'Loading...';
    setTimeout(function(){
      this.showPersonalWork(items);
    }.bind(this), 3000);
  }
};

Main.prototype.showPersonalWork = function(items){
  var block = document.getElementById('group-article-tmp');
  if(!block) return;
  var tmpl = function(imgsrc, yurl){
    return [
      '<div class="columns">',
        '<div class="column is-6">',
          '<img src="' + imgsrc + '" style="border:1px solid gray;cursor:pointer;" onclick="main.openImageModal(this.src);">',
        '</div>',
        '<div class="column">',
          '<figure class="video">',
            '<iframe class="group-movies" src="' + yurl + '" frameborder="0" allowfullscreen></iframe>',
          '</figure>',
        '</div>',
      '</div>'
    ].join('');
  };
  var cont = [];
  for(var i = 0, len = items.length; i < len; i++){
    var item = items[i];
    var yid = tool.getYoutubeId(item.yurl);
    var yembedUrl = "https://www.youtube.com/embed/" + yid + "?rel=0&showinfo=0";
    cont.push(tmpl(item.imgurl, yembedUrl));
  }
  block.innerHTML = cont.join('');
};
