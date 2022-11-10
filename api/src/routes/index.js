const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Recipe, Diet } = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/// PARA GUARDAR LAS FAV EN LA BD PUDO HACER UN CREATE CON ESOS DATOS !!!!!!!!!!!!!!!!


router.get('/recipes', function (req, res, next) { //    /recipes?name:"..."
  const {title} = req.query 
  console.log(req.query);
  // Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
  // Si no existe ninguna receta mostrar un mensaje adecuado (hacer try{} catch{})

  // Recipe.findAll()
  // const {data} = await axios.get("apiexternaderecetas")
  // cost response = [...data, ...lasotras]

  res.send("aaaaaaaaa!!");
})

router.get('/recipes/:idReceta', async function (req, res, next) {  
  // - Obtener el detalle de una receta en particular
  // - Debe traer solo los datos pedidos en la ruta de detalle de receta
  // - Incluir los tipos de dieta asociados
  try {
    const recetasConEsteId = await Recipe.findAll({
      where: {
        id: req.params.idReceta
      }
    });

    if (recetasConEsteId.length < 1){
      res.send('No hay recetas con este ID')
    }
    console.log(recetasConEsteId);
    
    res.send(recetasConEsteId);
  } catch (err) {
    console.log("ERROR: ", err)
    res.status(400).send(err.toString())
  }

})

router.post('/createRecipe', async function (req, res, next)  {
  try {

    const {title, summary, diets, steps, healthScore, image} = req.body 

    //   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
    //   - Crea una receta en la base de datos relacionada con sus tipos de dietas.

    
    const recetaNuevaEnbd = await Recipe.create(
      { title, 
        summary,
        steps,
        healthScore,
        image,
        diets: [
          {name: diet}
        ]
      },{
        include: [ Diet ]
      }
      );

    console.log("await res: ", recetaNuevaEnbd)

    res.send("Receta creada exitosamente!");
  } catch (err) {
    console.log("ERROR: ", err)
    res.status(500).send(err.toString())
  }
})

router.get('/diets', async function (req, res, next) {
  console.log(req.body);
//   - Obtener todos los tipos de dieta posibles
//   - En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos 
//con los tipos de datos indicados por spoonacular [acá](https://spoonacular.com/food-api/docs#Diets)

 const dietas = await Diet.findAll()
  res.send(dietas);
})


router.post('/diets', async function (req, res, next)  {
  try {

    const {title} = req.query 
    //   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
    //   - Crea una receta en la base de datos relacionada con sus tipos de dietas.

    
    const dietaNueva = await Diet.create( { title } );

    console.log("await res: ", dietaNueva)

    res.send("Dieta creada exitosamente!");
  } catch (err) {
    console.log("ERROR: ", err)
    res.status(500).send(err.toString())
  }
})

router.post('/addToFavorites', async function (req, res, next)  {
  try {

    //   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
    //   - Crea una receta en la base de datos relacionada con sus tipos de dietas.
    
    // SI la receta esta en nuestra BD cambiamos la propiedad IsFavprite a TRUE
    // Si la receta es de la api, la guardamos (creamos) en nuestra BD + propiedad isFavorite: true
    // y El ID va a ser ID + healthscore + ready in minutes
    // para saber si la receta es de la BD o de la api buesco si la receta tiene la proviedad cheap
    //  
  const {id, title, image, healthScore, readyInMinutes, servings, weightWatcherSmartPoints, summary, steps, diet} = req.body

    if (req.body.hasOwnProperty('cheap')) {
      
      const addToFavorites = await Recipe.create(
        { title, 
          image,
          isFavorite: true,
          healthScore,
          readyInMinutes,
          servings,
          weightWatcherSmartPoints,
          summary,
          steps,
          id: id.toString().concat(healthScore, readyInMinutes)
          // diets: [
          //   {name: diet}
          // ]
        },{
          include: [ Diet ]
        }
        );

    }
    else {
      const recetaBuscadaParaFavs = await Recipe.findByPk(id)
      recetaBuscadaParaFavs.update({ isFavorite: true })
    }
    
    
    // if(await Recipe.findByPk(req.body.id)){
      
      // }
      
      console.log(req.body)
      
    

    // console.log("await res: ", addToFavorites)

    res.send("Receta agregada exitosamente!");
  } catch (err) {
    console.log("ERROR: ", err)
    res.status(500).send(err.toString())
  }
})



module.exports = router;
