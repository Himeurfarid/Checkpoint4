CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE exercice (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content varchar(560) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO exercice (title, content) VALUES ("Push-up", "Les mains écartées à la largeur des épaules, les coudes complètement étendus et le corps (de la tête aux pieds) le plus droit possible, fléchissez les coudes afin que vos bras forment un angle de 90 degrés, et remontez. Vous aurez ainsi fait une répétition."),("Traction","Pliez légèrement les bras et gaînez tout votre corps : le corps doit être droit (alignement tête, dos, fesses et jambes) et verrouillé, de sorte que votre poids se transfère uniquement à travers vos mains et vos talons. Tirez sur vos bras pour amener votre poitrine à toucher la barre."),("Squat","Pour réaliser un squat parfait, il faut écarter les pieds à peu près au niveau des épaules et pousser les pointes de pieds légèrement vers l'extérieur. Puis, il faudra chercher à descendre les fesses le plus bas possible en se rapprochant du sol puis remonter doucement."),("Abdos « classiques »","Sur le dos, les jambes fléchies, les pieds bien au sol, regard vers le ciel, relever le buste sans tirer sur la nuque, les mains croisées sur la poitrine ou posées derrière la tête.
Faire des montées jusqu'aux genoux."),("Dips","Mettez-vous en appui sur vos mains, fléchissez légèrement les jambes et enchainez les flexions-extensions des bras. Si vous gardez le buste droit vous travaillez les triceps de manière ciblée et si vous penchez le buste vers l'avant vous sollicitez plus les pectoraux et vos deltoïdes.");

