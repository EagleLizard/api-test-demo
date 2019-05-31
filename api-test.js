
const { spawn } = require('child_process');

main();

async function main() {
  let serverProcess, testProcess;

  serverProcess = spawn('node', ['main.js']);

  serverProcess.stdout.on('data', data => {
    console.log(data.toString());
  });

  testProcess = spawn('npm', [ 'run', 'jest' ]);

  testProcess.stdout.on('data', data => {
    process.stderr.write(data.toString());
  });

  testProcess.stderr.on('data', data => {
    process.stderr.write(data.toString());
  });
}
