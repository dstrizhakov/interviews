setTimeout(() => console.log('timeout1'), 1);
requestAnimationFrame(() => console.log('frame1'))
// 104423
// VM9076:2 frame1
// VM9076:1 timeout1
setTimeout(() => console.log('timeout2'), 0.9);
requestAnimationFrame(() => console.log('frame2'))
// 105865
// VM9090:1 timeout2
// VM9090:2 frame2
requestAnimationFrame(() => console.log('frame3'))
setTimeout(() => console.log('timeout3'), 0);
// 107625
// VM9097:1 timeout3
// VM9097:2 frame3