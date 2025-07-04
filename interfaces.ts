const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printCar = (car: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`name: ${car.name} year: ${car.year} broken ${car.broken} `);
};

printCar(oldCivic);
