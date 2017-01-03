@component("app-scaffold")
class AppScaffold extends polymer.Base {

  @property({type: Boolean, value: false})
  signedIn: boolean;


  @computed()
  computeLockIcon(signedIn) {
     if (signedIn) {
      return 'lock-open';
     }
     else {
      return 'lock';
     }
  }

  lock(event) {
    this.$.auth.signOut();
  }

  checkData() {
    console.log(this.$.auth.user.uid);
    console.log(this.$.query.data);
  }

  signIn(event) {
    console.log(this.$.auth);
    this.$.auth.signInWithPopup();
  }
}

AppScaffold.register();