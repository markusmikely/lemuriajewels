var app= angular.module("lemuriaApp", ['ui.router', 'ngMessages'])
	.provider('modalState', modalProvider)
  .run(run)
	.config(config)
	.controller('GalleryController', GalleryController)
	.controller('ContactController', ContactController);
