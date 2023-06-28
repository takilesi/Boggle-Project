let Typo = require('typo-js-ts').Typo;
 
new Typo("en_US")
  .ready.then(dictionary => {
    // Promise that dictionary is loaded
    // do worl
    // test if mispelled is the corect spelling for en_US
    console.log(dictionary.check("etiquette"));
  })
  .catch((error) => {
    // dictionary was not loaded
    console.error(error);
  });

  