class DoMockSdk {
  constructor(options) {
    this.options = options;
    this.account = Account;
    this.compute = Compute;
    this.networking = Networking;
    this.storage = Storage;
  }
}

class Account {
  getProfile(params, cb) {
    this.respObj(params, cb);
  }

  listSshKeys(params, cb) {
    this.respObj(params, cb);
  }

  getSshKey(params, cb) {
    this.respArr(params, cb);
  }

  createSshKey(params, cb) {
    this.respObj(params, cb);
  }

  updateSshKey(params, cb) {
    this.respObj(params, cb);
  }

  deleteSshKey(params, cb) {
    this.respObj(params, cb);
  }

  respObj(params, cb) {
    if (params) {
      cb(null, {});
    } else {
      cb(true, null);
    }
  }

  respArr(params, cb) {
    if (params) {
      cb(null, []);
    } else {
      cb(true, null);
    }
  }
}

class Compute {
  list(params, cb) {
    this.respObj(params, cb);
  }

  listByID(params, cb) {
    this.respObj(params, cb);
  }

  create(params, cb) {
    this.respArr(params, cb);
  }

  listKernels(params, cb) {
    this.respObj(params, cb);
  }

  listSnapshots(params, cb) {
    this.respObj(params, cb);
  }

  listBackups(params, cb) {
    this.respObj(params, cb);
  }

  delete(params, cb) {
    this.respArr(params, cb);
  }

  deleteByTag(params, cb) {
    this.respObj(params, cb);
  }

  listNeighbors(params, cb) {
    this.respObj(params, cb);
  }

  respObj(params, cb) {
    if (params) {
      cb(null, {});
    } else {
      cb(true, null);
    }
  }

  respArr(params, cb) {
    if (params) {
      cb(null, []);
    } else {
      cb(true, null);
    }
  }
}

class Networking {
  list(params, cb) {
    this.respObj(params, cb);
  }

  listByID(params, cb) {
    this.respObj(params, cb);
  }

  add(params, cb) {
    this.respArr(params, cb);
  }

  remove(params, cb) {
    this.respObj(params, cb);
  }

  update(params, cb) {
    this.respObj(params, cb);
  }

  delete(params, cb) {
    this.respObj(params, cb);
  }

  createForwardingRules(params, cb) {
    this.respArr(params, cb);
  }

  deleteForwardingRules(params, cb) {
    this.respObj(params, cb);
  }

  respObj(params, cb) {
    if (params) {
      cb(null, {});
    } else {
      cb(true, null);
    }
  }

  respArr(params, cb) {
    if (params) {
      cb(null, []);
    } else {
      cb(true, null);
    }
  }
}

class Storage {
  getProfile(params, cb) {
    this.respObj(params, cb);
  }

  listSshKeys(params, cb) {
    this.respObj(params, cb);
  }

  getSshKey(params, cb) {
    this.respArr(params, cb);
  }

  createSshKey(params, cb) {
    this.respObj(params, cb);
  }

  updateSshKey(params, cb) {
    this.respObj(params, cb);
  }

  deleteSshKey(params, cb) {
    this.respObj(params, cb);
  }

  respObj(params, cb) {
    if (params) {
      cb(null, {});
    } else {
      cb(true, null);
    }
  }

  respArr(params, cb) {
    if (params) {
      cb(null, []);
    } else {
      cb(true, null);
    }
  }
}

module.exports = new DoMockSdk();
