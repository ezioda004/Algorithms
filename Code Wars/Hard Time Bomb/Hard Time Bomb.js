var wireCode;
Array(10).fill(0).forEach((val, i) => global[`boom${i}`] !== undefined ? wireCode = global[`boom${i}`] : null);
Bomb.CutTheWire(wireCode);