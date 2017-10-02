const lawgs = require('lawgs');

lawgs.config({
	aws: {
		accessKeyId: 'some aws key',
		secretAccessKey: 'some secret aws key',
		region: 'us-east-1'
	}
});

const logger  = lawgs.getOrCreate('Check'); /* LogGroup */
logger.log('sanity check', 'here1')

module.exports = {
  handle: (handler) => {
    process.stdin.on('data', (chunk) => {
      try {
        handler(JSON.parse(chunk), (err, value) => {
          if (err) {
            handleError(err);
          } else {
            setTimeout(() => {
              console.log(JSON.stringify(value));
              process.exit(0), 10000
            });
          }
        });
      } catch (err) {
        handleError(err);
      }
    });
  },
  log
};

function handleError(err) {
  logger.log('error', err);
  console.error('error!', JSON.stringify(err));
  setTimeout(() => process.exit(1), 10000);
}

function log(data) {
  logger.log('opts', data);
}