/*
"5ddd7b2707f8b710adaf1e40" "Geografia",
"5ddd7b0707f8b710adaf1e3d" "Física",
"5ddd7ae807f8b710adaf1e3c" "Matemática",
"5ddd7b1107f8b710adaf1e3e" "Química",
"5ddd7b1c07f8b710adaf1e3f" "História",
"5ddd7b3107f8b710adaf1e41" "Filosofia",
"5ddd7b3c07f8b710adaf1e42" "Língua Portuguesa e Literatura",
"5ddd7b4907f8b710adaf1e43" "Língua Estrangeira",
"5ddd7b5107f8b710adaf1e44" "Biologia",
*/
const carrerSeed = [
  {
    title: "Programador Front-End",
    description:
      "Responsável por projetar, construir e otimizar interfaces em um sistema web. ",
    courses: ["5ddd7b2707f8b710adaf1e40"]
  },
  {
    title: "Programador Back-End",
    description:
      "Responsável por planejar, construir, implementar e manter a estrutura de uma aplicação.",
    courses: ["5ddd7b0707f8b710adaf1e3d"]
  },
  {
    title: "Jogos Digitais",
    description:
      "Responsável por desenvolver e projetar o código base de um jogo.",
    courses: ["5ddd7b1c07f8b710adaf1e3f"]
  },
  {
    title: "Bioinformática",
    description:
      "Responsável por aplicar conhecimentos de matemática, informática, estatística e inteligência artificial para solucionar problemas relacionados a Biologia e/ou Bioquímica.",
    courses: ["5ddd7b5107f8b710adaf1e44"]
  },
  {
    title: "Cientista de Dados",
    description:
      "Coletar, visualizar e analisar dados para resolver problemas e apresentá-los de forma estruturada.",
    courses: ["5ddd7ae807f8b710adaf1e3c"]
  },
  {
    title: "Gerente de Produto",
    description:
      "Responsável por administrar o desenvolvimento de um produto, desde sua criação a uma adição de novas funcionalidades.",
    courses: ["5ddd7b3c07f8b710adaf1e42"]
  },
  {
    title: "Programador Full Stack",
    description:
      "Responsável por desenvolver toda a aplicação, possui os skills de backend, frontend, etc.",
    courses: ["5ddd7b1107f8b710adaf1e3e"]
  },
  {
    title: "Business Intelligence",
    description:
      "Responsável por reunir, organizar e processar informações da empresa com o intuito de prover informações para a gestão do negócio.",
    courses: ["5ddd7b3107f8b710adaf1e41"]
  },
  {
    title: "UI/UX",
    description:
      "Responsável por desenhar e definir o fluxo de navegação do usuário em sistemas, com o intuito de trazer sempre a melhor experiência para o usuário.",
    courses: ["5ddd7b4907f8b710adaf1e43"]
  }
];

const Carrer = require("../models/Carrer");

module.exports = {
  async index(req, res) {
    let { courses } = req.query;

    if (courses) {
      courses = courses.split("|");

      const carrers = await Carrer.find({
        courses: { $in: courses }
      });
      return res.status(200).json(carrers);
    }

    const carrers = await Carrer.find();
    return res.status(200).json(carrers);
  },

  async seed(req, res) {
    const carrers = await Carrer.find();

    if (carrers && carrers.length > 0) {
      return res.status(200).json({ error: "already seeds data" });
    }

    try {
      const carrers = await Carrer.insertMany(carrerSeed);

      return res.status(200).json({ msg: "seeds complete", data: carrers });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
};
