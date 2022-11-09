
// export const addRecipeFavorites = async (recetaEntera) => {
//     try {
//       const refinedSteps = []
//       recetaEntera.analyzedInstructions[0].steps.map((s)=> {refinedSteps.push(s.step)}    )  // [... {step: ""}, {...}, {}   ]
//       console.log(refinedSteps)
//         const recetaAMandar = {
//             id: recetaEntera.id,
//             title: recetaEntera.title,
//             healthScore: recetaEntera.healthScore,
//             readyInMinutes: recetaEntera.readyInMinutes,
//             servings: recetaEntera.servings,
//             weightWatcherSmartPoints: recetaEntera.weightWatcherSmartPoints,
//             summary: JSON.stringify(recetaEntera.summary),
//             steps: refinedSteps,
//             diets: recetaEntera.diets,
//             cheap: recetaEntera.cheap,
//             image: recetaEntera.image
//         }

//         console.log(recetaEntera)

//         const data = await fetch('http://localhost:3001/addToFavorites', {
//             method: 'POST',
//             mode: 'cors',
//             referrerPolicy: 'no-referrer',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(recetaAMandar),
//         })
//         console.log(data)
//     } catch (err) {
//         console.log('ERROR: ', err)
//     }
// }

// if (res.status === 200)

export function addRecipeDetail(payload) {
    return {
        type: 'GET_RECIPE_DETAIL',
        payload,
    }
}

export function addRecipeFavorite(recetaEntera) {
    return {
        type: 'ADD_RECIPE_FAVORITE',
        payload: recetaEntera,
    }
}

export function removeMovieFavorite(id) {
    return {
        type: 'REMOVE_RECIPE_FAVORITE',
        payload: id,
    }
}

export function createOwnRecipe(recetaCreadaEntera) {
    return {
        type: 'GET_RECIPE_DETAIL',
        payload: recetaCreadaEntera,
    }
}
