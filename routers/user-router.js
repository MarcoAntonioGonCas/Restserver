const {Router} = require('express');

const { usuarioGet,
    usuarioPost,
    usuarioPut,
        usuarioDelete,
        usuarioPatch
    } = require('../controllers/user.controller');
    
    
const router = Router();

router.get('/', usuarioGet)

router.post('/', usuarioPost)
//routas de segmentacion
router.put('/:id', usuarioPut)
router.delete('/', usuarioDelete)
router.patch("/",usuarioPatch)




module.exports = router;