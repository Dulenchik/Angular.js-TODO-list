import angular from 'angular';
const _ = require('lodash');

function TasksCtrl() {
  'ngInject';

  const self = this;

  self.setTasks = (tasks) => {
    self.tasks = tasks;
  }

  self.add = () => {
    const newTask = angular.copy(self.newTask);
    newTask.position = self.tasks.length;
    self.tasks.push(newTask);

    self.resetNewTask();
  }

  self.moveUp = (task) => {
    const prevPosition = task.position - 1;
    const prev = _.find(self.tasks, (t) => { return t.position === prevPosition });
    if (!prev) return;

    prev.position += 1;
    task.position -= 1;
  }

  self.moveDown = (task) => {
    const nextPosition = task.position + 1;
    const next = _.find(self.tasks, (t) => { return t.position === nextPosition });
    if (!next) return;

    next.position -= 1;
    task.position += 1;
  }

  self.delete = (task) => {
    _.remove(self.tasks, task)
    self.reorderTasks();
  }

  self.reorderTasks = () => {
    const sorted = _.sortBy(self.tasks, 'position');
    _.each(sorted, (t, index) => { t.position = index });
  }

  self.resetNewTask = () => {
    self.newTask = { title: '', isEditable: false };
  }

  self.resetNewTask()
}


export default {
  name: 'TasksCtrl',
  fn: TasksCtrl
};
