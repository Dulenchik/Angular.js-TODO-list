const _ = require('lodash');

function ProjectCtrl() {
  'ngInject';

  const self = this;
  self.project = null;

  self.setProject = (project) => {
    self.project = project;
  }

  self.totalTasks = () => {
    return self.project.tasks.length;
  }

  self.doneTasksCount = () => {
    return _.filter(self.project.tasks, 'isDone').length;
  }

  self.isProjectDone = () => {
    const totalTasksCount = self.totalTasks();
    if (totalTasksCount === 0) return false;
    const doneTasksCount = self.doneTasksCount();

    return totalTasksCount === doneTasksCount;
  }

  self.edit = () => {
    self.project.newTitle = self.project.title;
    self.project.isEditable = true;
  }

  self.update = () => {
    self.project.title = self.project.newTitle;
    self.project.isEditable = false;
  }

  self.cancel = () => {
    self.project.isEditable = false;
  }
}

export default {
  name: 'ProjectCtrl',
  fn: ProjectCtrl
};
