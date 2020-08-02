class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  get_pg = function (movieList) {
    movieList = movieList.filter((val) => val.rating === "PG");
    if (movieList.length === 0) {
      return "no movie in the list is PG rated";
    }
    return movieList;
  };
}
var movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
var movie2 = new Movie("Arjun Reddy", "Someone", "R");
var movie3 = new Movie("Darbar", "Someone", "PG");
var movie4 = new Movie("Great things", "Someone", "PG13");
var movie5 = new Movie("Rakth Charitr", "Someone", "PG");
console.log(movie1.get_pg([movie1, movie2, movie3, movie4, movie5]));
