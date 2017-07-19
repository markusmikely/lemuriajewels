function modalProvider($stateProvider) {
        var provider = this;
        this.$get = function() {
            return provider;
        }
        this.state = function(stateName, options) {
            var modalInstance;
            $stateProvider.state(stateName, {
                url: options.url,
                onEnter: function($modal, $state) {
                    modalInstance = $modal.open(options);
                    modalInstance.result['finally'](function() {
                        modalInstance = null;
                        if ($state.$current.name === stateName) {
                            $state.go('^');
                        }
                    });
                },
                onExit: function() {
                    if (modalInstance) {
                        modalInstance.close();
                    }
                }
            });
        };
    }
    function config($stateProvider, $urlRouterProvider, modalStateProvider) {

         $urlRouterProvider.otherwise('/');

        var homeState = {
          name: 'home',
	        url: '/',
		      templateUrl : "app/components/home/home.view.htm",
          data : {
               cssClassnames : 'home'
           }
		    }
        var aboutState = {
          name: 'about',
	        url: '/about.html',
		      templateUrl : "app/components/about/about.view.htm",
          data : {
               cssClassnames : 'about'
           }
        };
        var serviceState = {
          name: 'services',
	        url: '/services.html',
		      templateUrl : "app/components/services/services.view.htm",
          data : {
               cssClassnames : 'services'
           }
        };
        var galleryState = {
          name: 'gallery',
	        url: '/gallery.html',
		      templateUrl : "app/components/gallery/gallery.view.htm",
          data : {
               cssClassnames : 'gallery'
           }
        };
        var contactState = {
          name: 'contact',
	        url: '/contact.html',
		      templateUrl : "app/components/contact/contact.view.htm",
          data : {
               cssClassnames : 'contact'
           }
        };
        var faqsState = {
          name: 'faqs',
	        url: '/faqs.html',
		      templateUrl : "app/components/faqs/faqs.view.htm",
          data : {
               cssClassnames : 'faqs'
           }
        };
        var privacyState = {
          name: 'privacy',
	        url: '/privacy.html',
		      templateUrl : "app/components/privacy/privacy.view.htm",
          data : {
               cssClassnames : 'privacy'
           }
        };
        var termsState = {
          name: 'terms',
	        url: '/terms.html',
		      templateUrl : "app/components/terms/terms.view.htm",
          data : {
               cssClassnames : 'terms'
           }
        };
        $stateProvider.state(termsState);
        $stateProvider.state(privacyState);
        $stateProvider.state(faqsState);
        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
        $stateProvider.state(serviceState);
        $stateProvider.state(galleryState);
        $stateProvider.state(contactState);


    }
