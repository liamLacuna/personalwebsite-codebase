// import React from 'react'
// import useStats from './useStats';

// export default function CountrySelector(){
//   const countries = useStats('https://covid19.mathdro.id/api/countries');
//   if(!countries) return <p>Loading...</p>
//   console.log(countries);
//   return (
//     <div>
//       <p>Countries</p>
//       <p>{countries.countries[0].name}</p>
//       <p>{countries.countries[0].iso2}</p>
//       <select>
//         {Object.entries(countries.countries).map((
//         [name, iso2, iso3]) => (
//           <option key={iso2} value={iso3}>
//             {name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }