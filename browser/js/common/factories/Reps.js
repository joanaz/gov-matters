app.factory('RepFactory', function() {
  var reps = [{
    id: 1,
    name: "me",
    address: "",
    phone: "",
    email: "",
    role: "asdf",
    image: ""
  }]

  return {
    getAllReps: () => reps,
    getOneRep: (id) => reps.filter(elem => elem.id == id)[0]
  }
})