export const createRecipeOnDB = async (recetaEntera) => {
  try {
    // const refinedSteps = []
    // recetaEntera.analyzedInstructions[0].steps.map((s)=> {refinedSteps.push(s.step)}    )  // [... {step: ""}, {...}, {}   ]
    // console.log(refinedSteps)
    // dishName, dishResume, healthScore, dietTypes, stepByStep, dishImage}
      const recetaACrear = {
        title: recetaEntera.dishName,
        healthScore: recetaEntera.healthScore,
        summary: recetaEntera.dishResume,
        steps: recetaEntera.stepByStep.split(","),
        diets: recetaEntera.dietTypes,
        image: recetaEntera.dishImage
      }
      console.log(recetaACrear)
      console.log(recetaEntera)

      const data = await fetch('http://localhost:3001/createRecipe', {
          method: 'POST',
          mode: 'cors',
          referrerPolicy: 'no-referrer',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(recetaACrear),
      })
      console.log(data)
  } catch (err) {
      console.log('ERROR: ', err)
  }
}