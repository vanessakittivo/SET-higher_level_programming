// Formats the current date and time and logs a message to the console.
// The output must include the timestamp and the log level in uppercase.
// The level must be 'info', 'warn', or 'error'.
function logWithTimestamp(message, level) {
	console.log(`[${new Date().toISOString()}] ${level.toUpperCase()}: ${message}`);
}
