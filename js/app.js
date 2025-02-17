
/**
 * thoughts:
 *      think about adding genre to do sorting stuff
 */



const movies = [
    {
        id: 1,
        director: 'David Lynch',
        writer: ['David Lynch'],
        title: 'Mullholland Drive',
        isFavorite: false,
        date: new Date('October 19, 2001'),
        leads: ['Naomi Watts', 'Laura Harring'],
        rating: 'R',
        genre: ['mystery', 'drama', 'thriller']

    },

    {
        id: 2,
        director: 'David Lynch',
        writer: ['David Lynch'],
        title: 'Blue Velvet',
        isFavorite: false,
        date: new Date('October 23, 1986'),
        leads: ['Isabella Rossellini', 'Kyle MacLachlan', 'Dennis Hopper'],
        rating: 'R',
        genre: ['mystery', 'drama', 'surrealist', 'crime', 'thriller']
    },
    {
        id: 3,
        director: 'David Lynch',
        writer: ['Barry Gifford', 'David Lynch'],
        title: 'Wild at Heart',
        isFavorite: false,
        date: new Date('August 17, 1990'),
        leads: ['Nicolas Cage', 'Laura Dern'],
        rating: 'R',
        genre: ['drama', 'thriller', 'crime']
    },
    {
        id: 4,
        director: 'Irvin Kershner',
        writer: ['Leigh Brackett', 'Lawrence Kasdan', 'George Lucas'],
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        isFavorite: false,
        date: new Date('June 18, 1980'),
        leads: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Billy Dee Williams'],
        rating: 'PG',
        genre: ['action', 'adventure', 'fantasy', 'sci-fi']
    },
    {
        id: 5,
        director: 'George Lucas',
        writer: 'George Lucas',
        title: 'Star Wars: Episode IV - A New Hope',
        isFavorite: false,
        date: new Date('May 25, 1977'),
        leads: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Alec Guinness'],
        rating: 'PG',
        genre: ['action', 'adventure', 'fantasy', 'sci-fi']
    },
    {
        id: 6,
        director: 'Richard Marquand',
        writer: ['Lawrence Kasdan', 'George Lucas'],
        title: 'Star Wars: Episode VI - Return of the Jedi',
        isFavorite: false,
        date: new Date('May 25, 1983'),
        leads: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Billy Dee Williams'],
        rating: 'PG',
        genre: ['action', 'adventure', 'fantasy', 'sci-fi']
    },
    {
        id: 7,
        director: 'George Lucas',
        writer: ['George Lucas'],
        title: 'Star Wars: Episode III - Revenge of the Sith',
        isFavorite: false,
        date: new Date('May 19, 2005'),
        leads: ['Hayden Christensen', 'Natalie Portman', 'Ewan McGregor'],
        rating: 'PG-13',
        genre: ['action', 'adventure', 'fantasy', 'sci-fi']
    },
    {
        id: 8,
        director: 'David Lynch',
        writer: ['David Lynch', 'Christopher De Vore', 'Eric Bergren'],
        title: 'The Elephant Man',
        isFavorite: false,
        date: new Date('October 10, 1980'),
        leads: ['Anthony Hopkins', 'John Hurt'],
        rating: 'PG',
        genre: ['biography', 'drama']
    },
    {
        id: 9,
        director: 'Ridley Scott',
        writer: ['Philip K. Dick', 'Hampton Fancher', 'David Webb Peoples'],
        title: 'Blade Runner',
        isFavorite: false,
        date: new Date('June 25, 1982'),
        leads: ['Harrison Ford', 'Sean Young', 'Rutger Hauer'],
        rating: 'R',
        genre: ['action', 'drama', 'sci-fi', 'thriller']
    },
    {
        id: 10,
        director: 'Ridley Scott',
        writer: ['Dan O\'Bannon', 'Ronald Shusett'],
        title: 'Alien',
        isFavorite: false,
        date: new Date('June 22, 1979'),
        leads: ['Sigourney Weaver'],
        rating: 'R',
        genre: ['horror', 'sci-fi']
    },
    {
        id: 11,
        director: 'James Cameron',
        writer: ['James Cameron', 'David Giler', 'Walter Hill'],
        title: 'Aliens',
        isFavorite: false,
        date: new Date('July 18, 1986'),
        leads: ['Sigourney Weaver', 'Michael Biehn'],
        rating: 'R',
        genre: ['action', 'adventure', 'horror', 'sci-fi', 'thriller']
    },
    {
        id: 12,
        director: 'James Cameron',
        writer: ['James Cameron', 'Gale Anne Hurd', 'William Wisher'],
        title: 'The Terminator',
        isFavorite: false,
        date: new Date('October 26, 1984'),
        leads: ['Arnold Schwarzenegger', 'Michael Biehn', 'Linda Hamilton'],
        rating: 'R',
        genre: ['action', 'adventure', 'sci-fi']
    },
    {
        id: 13,
        director: 'James Cameron',
        writer: ['James Cameron', 'William Wisher'],
        title: 'Terminator 2: Judgment Day',
        isFavorite: false,
        date: new Date('July 3, 1991'),
        leads: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong'],
        rating: 'R',
        genre: ['action', 'adventure', 'sci-fi']
    },
    {
        id: 14,
        director: 'Wachowski Sisters',
        writer: ['Lilly Wachowski', 'Lana Wachowski'],
        title: 'The Matrix',
        isFavorite: false,
        date: new Date('March 31, 1999'),
        leads: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        rating: 'R',
        genre: ['action', 'sci-fi']
    },
    {
        id: 15,
        director: 'Wachowski Sisters',
        writer: ['Lilly Wachowski', 'Lana Wachowski'],
        title: 'The Matrix Reloaded',
        isFavorite: false,
        date: new Date('May 15, 2003'),
        leads: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        rating: 'R',
        genre: ['action', 'sci-fi']
    },
    {
        id: 16,
        director: 'Wachowski Sisters',
        writer: ['Lilly Wachowski', 'Lana Wachowski'],
        title: 'The Matrix Revolutions',
        isFavorite: false,
        date: new Date('November 5, 2003'),
        leads: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        rating: 'R',
        genre: ['action', 'sci-fi']
    },
    {
        id: 17,
        director: 'Luc Besson',
        writer: ['Luc Besson'],
        title: 'Leon: The Professional',
        isFavorite: false,
        date: new Date('November 18, 1994'),
        leads: ['Jean Reno', 'Gary Oldman', 'Natalie Portman'],
        rating: 'R',
        genre: ['action', 'crime', 'drama', 'thriller']
    },
    {
        id: 18,
        director: 'Tony Kaye',
        writer: ['David McKenna'],
        title: 'American History X',
        isFavorite: false,
        date: new Date('November 20, 1998'),
        leads: ['Edward Norton', 'Edward Furlong'],
        rating: 'R',
        genre: ['crime', 'drama']
    },
    {
        id: 19,
        director: 'Steven Spielberg',
        writer: ['Robert Rodat'],
        title: 'Saving Private Ryan',
        isFavorite: false,
        date: new Date('July 24, 1998'),
        leads: ['Tom Hanks', 'Matto Damon'],
        rating: 'R',
        genre: ['drama', 'war']
    },
    {
        id: 20,
        director: 'Quentin Tarantino',
        writer: ['Quentin Tarantino', 'Roger Avary'],
        title: 'Pulp Fiction',
        isFavorite: false,
        date: new Date('October 14, 1994'),
        leads: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis'],
        rating: 'R',
        genre: ['crime', 'drama']
    },
    {
        id: 21,
        director: 'David Fincher',
        writer: ['Chuck Palahniuk', 'Jim Uhls'],
        title: 'Fight Club',
        isFavorite: false,
        date: new Date('October 15, 1999'),
        leads: ['Brad Pitt', 'Edward Norton'],
        rating: 'R',
        genre: ['drama']
    },
    {
        id: 22,
        director: 'Christopher Nolan',
        writer: ['Christopher Nolan'],
        title: 'Inception',
        isFavorite: false,
        date: new Date('July 16, 2010'),
        leads: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
        rating: 'PG-13',
        genre: ['action', 'adventure', 'sci-fi', 'thriller']
    },
    {
        id: 23,
        director: 'Christopher Nolan',
        writer: ['Christopher Nolan', 'Jonathan Nolan', 'David S. Goyer'],
        title: 'The Dark Knight',
        isFavorite: false,
        date: new Date('July 18, 2008'),
        leads: ['Heath Ledger', 'Christian Bale'],
        rating: 'PG-13',
        genre: ['action', 'crime', 'drama', 'thriller']
    },
    {
        id: 24,
        director: 'Christopher Nolan',
        writer: ['Christopher Nolan', 'Jonathan Nolan', 'David S. Goyer'],
        title: 'The Dark Knight Rises',
        isFavorite: false,
        date: new Date('July 20, 2012'),
        leads: ['Tom Hardy', 'Christian Bale', 'Anne Hathaway'],
        rating: 'PG-13',
        genre: ['action', 'drama', 'thriller']
    },
    {
        id: 25,
        director: 'Christopher Nolan',
        writer: ['Christopher Nolan', 'David S. Goyer'],
        title: 'Batman Begins',
        isFavorite: false,
        date: new Date('June 15, 2005'),
        leads: ['Michael Caine', 'Christian Bale', 'Liam Neeson'],
        rating: 'PG-13',
        genre: ['action', 'drama']
    },
    {
        id: 26,
        director: 'Martin Scorsese',
        writer: ['Laeta Kalogridis', 'Dennis Lehane'],
        title: 'Shutter Island',
        isFavorite: false,
        date: new Date('June 15, 2005'),
        leads: ['Leonardo DiCaprio', 'Emily Mortimer', 'Mark Ruffalo'],
        rating: 'R',
        genre: ['drama', 'mystery', 'thriller']
    },
    {
        id: 27,
        director: 'Martin Scorsese',
        writer: ['Terence Winter', 'Jordan Belfort'],
        title: 'Wolf of Wall Street',
        isFavorite: false,
        date: new Date('December 25, 2013'),
        leads: ['Leonardo DiCaprio', 'Margot Robbie', 'Jonah Hill'],
        rating: 'R',
        genre: ['biography', 'comedy', 'crime', 'drama']
    },
    {
        id: 28,
        director: 'Martin Scorsese',
        writer: ['Paul Schrader'],
        title: 'Taxi Driver',
        isFavorite: false,
        date: new Date('February 9, 1976'),
        leads: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepard'],
        rating: 'R',
        genre: ['crime', 'drama']
    },
    {
        id: 29,
        director: 'Quentin Tarantino',
        writer: ['Quentin Tarantino'],
        title: 'Inglourious Basterds',
        isFavorite: false,
        date: new Date('August 21, 2009'),
        leads: ['Brad Pitt', 'Dian Kruger', 'Christoph Waltz'],
        rating: 'R',
        genre: ['adventure', 'drama', 'war']
    },
    {
        id: 30,
        director: 'Quentin Tarantino',
        writer: ['Quentin Tarantino'],
        title: 'Django Unchained',
        isFavorite: false,
        date: new Date('December 25, 2012'),
        leads: ['Jamie Foxx', 'Leonardo Dicaprio', 'Christoph Waltz'],
        rating: 'R',
        genre: ['comedy', 'drama', 'western']
    },
    {
        id: 31,
        director: 'Coen Brothers',
        writer: ['Joel Coen', 'Ethan Coen', 'Cormac McCarthy'],
        title: 'No Country for Old Men',
        isFavorite: false,
        date: new Date('November 21, 2007'),
        leads: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
        rating: 'R',
        genre: ['crime', 'drama', 'thriller']
    },
    {
        id: 32,
        director: 'Paul Thomas Anderson',
        writer: ['Paul Thomas Anderson', 'Upton Sinclair'],
        title: 'There Will Be Blood',
        isFavorite: false,
        date: new Date('January 25, 2008'),
        leads: ['Daniel Day-Lewis', 'Paul Dano'],
        rating: 'R',
        genre: ['drama']
    },
    {
        id: 33,
        director: 'Martin Scorsese',
        writer: ['Jay Cocks', 'Steven Zaillian', 'Kenneth Lonergan'],
        title: 'Gangs of New York',
        isFavorite: false,
        date: new Date('December 20, 2002'),
        leads: ['Daniel Day-Lewis', 'Leonardo DiCaprio', 'Cameron Diaz'],
        rating: 'R',
        genre: ['crime', 'drama']
    },
    {
        id: 34,
        director: 'Edward Zwick',
        writer: ['Charles Leavitt', 'C. Gaby Mitchell'],
        title: 'Blood Diamond',
        isFavorite: false,
        date: new Date('December 8, 2006'),
        leads: ['Djimon Hounsou', 'Leonardo DiCaprio', 'Jennifer Connelly'],
        rating: 'R',
        genre: ['adventure', 'drama', 'thriller']
    },
    {
        id: 35,
        director: 'Denis Villeneuve',
        writer: ['Hampton Fancher', 'Michael Green', 'Philip K. Dick'],
        title: 'Blade Runner 2049',
        isFavorite: false,
        date: new Date('October 6, 2017'),
        leads: ['Harrison Ford', 'Ryan Gosling', 'Ana de Armas'],
        rating: 'R',
        genre: ['action', 'drama', 'mystery', 'sci-fi', 'thriller']
    },
    {
        id: 36,
        director: 'Nicolas Winding Refn',
        writer: ['Hossein Amini', 'James Sallis'],
        title: 'Drive',
        isFavorite: false,
        date: new Date('October 6, 2017'),
        leads: ['Carey Mulligan', 'Ryan Gosling'],
        rating: 'R',
        genre: ['action', 'drama']
    },
    {
        id: 37,
        director: 'Terrence Malik',
        writer: ['James Jones', 'Terrence Malick'],
        title: 'The Thin Red Line',
        isFavorite: false,
        date: new Date('January 15, 1999'),
        leads: ['Jim Caviezel', 'Sean Penn', 'Nick Nolte'],
        rating: 'R',
        genre: ['drama', 'history', 'war']
    },
    {
        id: 38,
        director: 'Joss Whedon',
        writer: ['Joss Whedon', 'Zak Penn'],
        title: 'The Avengers',
        isFavorite: false,
        date: new Date('January 15, 1999'),
        leads: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
        rating: 'PG-13',
        genre: ['action', 'sci-fi']
    },
    {
        id: 39,
        director: 'James McTeigue',
        writer: ['Lilly Wachowski', 'Lana Wachowski', 'David Lloyd'],
        title: 'V for Vendetta',
        isFavorite: false,
        date: new Date('March 17, 2006'),
        leads: ['Hugo Weaving', 'Natalie Portman', 'Rupert Graves'],
        rating: 'R',
        genre: ['action', 'drama', 'sci-fi', 'thriller']
    },
    {
        id: 40,
        director: 'David Ayer',
        writer: ['David Ayer'],
        title: 'Fury',
        isFavorite: false,
        date: new Date('October 17, 2014'),
        leads: ['Brad Pitt', 'Shia LaBeouf', 'Logan Lerman'],
        rating: 'R',
        genre: ['action', 'drama', 'war']
    },
    {
        id: 41,
        director: 'Stanley Kubrick',
        writer: ['Stanley Kubrick', 'Michael Herr', 'Gustav Hasford'],
        title: 'Full Metal Jacket',
        isFavorite: false,
        date: new Date('July 10, 1987'),
        leads: ['Matthew Modine', 'R. Lee Ermey', 'Vincent D\'Onofrio'],
        rating: 'R',
        genre: ['drama', 'war']
    },
    {
        id: 42,
        director: 'John McTiernan',
        writer: ['Roderick Thorp', 'Jeb Stuart', 'Steven E. de Souza'],
        title: 'Die Hard',
        isFavorite: false,
        date: new Date('July 20, 1988'),
        leads: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedlia'],
        rating: 'R',
        genre: ['action', 'thriller']
    },
    {
        id: 43,
        director: 'Steven Spielberg',
        writer: ['Lawrence Kasdan', 'George Lucas', 'Philip Kaufman'],
        title: 'Raiders of the Lost Ark',
        isFavorite: false,
        date: new Date('July 20, 1988'),
        leads: ['Harrison Ford', 'Karen Allen', 'Paul Freeman'],
        rating: 'PG',
        genre: ['action', 'adventure']
    },
    {
        id: 44,
        director: 'Steven Spielberg',
        writer: ['Michael Crichton', 'David Koepp'],
        title: 'Jurassic Park',
        isFavorite: false,
        date: new Date('June 11, 1993'),
        leads: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
        rating: 'R',
        genre: ['action', 'adventure', 'sci-fi', 'thriller']
    },
    {
        id: 45,
        director: 'Terrence Malick',
        writer: ['Terrence Malick'],
        title: 'The Tree of Life',
        isFavorite: false,
        date: new Date('May 17, 2011'),
        leads: ['Brad Pitt', 'Sean Penn', 'Jessica Chastain'],
        rating: 'PG-13',
        genre: ['drama', 'fantasy']
    },
    {
        id: 46,
        director: 'Mel Gibson',
        writer: ['Randall Wallace'],
        title: 'Braveheart',
        isFavorite: false,
        date: new Date('May 17, 2011'),
        leads: ['Mel Gibson', 'Sophie Marceau', 'Patrick McGoohan'],
        rating: 'R',
        genre: ['biography', 'drama', 'war']
    },
    {
        id: 47,
        director: 'James Cameron',
        writer: ['James Cameron'],
        title: 'Avatar',
        isFavorite: false,
        date: new Date('December 18, 2009'),
        leads: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
        rating: 'PG-13',
        genre: ['action', 'adventure', 'fantasy', 'sci-fi']
    },
    {
        id: 48,
        director: 'Gary Ross',
        writer: ['Gary Ross', 'Suzanne Collins', 'Billy Ray'],
        title: 'The Hunger Games',
        isFavorite: false,
        date: new Date('March 23, 2012'),
        leads: ['Jennifer Lawrence', 'Josh Hutcherson', 'Liam Hemsworth'],
        rating: 'PG-13',
        genre: ['action', 'adventure', 'sci-fi', 'thriller']
    },
    {
        id: 49,
        director: 'Francis Lawrence',
        writer: ['Simon Beaufoy', 'Michael Arndt', 'Suzzane Collins'],
        title: 'The Hunger Games: Catching Fire',
        isFavorite: false,
        date: new Date('November 22, 2013'),
        leads: ['Jennifer Lawrence', 'Josh Hutcherson', 'Liam Hemsworth'],
        rating: 'PG-13',
        genre: ['action', 'adventure', 'sci-fi', 'thriller']
    },
    {
        id: 50,
        director: 'Jason Reitman',
        writer: ['Diablo Cody'],
        title: 'Juno',
        isFavorite: false,
        date: new Date('December 25, 2007'),
        leads: ['Elliot Page', 'Michael Cera', 'Jennifer Garner'],
        rating: 'PG-13',
        genre: ['comedy', 'drama']
    },
    {
        id: 51,
        director: 'Marc Webb',
        writer: ['Scott Neustadter', 'Michael H. Weber'],
        title: '500 Days of Summer',
        isFavorite: false,
        date: new Date('August 7, 2009'),
        leads: ['Zooey Deschael', 'Joseph Gordon-Levitt'],
        rating: 'PG-13',
        genre: ['comedy', 'drama', 'romance']
    },
    {
        id: 52,
        director: 'Edgar Wright',
        writer: ['Michael Bacall', 'Edgar Wright', 'Bryan Lee O\'Malley'],
        title: 'Scott Pilgrim vs. the World',
        isFavorite: false,
        date: new Date('August 13, 2010'),
        leads: ['Michael Cera', 'Mary Elizabeth Winstead'],
        rating: 'PG-13',
        genre: ['action', 'comedy', 'fantasy', 'romance']
    },
    {
        id: 53,
        director: 'Greg Mottola',
        writer: ['Seth Rogen', 'Evan Goldberg'],
        title: 'Superbad',
        isFavorite: false,
        date: new Date('August 13, 2010'),
        leads: ['Michael Cera', 'Jonah Hill', 'Christopher Mintz-Plasse'],
        rating: 'R',
        genre: ['comedy']
    },
    {
        id: 54,
        director: 'Adam Mckay',
        writer: ['Will Ferrell', 'Adam McKay', 'John C. Reilly'],
        title: 'Step Brothers',
        isFavorite: false,
        date: new Date('July 25, 2008'),
        leads: ['Will Ferrell', 'John C. Reilly'],
        rating: 'R',
        genre: ['comedy']
    },
    {
        id: 55,
        director: 'Robert Wise',
        writer: ['Georg Hurdalek', 'Howard Lindsey', 'Russel Crouse'],
        title: 'The Sound of Music',
        isFavorite: false,
        date: new Date('April 1, 1965'),
        leads: ['Julie Andrews'],
        rating: 'G',
        genre: ['biography', 'drama', 'family', 'musical', 'romance']
    },
    {
        id: 56,
        director: 'Brad Bird',
        writer: ['Brad Bird'],
        title: 'The Incredibles',
        isFavorite: false,
        date: new Date('November 5, 2004'),
        leads: ['Craig T. Nelson', 'Samuel L. Jackson', 'Holly hunter'],
        rating: 'PG',
        genre: ['animation', 'action', 'adventure', 'family']
    },
    {
        id: 57,
        director: 'John Lasseter',
        writer: ['John Lasseter', 'Pete Docter', 'Andrew Stanton'],
        title: 'Toy Story',
        isFavorite: false,
        date: new Date('November 22, 1995'),
        leads: ['Tom Hanks', 'Tim Allen', 'Don Rickles'],
        rating: 'G',
        genre: ['animation', 'adventure', 'comedy', 'family', 'fantasy']
    },
]

