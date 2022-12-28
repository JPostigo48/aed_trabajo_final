import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {res.render("index");});


router.get("/estructLSE", (req, res) => {res.render("estructLSE");});
router.get("/IEBLSE", (req, res) => {res.render("IEBLSE");});
router.get("/estructLDE", (req, res) => {res.render("estructLDE");});
router.get("/IEBLDE", (req, res) => {res.render("IEBLDE");});
router.get("/listCircular", (req, res) => {res.render("listCircular");});
router.get("/analisisLSE", (req, res) => {res.render("analisisLSE");});
router.get("/IEBBT", (req, res) => {res.render("IEBBT");});
router.get("/othersBT", (req, res) => {res.render("othersBT");});
router.get("/analisisBT", (req, res) => {res.render("analisisBT");});
router.get("/IEBAVL", (req, res) => {res.render("IEBAVL");});
router.get("/IEBRB", (req, res) => {res.render("IEBRB");});
router.get("/STeIT", (req, res) => {res.render("STeIT");});


router.get("/analisiABE", (req, res) => {res.render("analisiABE");});
router.get("/analisisDatosenGrafos", (req, res) => {res.render("analisisDatosenGrafos");});
router.get("/densaDinamicas", (req, res) => {res.render("densaDinamicas");});
router.get("/densaEstatica", (req, res) => {res.render("densaEstatica");});
router.get("/listaAdyacencia", (req, res) => {res.render("listaAdyacencia");});
router.get("/matricesAdyacencia", (req, res) => {res.render("matricesAdyacencia");});
router.get("/matrizEsparzas", (req, res) => {res.render("matrizEsparzas");});
router.get("/matrizEsparzas-Aplicaciones", (req, res) => {res.render("matrizEsparzas-Aplicaciones");});
router.get("/tablaHash", (req, res) => {res.render("tablaHash");});
router.get("/tablaHashAnalisis", (req, res) => {res.render("tablaHashAnalisis");});
router.get("/tablaHashDensidad", (req, res) => {res.render("tablaHashDensidad");});
router.get("/tablaHashOperaciones", (req, res) => {res.render("tablaHashOperaciones");});


router.get("/", (req, res) => {res.render("index");});

export default router;