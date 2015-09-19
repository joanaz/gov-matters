app.factory('RepFactory', function($http) {
  var reps = [{
    id: 1,
    name: "asdfadf",
    address: "",
    phone: "",
    email: "",
    role: "asdf",
    image: ""
  }]

  return {
    getAllReps: () => reps,
    getOneRep: (id) => reps.filter(elem => elem.id == id)[0],
    getRepsByZipcode: (zipcode) => $http.get("api/reps/myrepapi")
      .then(res => {
        console.log(res.data)
        return res.data
      }),
    // getCities: () => {
    //   $http.get("http://www.priceline.com/svcs/ac/index/hotels/ith")
    //     .then(res => {
    //       console.log("hello", res)
    //       return res
    //     })
    // }

  }
})