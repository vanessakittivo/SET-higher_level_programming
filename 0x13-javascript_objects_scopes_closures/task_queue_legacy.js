class TaskQueue {
  constructor (name) {
    this.queueName = name;
    this.tasks = [];
    this.isProcessing = false;
  }

  addTask (taskFn, priority) {
    if (!TaskQueue.isValidTask(taskFn)) {
      return false;
    }

    this.tasks.push({ taskFn, priority, timestamp: Date.now() });
    return true;
  }

  startProcessing () {
    if (this.tasks.length === 0 || this.isProcessing) {
      return;
    }

    console.log(`Starting queue ${this.queueName}.`);
    this._startProcessing();
  }

  notifyHighPriority (priority) {
    if (priority > 9) {
      console.warn(`High priority task added to ${this.queueName}.`);
    }
  }

  static isValidTask (taskFn) {
    return typeof taskFn === 'function';
  }

  _startProcessing () {
    this.isProcessing = true;
    // ... logic to process tasks ...
  }
}

module.exports = TaskQueue;
