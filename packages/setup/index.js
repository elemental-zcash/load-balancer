#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

function createFolderIfNotExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}


async function runCommand(command) {
  try {
    const { stdout, stderr } = await exec(command);
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

const main = async () => {
  const HOSTS = process.env.HOSTS;
  if (!HOSTS) {
    process.exit(1);
  }

  const hosts = HOSTS.split(',');

  createFolderIfNotExists('../../certs');

  for (const host of hosts) {
    await runCommand(`cd ../../ && mkcert -cert-file certs/${host}.crt -key-file certs/${host}.key ${host}`);
  }
};

main();

// HOST=elemental-sso.local
// mkdir certs
// mkcert -cert-file certs/$HOST.crt -key-file certs/$HOST.key $HOST
