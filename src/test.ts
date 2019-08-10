import { Rkv } from './index';
let inventory = new Rkv();
let disk0 = inventory.addChild( {type: 'disk', desc: 'disk0', size: '1024000'} );
let disk1 = inventory.addChild( {type: 'disk', desc: 'disc1', size: '2048000'} );
let part0 = inventory.addChild( {type: 'partition', desc: 'part0', size: '51200'}, disk0, disk1 );
let part1 = inventory.addChild( {type: 'partition', desc: 'part1', size: '81960'}, disk1 );
console.log( JSON.stringify( inventory ,null, 1 ) );