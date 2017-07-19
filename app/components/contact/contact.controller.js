ContactController.$inject = ['$http'];
function ContactController($http) {
    var vm = this;

    vm.init =  init;
    vm.sendContact = sendContact;

    (function initController() {
        vm.init;
    })();

    function init() {
      vm.contact = {
        'firstname': '',
        'lastname': '',
        'email': '',
        'phone': '',
        'budget': '',
        'looking': '',
        'comments': ''
      };
    }

    function sendContact() {
      $http({
        url: 'app/components/contact/sendMessage.php',
        method : 'POST',
        data: vm.contact,
        headers : {
          'Content-Type': 'application/json',
        },
      }).then(function(response) {
        if(response.status == 200) {
          vm.message = response.data;
        } else {
          vm.message = "Something went wrong, please refresh the page and try again";
        }
      });
    }
}
