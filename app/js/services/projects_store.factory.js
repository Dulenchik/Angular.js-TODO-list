function ProjectsStore() {
  // 'ngInject';

  const data = {
    projects: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        tasks: [
          { isDone: false, title: 'My task 1', position: 2 },
          { isDone: true, title: 'My task 0', position: 0 },
          { isDone: false, title: 'Buy bread', position: 1 }
        ]
      },
      {
        title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tasks: [
          { isDone: true, title: 'Learn AngularJS!', position: 0 }
        ]
      },
      {
        title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
        tasks: []
      }
    ]
  };

  return data;
}

export default {
  name: 'ProjectsStore',
  fn: ProjectsStore
};
