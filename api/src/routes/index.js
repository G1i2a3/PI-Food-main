const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Recipe, Diet } = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', function (req, res, next) { //    /recipes?name:"..."
  const {name} = req.query 
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

router.post('/recipes', async function (req, res, next)  {
  try {

    const {name, resumen, diet} = req.query 
    //   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
    //   - Crea una receta en la base de datos relacionada con sus tipos de dietas.

    
    const recetaNuevaEnbd = await Recipe.create(
      { name, 
        resumen,
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

    const {name} = req.query 
    //   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
    //   - Crea una receta en la base de datos relacionada con sus tipos de dietas.

    
    const dietaNueva = await Diet.create( { name } );

    console.log("await res: ", dietaNueva)

    res.send("Dieta creada exitosamente!");
  } catch (err) {
    console.log("ERROR: ", err)
    res.status(500).send(err.toString())
  }
})



module.exports = router;
