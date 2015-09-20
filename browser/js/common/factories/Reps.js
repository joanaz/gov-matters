app.factory('RepFactory', function() {
  var reps = [{
    id: 1,
    name: "Corey Johnson",
    jobTitle:"City Council Member",
    party:"D",
    address: "224 West 30th St., New York, NY 10001",
    phone: "212-564-7757",
    fax:"212-564-7347",
    email: "corey.johnson@council.nyc.gov",
    website: "http://council.nyc.gov/d3/html/members/home.shtml",
    twitter: "@CoreyinNYC",
    facebook:"",
    image: "http://www.mygovnyc.org/img/photos/council/District03_Johnson.JPG"
  },
  {
    id: 2,
    name: "Christine Berthet",
    jobTitle:"Manhattan Community Board Chairperson",
    party:"",
    address: "330 West 42nd Street, Suite 2618 New York, NY 10036",
    phone: "212-736-4536",
    fax:"",
    email: "info@manhattancb4.org",
    website: "http://www.nyc.gov/mcb4",
    twitter: "",
    facebook:"",
    image: "http://cache4.asset-cache.net/gc/483360465-christine-berthet-chair-of-community-board-4-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=X7WJLa88Cweo9HktRLaNXvlA8tl6VeR83WtNEr3yuMtRGCpsTH%2BHwVb4eUDlAmBg4AseEViGypAdPdtBY0Tkbg%3D%3D"
  },
  {
    id: 3,
    name: "Gale A. Brewer",
    jobTitle:"Manhattan Borough President",
    party:"D",
    address: "One Centre St. 19th Fl. South New York, NY 10007",
    phone: "212-669-8300",
    fax:"212-669-4305",
    email: "gbrewer@manhattanbp.nyc.gov",
    website: "http://manhattanbp.nyc.gov/html/home/home.shtml",
    twitter: "galeabrewer",
    facebook:"GaleBrewerforBoroughPresident",
    image: "http://www.mygovnyc.org/img/photos/otherofficials/brewer_mnbp.jpg"
  },
  {
    id: 4,
    name: "Cyrus Vance, Jr.",
    jobTitle:"Manhattan District Attorney",
    party:"D",
    address: "1 Hogan Pl. Rm. 854 New York, NY 10013",
    phone: "212-335-9813",
    fax:"212-335-8999",
    email: "vancec@dany.nyc.gov",
    website: "http://manhattanda.org/",
    twitter: "@ManhattanDA",
    facebook:"",
    image: "http://www.mygovnyc.org/img/photos/otherofficials/DAVanceportrait1.jpg"
  },
  {
    id: 5,
    name: "Bill de Blasio",
    jobTitle:"Mayor",
    party:"D",
    address: "City Hall, NYC, NY 10007",
    phone: "212-788-3000",
    fax:"212-312-0700",
    email: "www.nyc.gov/mayor",
    website: "www.nyc.gov/mayor",
    twitter: "@NYCMayorsOffice",
    facebook:"mayordeblasio",
    image: "http://www.mygovnyc.org/img/photos/otherofficials/deblasio.png"
  },
  {
    id: 6,
    name: "Scott M. Stringer",
    jobTitle:"NYC Comptroller",
    party:"D",
    address: "One Centre St. 5th Floor, New York, NY 10007",
    phone: "212-669-3916",
    fax:"212-669-2707",
    email: "action@comptroller.nyc.gov",
    website: "http://comptroller.nyc.gov/",
    twitter: "@ScottMStringer",
    facebook:"scottstringernyc",
    image: "http://www.mygovnyc.org/img/photos/otherofficials/SStringer_Nov2011_vertical.jpg"
  },
  {
    id: 7,
    name: "Letitia James",
    jobTitle:"NYC Public Advocate",
    party:"D",
    address: "One Centre St. 15th Floor, New York, NY 10007",
    phone: "212-669-7200",
    fax:"212-669-4701",
    email: "GetHelp@pubadvocate.nyc.gov",
    website: "http://pubadvocate.nyc.gov/",
    twitter: "@tishjames",
    facebook:"PALetitiaJames",
    image: "http://www.mygovnyc.org/img/photos/otherofficials/letitiajames.jpg"
  }]

  return {
    getAllReps: () => reps,
    getOneRep: (id) => reps.filter(elem => elem.id == id)[0]
  }
})