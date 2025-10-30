const spawn = require('cross-spawn');
const jmeter = spawn('./jmeter/apache-jmeter-5.5/bin/jmeter', ['-n','-t','./jmeter/testplan.jmx','-R','jmeter-slave1,jmeter-slave2','-l','./jmeter/results.jtl','-e','-o','./jmeter/reports','-j','./jmeter/jmeter.log'], { stdio: 'inherit' });
jmeter.on('close', code => { console.log(`Distributed JMeter finished with exit code ${code}`); });