// console.log(movies) just Testing...

// const genreFilter = movies.filter(item => item.genre.includes('comedy')) //filters by genre 
// console.log(genreFilter)

/**
 *      1
 */

const genreFilter = (arr, str) => {
    const filter = arr.filter(item => item.genre.includes(str)); //function that filters by genre inputted by user.
    console.log(filter)
}

genreFilter(movies, 'animation') //works as intended 

/**
 *      2
 */

const generalFilter = (arr, prop, str) => {
    const filter = arr.filter(item => item[prop] == str) //function that returns all movies with the given key and value
    console.log (filter)
}
generalFilter(movies, 'rating', 'G') //more general but not very useful i think...
generalFilter(movies, 'genre', 'comedy')
generalFilter(movies, 'director', 'David Lynch')





// const sameDirectorAndWriter = movies.filter(item => item.writer.includes(item.director))
// console.log(sameDirectorAndWriter) First pass

/**
 *      3
 */

const writerAndDirector = (arr) => {
    const filter = arr.filter(item => item.writer.includes(item.director))
    console.log(filter)
}
writerAndDirector(movies) // lists which movies have the director as ONE of the writers. works as intended

/**
 *      4
 */

const onlyWriterisDirector = (arr) => {
    const filter = arr.filter(item => item.director.includes(item.writer))
    console.log(filter)
}
onlyWriterisDirector(movies)  //lists movies where the director is also the ONLY writer credited to the film. I think this works because movies.director is a single string, not an array


// const sixtiesFilter = movies.filter(item => item.date.getFullYear() >= 1960 && item.date.getFullYear() < 1970)  //first pass, there's already problems with this
// console.log(sixtiesFilter)

/**
 *      5
 */

const decadeFilter = (arr, year) => {
    const filter = arr.filter(item => 
        item.date.getFullYear() >= year && item.date.getFullYear() < year + 10  //first function pass. only works when user inputs the decade, which is fine i guess; that's what we want.  This would be a dropdown menu ideally where the user can select by decade.  May think about using mod arithmetic to calc year. Probably best to use regex(?). 
    )
    console.log(filter)
}

decadeFilter(movies, 1970)







