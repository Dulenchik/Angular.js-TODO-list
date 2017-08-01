function TaskCtrl() {
  'ngInject';

  const self = this;
  self.task = null;

  self.setTask = (task) => {
    self.task = task;
  }

  self.edit = () => {
    self.task.isEditable = true;
    self.task.newTitle = self.task.title;
  }

  self.update = () => {
    self.task.title = self.task.newTitle;
    self.task.isEditable = false;
  }

  self.cancel = () => {
    self.task.isEditable = false;
  }
}


export default {
  name: 'TaskCtrl',
  fn: TaskCtrl
};
