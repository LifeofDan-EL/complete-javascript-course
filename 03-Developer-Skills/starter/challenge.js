const printForecast = function (arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}ºC in ${i} days`);
  }
};

printForecast([17, 21, 23]);

printForecast([12, 5, -5, 0, 4]);
