const { Terminal } = require('metro-core');

const TerminalReporter = require('metro/private/lib/TerminalReporter').default;

class FilteredReporter extends TerminalReporter {
  constructor(terminal) {
    super(terminal);
    this._filteredBuilds = new Set();
  }

  update(event) {
    if (event.type === 'bundle_build_started' && event.bundleDetails?.bundleType === 'map') {
      this._filteredBuilds.add(event.buildID);
      return;
    }

    if (event.buildID != null && this._filteredBuilds.has(event.buildID)) {
      if (event.type === 'bundle_build_done' || event.type === 'bundle_build_failed') {
        this._filteredBuilds.delete(event.buildID);
      }
      return;
    }

    super.update(event);
  }
}

module.exports = new FilteredReporter(new Terminal(process.stdout));
