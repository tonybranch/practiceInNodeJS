const os = require('os')

console.log('Операционная система:', os.platform())
console.log('Архитектура процессора:', os.arch())
console.log('Информация по процессорам:', os.cpus())