const convertData = (oldData: any) => {
  const newData: Array<any> = [];
  
  const countries = Array.from(
    new Set(oldData.flatMap((od: any) => [od.origin, od.destination]))
  ).sort();

  countries.forEach((c: any) => {
    const relatedData = oldData.filter((od:any) => od.origin === c || od.destination === c);

    newData.push({
      country: c,
      passengerCount: relatedData.length,
      data: relatedData
    });
  });
  
  return newData;
}

export default convertData;