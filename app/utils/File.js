'use strict';

import fs from 'fs';
import glob from 'glob';
import path from 'path';

const PASSEME_KEYS_PATH = path.resolve('./passeme.keys');

const pathForLogin = (login) => {
  return PASSEME_KEYS_PATH + '/' + login.id + '.passeme';
}

export const loadLogins = () => {
  let fileNames = glob.sync(PASSEME_KEYS_PATH + '/*.passeme')
  let logins = [];

  fileNames.forEach((file) => {
    let login = JSON.parse(fs.readFileSync(file));
    logins.push(login);
  });

  return logins;
}

export const save = (login, callback) => {
  fs.writeFile(pathForLogin(login), JSON.stringify(login), callback);
}
