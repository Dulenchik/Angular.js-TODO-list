function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('projects', {
    url: '/',
    controller: 'ProjectsCtrl as projects_ctrl',
    templateUrl: 'projects.html',
    title: 'Projects'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
