v-tab-bar
=========

> A Vue Tab Bar Navigator

Installation
------------

### Using yarn

`yarn add v-tab-bar`

### Using npm

`npm i --save v-tab-bar`

Demo
----

[DEMO](http://paliari.github.io/v-tab-bar)

Usage
-----

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'

import VTabBar from 'v-tab-bar'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-tab-bar/dist/v-tab-bar.css'

Vue.use(VTabBar)
```

### Browser

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="v-tab-bar/dist/v-tab-bar.css"></link>
<script src="v-tab-bar/dist/v-tab-bar.js"></script>
```

### Usage example

```html
<router-view class="v-tab-bar-router-view"></router-view>

<v-tab-bar>
  <v-tab-bar-item to="/home" label="Home">
    <i class="fa fa-home"></i>
  </v-tab-bar-item>
  <v-tab-bar-item to="/list" label="List">
    <i class="fa fa-list"></i>
  </v-tab-bar-item>
  <v-tab-bar-item to="/account" label="Account">
    <i class="fa fa-user"></i>
  </v-tab-bar-item>
  <v-tab-bar-item to="/config">
    <i class="fa fa-bars"></i>
  </v-tab-bar-item>
  <v-tab-bar-item to="/options" label="Options">
    <i class="fa fa-cog"></i>
  </v-tab-bar-item>
</v-tab-bar>
```

License
-------

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
