# stylie.modals

100% width tabbed content with some example media queries for smaller screens.
 Inspired by [Responsive full width tabs](http://tympanus.net/codrops/2014/03/21/responsive-full-width-tabs/)

 [API Documenation](https://github.com/typesettin/stylie.notifications/blob/master/doc/api.md)

## Example

Check out `example/index.html`, the example javascript for the example page is `resources/js/example_src.js`

## Installation

```
$ npm install stylie.modals
```

The tab component is a browserify javascript module.

## Usage

*JavaScript*
```javascript
var ComponentTabs = require('periodicjs.stylie.notifications'),
	myTabs;
//initialize nav component after the dom has loaded
window.addEventListener('load',function(){
	var tabelement = document.getElementById('tabs');
	myTabs = new ComponentTabs(tabelement);
	//expose your nav component to the window global namespace
	window.myNav = myNav;
});
```

*HTML*
```html
<html>
	<head>
  	<title>Your Page</title>
  	<link rel="stylesheet" type="text/css" href="[path/to]/stylie.notifications.css">
  	<script src='[path/to/browserify/bundle].js'></script>
	</head>
	<body>
		 <div id="tabs" class="tabs">
      <nav>
        <ul>
          <li>
            tab1
          </li>
          <li>
            tab2
          </li>
          <li>
            tab3
          </li>
        </ul>
      </nav>
      <div class="content">
        <section id="section-1">
          any html
        </section>
        <section id="section-2">
          can go in here
        </section>
        <section id="section-3">
          this is fully responsive
        </section>
      </div>
      <!-- /content -->
    </div>
    <!-- /tabs -->
	</body>
</html>
```

##API

```javascript
myNav.showTab(1); //show tab at index '1'
```
##Development
*Make sure you have grunt installed*
```
$ npm install -g grunt-cli
```

Then run grunt watch
```
$ grunt watch
```
For generating documentation
```
$ grunt doc
$ jsdoc2md lib/**/*.js index.js install.js uninstall.js > doc/api.md
```

##Notes
* The Tab Module uses Node's event Emitter for event handling.
* The Template Generator uses EJS, but you can generate your own mark up
* The less file is located in `resources/stylesheets`