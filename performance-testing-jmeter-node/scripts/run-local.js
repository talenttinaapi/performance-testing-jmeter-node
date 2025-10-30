const spawn = require('cross-spawn');
const jmeter = spawn('./jmeter/apache-jmeter-5.5/bin/jmeter', ['-n','-t','./jmeter/testplan.jmx','-l','./jmeter/results.jtl','-e','-o','./jmeter/reports','-j','./jmeter/jmeter.log'], { stdio: 'inherit' });
jmeter.on('close', code => { console.log(`JMeter finished with exit code ${code}`); });
