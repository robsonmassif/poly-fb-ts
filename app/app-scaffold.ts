@component("app-scaffold")
class AppScaffold extends polymer.Base {

  @property({
    type: Array,
    value: [{R:  176 , G:  41 , B:  22 },
            {R:  77 , G:  91 , B:  57 },
            {R:  254 , G:  194 , B:  125 },
            {R:  119 , G:  163 , B:  113 },
            {R:  1 , G:  213 , B:  235 },
            {R:  124 , G:  24 , B:  195 },
            {R:  201 , G:  163 , B:  95 },
            {R:  16 , G:  89 , B:  227 },
            {R:  244 , G:  222 , B:  208 },
            {R:  5 , G:  192 , B:  236 },
            {R:  6 , G:  104 , B:  53 },
            {R:  187 , G:  88 , B:  181 },
            {R:  97 , G:  201 , B:  236 },
            {R:  221 , G:  183 , B:  167 },
            {R:  125 , G:  211 , B:  24 },
            {R:  85 , G:  173 , B:  158 },
            {R:  141 , G:  247 , B:  213 },
            {R:  77 , G:  132 , B:  239 },
            {R:  90 , G:  40 , B:  170 },
            {R:  226 , G:  17 , B:  126 },
            {R:  145 , G:  203 , B:  196 },
            {R:  141 , G:  81 , B:  155 },
            {R:  92 , G:  13 , B:  56 },
            {R:  205 , G:  11 , B:  220 },
            {R:  244 , G:  208 , B:  109 },
            {R:  253 , G:  1 , B:  41 },
            {R:  251 , G:  162 , B:  109 },
            {R:  86 , G:  103 , B:  203 },
            {R:  19 , G:  224 , B:  205 },
            {R:  228 , G:  240 , B:  9 },
            {R:  240 , G:  134 , B:  214 },
            {R:  247 , G:  196 , B:  3 },
            {R:  176 , G:  190 , B:  16 },
            {R:  5 , G:  153 , B:  109 },
            {R:  204 , G:  167 , B:  47 },
            {R:  231 , G:  137 , B:  33 },
            {R:  54 , G:  77 , B:  17 },
            {R:  123 , G:  144 , B:  216 },
            {R:  186 , G:  120 , B:  132 },
            {R:  189 , G:  119 , B:  195 },
            {R:  171 , G:  87 , B:  204 },
            {R:  40 , G:  192 , B:  212 },
            {R:  73 , G:  64 , B:  134 },
            {R:  176 , G:  188 , B:  110 },
            {R:  94 , G:  123 , B:  207 },
            {R:  84 , G:  13 , B:  200 },
            {R:  152 , G:  229 , B:  33 },
            {R:  215 , G:  181 , B:  24 },
            {R:  140 , G:  252 , B:  232 },
            {R:  131 , G:  128 , B:  244 }]
  })
  foo: {R: number, G: number, B: number};

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
    this.fire('sign-out');
  }

  signIn(event) {
    this.fire('sign-in', null, { bubbles: false });
  }

  ready() {
    console.log("Scaffold Ready!", this.foo);
  }
}

AppScaffold.register();