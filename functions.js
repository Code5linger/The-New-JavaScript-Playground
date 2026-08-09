const nemo = [
  'Marlin',
  'Dory',
  'Gill',
  'Bloat',
  'Peach',
  'Gurgle',
  'Bubbles',
  'Deb',
  'Jacques',
  'Nigel',
  'Crush',
  'Squirt',
  'Bruce',
  'Anchor',
  'Chum',
  'Mr. Ray',
  'Coral',
  'Darla',
  'Philip Sherman',
  'Pearl',
  'Sheldon',
  'Tad',
  'nemo',
];

const largeArray = new Array(100000).fill('nemo');

function findNemo(array) {
  let time0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === 'nemo') {
      console.log('Found Nemo!🔥');
    }
  }
  let time1 = performance.now();
  console.log('Finding Nemo took ' + Math.floor(time1 - time0) + '/ms');
}

findNemo(largeArray);
