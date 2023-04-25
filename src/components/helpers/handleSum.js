const handleSum = (data, objKey) => {
    const mapArr = data.map(item => item[objKey]); // Access the object property dynamically
    const sum = mapArr.reduce((acc, currVal) => {
      return acc + currVal;
    }, 0);

    return sum;
  };

  export default handleSum
