CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE exercice (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
  content varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title, content) VALUES ("Push-up", "Les mains écartées à la largeur des épaules, les coudes complètement étendus et le corps (de la tête aux pieds) le plus droit possible, fléchissez les coudes afin que vos bras forment un angle de 90 degrés, et remontez. Vous aurez ainsi fait une répétition.");

