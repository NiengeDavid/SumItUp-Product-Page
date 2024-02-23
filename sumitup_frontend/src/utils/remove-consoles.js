export const GlobalDebug = (function () {
    var savedConsole = console;
    var originalConsole = {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error
    };

    /**
    * @param {boolean} debugOn
    * @param {boolean} suppressAll
    */
    return function (debugOn, suppressAll) {
      var suppress = suppressAll || false;
      if (debugOn === false) {
        // supress the default console functionality
        console.log = function () {};
        console.info = function () {};
        console.warn = function () {};
        console.error = function () {};
        // supress all type of consoles
        if (suppress) {
          console.log = function () {};
          console.info = function () {};
          console.warn = function () {};
          console.error = function () {};
        } else {
          console.log = originalConsole.log;
          console.info = originalConsole.info;
          console.warn = originalConsole.warn;
          console.error = originalConsole.error;
        }
      } else {
        console.log = originalConsole.log;
        console.info = originalConsole.info;
        console.warn = originalConsole.warn;
        console.error = originalConsole.error;
      }
    };
})();
