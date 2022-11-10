// export const getFavoriteRecipes = async (recetaEntera) => {
//   try {
//       const data = await fetch('http://localhost:3001/favoriteRecipes', {
//           method: 'GET',
//           mode: 'cors',
//           referrerPolicy: 'no-referrer',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(recetaEntera),
//       })
//       console.log(data)
//   } catch (err) {
//       console.log('ERROR: ', err)
//   }
// }