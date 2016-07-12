jQuery(document).ready(function($) {
  FilterJS(friends, ".recipients", {
    template: '#template',
    search: { ele: '#search_box' }
  });
});
