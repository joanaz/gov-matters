app.factory('PetitionFactory', function() {
  var petitions = [{
    id: 1,
    title: "asdfadf",
    author: "asdf",
    numOfSupporters: 1,
    image: "",
    repId: 1
  }]

  return {
    getAllPetitions: () => petitions,
    getOnePetition: (id) => petitions.filter(elem => elem.id == id)[0],
    getRepsPetitions: (repId) => petitions.filter(elem => elem.repId == repId),
    addPetition: (petition) => {
      petition.id = petitions.length + 1
      petitions.push(petition)
    }
  }
})