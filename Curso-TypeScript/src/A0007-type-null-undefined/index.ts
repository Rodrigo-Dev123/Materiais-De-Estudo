let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firtsName: string,
  LastName?: string,
): {
  firtsName: string;
  LastName?: string;
} {
  return {
    firtsName,
    LastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (typeof squareOfTwoNumber)
