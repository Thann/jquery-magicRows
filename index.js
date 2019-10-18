// Inserts invisible rows so when one el expands the row below always moves down
(function($) {
  $.fn.magicRows = function() {
    this.each((i, el) => {
      i = i+1;
      let sm, md, lg;
      // console.log("EL", "4:", i % 4, "3:", i % 3, "2:", i % 2,  el)
      if (i === 1)
        return;
      if (i % 4 === 0)
        lg = true;
      if (i % 3 === 0)
        md = true;
      if (i % 2 === 0)
        sm = true;
      if (sm || md || lg) {
        let klass = 'col-sm-12';
        if (!sm) klass += ' hidden-sm';
        if (!md) klass += ' hidden-md';
        if (!lg) klass += ' hidden-lg';
        $('<div class="'+klass+'">').insertAfter(el);
      }
    });
    return this;
  };
})((function() {
  // Load jQuery from node or browser
  try {
    return require('jquery');
  } catch(e) {
    return jQuery;
  }
})());
