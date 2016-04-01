

class Profile {
constructor (name, email, phone, location, photo){

	this.name = name,
	this.email = email,
	this.phone = phone,
	this.location = location,
	this.photo = photo
	};
};




var Niki = new Profile ('Niki de Saint Phalle', 'shotgungirl@hotmail.com', '5556769090', 'Paris,France', 'http://theredlist.com/media/database/muses/couples/art_culture/niki-de-saint-phalle-and-jean-tinguely/003-niki-de-saint-phalle-and-jean-tinguely-theredlist.jpg');
var Basquiat = new Profile ('Basquiat', 'fightthepolice@gmail.com', '5556769090', 'New York, New York', 'http://basquiat.com/images/homepage-image.jpg');
var Corbusier = new Profile ('Le Corbusier', 'emptyvoid@haus.com', '5556769090', 'Marseilles, France', 'https://waldinadotcom.files.wordpress.com/2014/10/le-corbusier-1.jpg');
var Caravaggio = new Profile ('Michelangelo Merisi da Caravaggio', 'acesandspades@michelangelo.com', '5556769090', 'Rome, Italy', 'http://www.initaly.com/regions/artists/borghese/5.jpg');
var Diego = new Profile ('Diego Velázquez', 'diego@gmail.com', '5556769090', 'Barcelona, Spain', 'http://www.artble.com/imgs/a/5/d/320796/simon_vouet.jpg');
var Botticelli = new Profile ('Sandro Botticelli', 'chili@chilis.com', '5556769090', 'Milan, Italy', 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Sandro_Botticelli_073.jpg');
var Dali = new Profile ('Salvador Dali', 'meltingclocks@dali.com', '5556769090', 'Milan, Italy', 'https://hithisisbarcelona.files.wordpress.com/2013/05/6.jpg');
var Riveria = new Profile ('Diego Riveria', 'diego@diego.com', '5556769090', 'Mexico City, Mexico', 'http://uploads0.wikiart.org/images/diego-rivera.jpg!Portrait.jpg');
var Frida = new Profile ('Frida Kahlo', 'FK@frida.com', '5556769090', 'Mexico City, Mexico', 'http://3.bp.blogspot.com/-SeZpXySm6Dw/TgbcNiwaF6I/AAAAAAAAEaQ/r5BBEpZGjZs/s1600/Frida+Kahlo+%255B6%255D.jpg');
var Duchamp = new Profile ('Marcel Duchamp', 'duchamp@marcel.com', '5556769090', 'Blainville-Crevon, France', 'http://payload96.cargocollective.com/1/8/282272/4228278/Marcel-Duchamp.jpeg');



var myArtists = [Niki , Basquiat, Corbusier, Caravaggio, Diego, Botticelli, Dali, Riveria, Frida, Duchamp];

export default myArtists;