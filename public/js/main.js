// var console = { log: function() {} }; // comment out for production mode

function Main() {
  this.setup(); // default setting, do not remove
  this.init();
}

Main.prototype.init = function() {
  // code someting here

};



// ------------------------------------------------------------------------
// default setting
// ------------------------------------------------------------------------
Main.prototype.setup = function(){
  this.loginMessage = document.getElementById('login-message');
  this.loginMessageText = document.getElementById('login-message-text');
  this.tabs = document.getElementsByClassName("tab");
  this.setTabAction(this.tabs);
  this.checkFb();
};

// settings for auth
Main.prototype.fbAuthOpts = function(scope){
  return {
    // called just before sending signIn request (after button clicked)
    beforeSignIn: function(){
      console.log('overload beforeSignIn 2');
      // validation
      if(this.emailInput.value.length < 4){
        alert('invalid email address');
        return false;
      }
      if(this.passwordInput.value.length < 2){
        alert('invalid password address');
        return false;
      }
      // change the button state into loading
      this.signInButton.classList.add('is-loading');
      return true;
    },
    beforeSignOut: function(){
      return true;
    },
    // called after signin successfully
    afterSignInSuccess: function(value){
      console.log('overload afterSignInSuccess 2', value);
      // remove loading state from the button
      this.signInButton.classList.remove('is-loading');
    },
    // called after signin fail
    afterSignInFailure: function(error){
      console.log('after signIn Failure 2', error);
      // remove loading state from the button
      this.signInButton.classList.remove('is-loading');
      // show error message
      scope.loginMessageText.innerHTML = error.message;
      scope.loginMessage.style.display = 'block';
    },
    // called after auth state changed into login
    afterAuthStateChangedOn: function(user){
      // hide login section and show main section
      scope.openSection(['main-section'], true);
      console.log('after auth state changed on', user);
      window.currentUser = user;
    },
    // called after auth state changed into logout
    afterAuthStateChangedOff: function(){
      // show login section and hide main section
      window.currentUser = null;
      scope.openSection(['login-section'], true);
      console.log('after auth state changed off');
    }
  };
};

Main.prototype.setTabAction = function(tabs){
  if(!tabs) return;

  var func = function(){
    var tabs = this.parentNode.children;
    for(var j = 0; j < tabs.length; j++){
      var tab = tabs[j];
      var link = tab.children[0];
      var blockName = link.getAttribute('href').replace(/^#/,'');
      var tabBlock = document.getElementById(blockName);
      if(tab === this){
        tabBlock.style.display = 'block';
        this.classList.add('is-active');
      } else {
        tabBlock.style.display = 'none';
        tab.classList.remove('is-active');
      }
    }
  };

  for(var i = 0, len = tabs.length; i < len; i++){
    tabs[i].addEventListener("click", func);
  }
};

Main.prototype.fbAuthCallback = function(){
  console.log('callbacked');
  var loadingBlock = document.getElementById('loading-block');
  loadingBlock.style.display = 'none';
};

Main.prototype.openSection = function(sectionIds, isSingle){
  if(typeof isSingle === 'undefined') isSingle = true;
  var sections = document.getElementsByTagName('section');
  for(var i = 0; i < sections.length; i++){
    var section = sections[i];
    if(sectionIds.indexOf(section.id) > -1){
      section.style.display = 'block';
    } else if(isSingle) {
      section.style.display = 'none';
    }
  }
};

Main.prototype.checkFb = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
      'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
    window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
      'actually a Firebase bug that occurs rarely. ' +
      'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
      'and make sure the storageBucket attribute is not empty. ' +
      'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
      'displayed there.');
  }
};

window.onload = function() {
  window.main = new Main();
  window.fbAuth = new FbAuth(main.fbAuthCallback, main.fbAuthOpts(main));
};
