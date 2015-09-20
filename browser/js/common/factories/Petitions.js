app.factory('PetitionFactory', function() {
  var petitions = [{
    id: 1,
    title: "Fill in the pot hole on 1st Ave Loop in Stuyvesant Town",
    type: "Infrastructure",
    numOfSupporters: 3,
    image: "",
    repId: 1,
    description: "Dear Corey, \n This pot hole sucks, can you please get some people over here to fill it in before someone gets hurt??"
  },
  {
    id: 2,
    title: "Extend L train late night hours",
    type: "Transportation",
    numOfSupporters: 500,
    image: "",
    repId: 1,
    description: "Many late nights require riding the only way to get to the other side of the island of Manhattan late at night.  Please consider extending late hours so that train passengers may ride the L train at later times."
  },
  {
    id: 3,
    title: "Let the topless performers stay in Times Square",
    type: "Economy",
    numOfSupporters: 56,
    image: "",
    repId: 1,
    description: "Tourists seem more amused than scandalised, but the presence of the 'desnudas' - or the naked ones - has stirred fears of Times Square regressing from a family-friendly tourist destination to a place once known for strip joints, street hustlers and seedy hotels. \n Last week Mr de Blasio formed a task force to combat the proliferation of the busking street performers, but tellingly the plan not did involve cracking down on the women but rather taking away their stomping grounds. Mr de Blasio has floated the idea of removing Times Square's pedestrian plazas, where the performers most often find their customers. \n So why have the NYPD not charged the women with indecent exposure and called it a day? The first amendment of the US Constitution is apparently the reason."
  },
  {
    id: 4,
    title: "Mandate paid paternity leave for New York state",
    type: "Labor",
    numOfSupporters: 7523,
    image: "",
    repId: 1,
    description:"Fathers are indelible parts of our children's lives. \n It's also unfair that it is expected that mother's must take the career impact when having children.  Make it so the both mother's and father's have the opportunity to stay at home when welcoming their new human into the world."
  },
  {
    id: 5,
    title: "Build a statue for Derek Jeter on Ellis Island",
    type: "Public Services",
    numOfSupporters: 50000,
    image: "",
    repId: 3,
    description: "He represents America. He should welcome people to America. We need him as a statue because that's how we honor true American heroes."
  },
  {
    id: 6,
    title: "Clean Rockaway Beach Park",
    type: "Environment",
    numOfSupporters: 50000,
    image: "",
    repId: 7,
    description:"We're losing so much tourism revenue from people being disgusted by the current state Rockaway Beach Park.  I love going there and I think more people in the community should rally around making this beach clean a priority for future generations."
  },
  {
    id: 7,
    title: "Keep our waters clean - sign the Clean Water Act",
    type: "Public Safety",
    numOfSupporters: 50000,
    image: "",
    repId: 5,
    description: "Chuck.  Are you serious?  Don't let giant companies poison our waterways--we need to drink that dude!!!"
  }]

  return {
    getAllPetitions: () => petitions,
    getOnePetition: (id) => petitions.filter(elem => elem.id == id)[0],
    getRepsPetitions: (repId) => petitions.filter(elem => elem.repId == repId),
    addPetition: (petition) => petitions.push(petition)
  }
})