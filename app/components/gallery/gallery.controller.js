GalleryController.$inject = ['$http'];
function GalleryController($http) {
    var vm = this;

    vm.init =  init;
    vm.getGallery = getGallery;


    (function initController() {
        vm.getGallery();
    })();


    function init() {
      vm.selected = [
        vm.gallery.birthstones[0],
        vm.gallery.elements[1],
        vm.gallery.enigma[2],
        vm.gallery.lemuria[3],
        vm.gallery.birthstones[4],
        vm.gallery.elements[5],
        vm.gallery.enigma[6],
        vm.gallery.lemuria[7]
      ];
    };
    function getGallery() {
      var url = 'assets/data/gallery.json';
      $http.get(url).then(function(response) {
        if(response.status == 200) {
          vm.gallery = response.data;
          console.log(response.data);
          vm.init();
        }
      });
    }

}
