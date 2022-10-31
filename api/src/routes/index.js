const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Recipe } = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', function (req, res, next) { //    /recipes?name:"..."
  const {name} = req.query 
  console.log(req.query);
  // Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
  // Si no existe ninguna receta mostrar un mensaje adecuado (hacer try{} catch{})
  res.send("aaaaaaaaa!!");
})

router.get('/recipes/:idReceta', function (req, res, next) {   
  console.log(req.params);
  // - Obtener el detalle de una receta en particular
  // - Debe traer solo los datos pedidos en la ruta de detalle de receta
  // - Incluir los tipos de dieta asociados
  res.send("bbbba!!");
})

router.post('/recipes', async function (req, res, next)  {
  try {

    const {name} = req.query 
    //   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
    //   - Crea una receta en la base de datos relacionada con sus tipos de dietas.
    
    const jane = await Recipe.create({ name });
    console.log("await res: ", jane)

    res.send("aaaaaaaaa!!");
  } catch (err) {
    console.log("ERROR: ", err)
    res.status(500).send(err.toString())
  }
})

router.get('/diets', function (req, res, next) {
  console.log(req.body);
//   - Obtener todos los tipos de dieta posibles
//   - En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular [acá](https://spoonacular.com/food-api/docs#Diets)
  res.send("aaaaaaaaa!!");
})



module.exports = router;
