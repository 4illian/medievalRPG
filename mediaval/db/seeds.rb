# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)`

classes = Classe.create([{ name: "Magicien" }, { name: "Guerrier"}, { name: "Zob"}, { name: "Ninja"}])

capacities = Capacity.create([{ name: "Boule de feu", type_capacity: 0, cooldown: 1, damage: 7},
    { name: "Voile protecteur", type_capacity: 1, cooldown: 1, protection: 3, protection_duration: 3,},
    { name: "Transandance", type_capacity: 2, cooldown: 1, buff_duration: 3, buff: 2},
    { name: "Foudre divine", type_capacity: 0, cooldown: 3, damage: 9, buff: 1, buff_duration: 2},


    { name: "Décapitation", type_capacity: 0, cooldown: 2, damage: 10, buff_duration: 2, buff: 1},
    { name: "Armure de fer", type_capacity: 1, cooldown: 1, protection: 3, protection_duration: 3},
    { name: "Tranchage", type_capacity: 0, cooldown: 1, damage: 7},

    { name: "Assassinat", type_capacity: 0, cooldown: 3, damage: 14},
    { name: "Camouflage", type_capacity: 1, cooldown: 1, protection: 2, protection_duration: 4},
    { name: "Lame furtive", type_capacity: 0, cooldown: 1, damage: 8, buff_duration: 2, buff: 1},
    { name: "Coup du lapin", type_capacity: 0, cooldown: 2, damage: 10, buff_duration: 0, protection: 1, protection_duration: 2},

    { name: "Jeté de bâton", type_capacity: 0, cooldown: 1, damage: 3, buff_duration: 0, buff: 0, protection: 0, protection_duration: 0, buff_type: 0},
    { name: "Initulité", type_capacity: 1, cooldown: 5, protection: 100, protection_duration: 5},
    { name: "Castrage magistral", type_capacity: 0, cooldown: 2, damage: 9, protection: 3, protection_duration: 3},
    { name: "Viagra magique", type_capacity: 2, cooldown: 1, buff_duration: 3, buff: 2},

    # { name: "Magicien", type_capacity: 1, cooldown: 1, damage: 5, buff_duration: 0, buff: 0, protection: 0, protection_duration: 0, buff_type: 0}
    # { name: "Magicien", type_capacity: 1, cooldown: 1, damage: 5, buff_duration: 0, buff: 0, protection: 0, protection_duration: 0, buff_type: 0}
    # { name: "Magicien", type_capacity: 1, cooldown: 1, damage: 5, buff_duration: 0, buff: 0, protection: 0, protection_duration: 0, buff_type: 0}

])
Artefact.create([
    {name: "Sandales du commencement", bonus_type: 0, bonus: 13, drop: 10},
    {name: "Pilier de bannissement", bonus_type: 0, bonus: 12, drop: 13},
    {name: "Corne d'extermination", bonus_type: 0, bonus: 9,  drop: 20},
    {name: "Livre d'or", bonus_type: 0, bonus: 7,  drop: 30},

    {name: "Manteau d'immunité", bonus_type: 1, bonus: 13,  drop: 10},
    {name: "Arche d'obsidienne", bonus_type: 1, bonus: 12,  drop: 13},
    {name: "Microlithe d'ouragan", bonus_type: 1, bonus: 9,  drop: 20},
    {name: "Collier de spectre", bonus_type: 1, bonus: 7,  drop: 30},

    {name: "Urne d'arrogance", bonus_type: 2, bonus: 13,  drop: 10},
    {name: "Fontaine d'agonie", bonus_type: 2, bonus: 12,  drop: 13},
    {name: "Tiare des gloutons", bonus_type: 2, bonus: 9,  drop: 20},
    {name: "Bracelet de faim", bonus_type: 2, bonus: 7,  drop: 30},

    {name: "Latex de stérilité percé", bonus_type: 1, bonus: 5,  drop: 50},

    ])

Mob.create([
    { name: "Pillieur de tombe", environment: "['forest', 'cavern', 'city']", boss: 0},
    { name: "Guerrier d'outre tombe", environment: "['forest', 'cavern', 'city']", boss: 0},
    { name: "Squelette", environment: "['forest', 'cavern', 'city']", boss: 0},
    { name: "Orque", environment: "['forest', 'cavern']", boss: 0},
    { name: "Gobelin", environment: "['forest', 'cavern']", boss: 0},
    { name: "Ran'o", environment: "['forest', 'cavern']", boss: 1},
    { name: "Lesulfan", environment: "['city']", boss: 1},
    { name: "Baleos", environment: "['forest', 'cavern']", boss: 1},
    { name: "Faucheur", environment: "['city']", boss: 0},
    { name: "Epouvanteur", environment: "['forest']", boss: 0}
])

# Create capacities

Capacity.create([
    { name: "Eventration", type_capacity: 0, cooldown: 1, damage: 7, buff_duration: 2, buff: 1},
    { name: "Fauchage", type_capacity: 0, cooldown: 1, damage: 5, buff_duration: 3, buff: 3, protection: 1, protection_duration: 2},
    { name: "Charge", type_capacity: 0, cooldown: 1, damage: 5},
    { name: "Coup bas", type_capacity: 0, cooldown: 1, damage: 8},
    { name: "Position défensive", type_capacity: 0, cooldown: 1, protection_duration: 1, protection: 10},
    { name: "Ténèbres intérieur", type_capacity: 2, cooldown: 1, buff_duration: 5, buff: 2, protection: 1, protection_duration: 2},
    { name: "Frappe ténébreuse", type_capacity: 0, cooldown: 1, damage: 10, buff_duration: 2, buff: 1},
    { name: "Néant", type_capacity: 0, cooldown: 2, damage: 22, buff_duration: 2, buff: 1},
    { name: "Temps ancien", type_capacity: 0, cooldown: 2, damage: 30},
    { name: "Armure de pierre", type_capacity: 1, cooldown: 1, protection: 3, protection_duration: 4},
    { name: "Coup de bouclier", type_capacity: 0, cooldown: 1, protection: 2, protection_duration: 2, damage: 12},
    { name: "Tranchage de pierre", type_capacity: 0, cooldown: 1, damage: 16},
    { name: "Foudre oubliée", type_capacity: 0, cooldown: 1, damage: 25},
    { name: "Souffle de foudre", type_capacity: 0, cooldown: 1, damage: 40},
    { name: "Duracel", type_capacity: 2, cooldown: 2, buff: 10, buff_duration: 1},
])

# relationships



p "created default values"