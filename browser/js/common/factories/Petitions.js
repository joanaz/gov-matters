app.factory('PetitionFactory', function() {
  var petitions = [{
    id: 1,
    title: "Fill in the pot hole on 1st Ave Loop in Stuyvesant Town",
    type: "Infrastructure",
    numOfSupporters: 3,
    image: "",
    repId: 1
  },
  {
    id: 2,
    title: "Extend L train late night hours",
    type: "Transportation",
    numOfSupporters: 500,
    image: "",
    repId: 1
  },
  {
    id: 3,
    title: "Let the topless performers stay in Times Square",
    type: "Economy",
    numOfSupporters: 56,
    image: "",
    repId: 1
  },
  {
    id: 4,
    title: "Mandate paid paternity leave for New York state",
    type: "Labor",
    numOfSupporters: 7523,
    image: "",
    repId: 1
  },
  {
    id: 5,
    title: "Build a statue for Derek Jeter on Ellis Island",
    type: "Public Services",
    numOfSupporters: 50000,
    image: "",
    repId: 3
  },
  {
    id: 6,
    title: "Clean Rockaway Beach Park",
    type: "Environment",
    numOfSupporters: 50000,
    image: "",
    repId: 3
  },
  {
    id: 7,
    title: "Keep our waters clean - sign the Clean Water Act",
    type: "Public Safety",
    numOfSupporters: 50000,
    image: "",
    repId: 3
  }]

  return {
    getAllPetitions: () => petitions,
    getOnePetition: (id) => petitions.filter(elem => elem.id == id)[0],
    getRepsPetitions: (repId) => petitions.filter(elem => elem.repId == repId),
    addPetition: (petition) => petitions.push(petition)
  }
})