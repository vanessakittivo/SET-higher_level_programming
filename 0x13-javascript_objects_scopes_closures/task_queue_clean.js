class TaskQueue {
  constructor (name) {
    this.queueName = name;
    this.tasks = [];
    this.isProcessing = false;
  }

  addTask (taskFn, priority) {
    if (!taskFn || typeof taskFn !== 'function') {
      console.error('Task must be a function.');
      return;
    }

    this.tasks.push({
      taskFn,
      priority,
      timestamp: Date.now()
    });
  }

  _startProcessing () {
    this.isProcessing = true;
  }
}

function processQueue (queue) {
  if (queue.tasks.length === 1) {
    console.log(`Starting queue ${queue.queueName}.`);
    queue._startProcessing();
  }
}

function notifyHighPriority (queue) {
  const task = queue.tasks[queue.tasks.length - 1];

  if (task && task.priority > 9) {
    console.warn(`High priority task added to ${queue.queueName}.`);
  }
}

module.exports = {
  TaskQueue,
  processQueue,
  notifyHighPriority
};
