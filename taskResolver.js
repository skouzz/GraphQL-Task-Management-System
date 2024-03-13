let tasks = [
    {
      id: '1',
      title: 'Développement Front-end pour Site E-commerce',
      description: 'Créer une interface utilisateur réactive en utilisant React et Redux pour un site e-commerce.',
      completed: false,
      duration: 10 // Exemple de valeur pour la durée
    },
    {
      id: '2',
      title: 'Développement Back-end pour Authentification Utilisateur',
      description: 'Implémenter un système authentification et autorisation pour une application web en utilisant Node.js, Express, et Passport.js',
      completed: false,
      duration: 20 // Exemple de valeur pour la durée
    },
    {
      id: '3',
      title: 'Tests et Assurance Qualité pour Application Web',
      description: 'Développer et exécuter des plans de test et des cas de test complets.',
      completed: false,
      duration: 15 // Exemple de valeur pour la durée
    }
  ];
  
  const taskResolver = {
    task: ({ id }) => tasks.find(task => task.id === id),
    tasks: () => tasks,
    addTask: ({ title, description, completed, duration }) => {
      const task = {
        id: String(tasks.length + 1),
        title,
        description,
        completed,
        duration,
      };
      tasks.push(task);
      return task;
    },
    completeTask: ({ id }) => {
      const taskIndex = tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        return tasks[taskIndex];
      }
      return null;
    },
    updateTask: ({ id, title, description, completed, duration }) => {
      const taskIndex = tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        if (title !== undefined) tasks[taskIndex].title = title;
        if (description !== undefined) tasks[taskIndex].description = description;
        if (completed !== undefined) tasks[taskIndex].completed = completed;
        if (duration !== undefined) tasks[taskIndex].duration = duration;
        return tasks[taskIndex];
      }
      return null;
    },
    deleteTask: ({ id }) => {
      const taskIndex = tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        const deletedTask = tasks.splice(taskIndex, 1)[0];
        return deletedTask;
      }
      return null;
    },
  };
  
  module.exports = taskResolver;
  