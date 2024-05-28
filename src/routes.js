const express = require('express');
const router = express.Router();

const FaltaController = require('./controllers/FaltaController');

router.get('/alunos', FaltaController.buscarTodos);
router.get('/professores', FaltaController.buscarProfessores);
router.get('/disciplinas', FaltaController.buscarDisciplinas);

router.get('/turmas', FaltaController.buscarTurmas);
router.get('/alunos/turma/:cod_turma', FaltaController.buscarAlunosPorTurma);

router.post('/faltas', FaltaController.confirmarFalta);
router.get('/faltas', FaltaController.buscarFaltas);
router.get('/faltas/turma/:cod_turma', FaltaController.buscarFaltasPorTurma);
router.get('/faltas/data/:data', FaltaController.buscarFaltasPorData);
router.delete('/faltas/:codFalta', FaltaController.deletarFalta);

module.exports = router;