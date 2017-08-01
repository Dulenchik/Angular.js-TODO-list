import angular from 'angular';
const _ = require('lodash');

function ProjectsCtrl(ProjectsStore) {
  'ngInject';

  const self = this;
  self.projects = ProjectsStore.projects;

  self.add = () => {
    const newProject = angular.copy(self.newProject);
    self.projects.push(newProject);

    self.resetNewProject();
  }

  self.delete = (project) => {
    _.remove(self.projects, project);
  }

  self.resetNewProject = () => {
    self.newProject = { title: 'New project', tasks: [], isEditable: false };
  }

  self.resetNewProject()
}

export default {
  name: 'ProjectsCtrl',
  fn: ProjectsCtrl
};
