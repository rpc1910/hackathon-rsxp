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
"5ddd96b77bd1c9201776e55a" "Sociologia",

Programador Front-End: Faça páginas bacanas
Programador Back-end: Faça coisas legais em segredo
Jogos Digitais: Jogos? To dentro!
Bioinformática: Biologia + Computador = <3
Cientista de Dados: Trabalhe com informações
Gerente de Produto: Você pede e é atendido!
Programador FullStack: O faz-de-tudo um pouco
Business Intelligence: Faça seu negócio pensar
UI/UX: Ajude as pessoas a navegar


*/
const carrerSeed = [
  {
    title: "Programador Front-End",
    laymanTitle: "Faça páginas bacanas",
    description:
      "Responsável por projetar, construir e otimizar interfaces em um sistema web. ",
    courses: ["5ddd7b2707f8b710adaf1e40"]
  },
  {
    title: "Programador Back-End",
    laymanTitle: "Faça coisas legais em segredo",
    description:
      "Responsável por planejar, construir, implementar e manter a estrutura de uma aplicação.",
    courses: ["5ddd7b0707f8b710adaf1e3d"]
  },
  {
    title: "Jogos Digitais",
    laymanTitle: "Jogos? To dentro!",
    description:
      "Responsável por desenvolver e projetar o código base de um jogo.",
    courses: ["5ddd7b1c07f8b710adaf1e3f"]
  },
  {
    title: "Bioinformática",
    laymanTitle: "Biologia + Computador = <3",
    description:
      "Responsável por aplicar conhecimentos de matemática, informática, estatística e inteligência artificial para solucionar problemas relacionados a Biologia e/ou Bioquímica.",
    courses: ["5ddd7b5107f8b710adaf1e44"]
  },
  {
    title: "Cientista de Dados",
    laymanTitle: "Trabalhe com informações",
    description:
      "Coletar, visualizar e analisar dados para resolver problemas e apresentá-los de forma estruturada.",
    courses: ["5ddd7ae807f8b710adaf1e3c"]
  },
  {
    title: "Gerente de Produto",
    laymanTitle: "Você pede e é atendido!",
    description:
      "Responsável por administrar o desenvolvimento de um produto, desde sua criação a uma adição de novas funcionalidades.",
    courses: ["5ddd7b3c07f8b710adaf1e42", "5ddd7b4907f8b710adaf1e43"]
  },
  {
    title: "Programador Full Stack",
    laymanTitle: "O faz-de-tudo um pouco",
    description:
      "Responsável por desenvolver toda a aplicação, possui os skills de backend, frontend, etc.",
    courses: ["5ddd7b1107f8b710adaf1e3e"]
  },
  {
    title: "Business Intelligence",
    laymanTitle: "Faça seu negócio pensar",
    description:
      "Responsável por reunir, organizar e processar informações da empresa com o intuito de prover informações para a gestão do negócio.",
    courses: ["5ddd7b3107f8b710adaf1e41"]
  },
  {
    title: "UI/UX",
    laymanTitle: "Ajude as pessoas a navegar",
    description:
      "Responsável por desenhar e definir o fluxo de navegação do usuário em sistemas, com o intuito de trazer sempre a melhor experiência para o usuário.",
    courses: ["5ddd96b77bd1c9201776e55a"]
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
