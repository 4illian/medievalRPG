# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)`

classes = Classe.create([{ name: "Magicien" }, { name: "Guerrier"}, { name: "Zob"}, { name: "Ninja"}])

capacities = Capacity.create([
    # Magician capacities
    { name: "Boule de feu", type_capacity: 0, cooldown: 1, damage: 10},
    { name: "Foudre divine", type_capacity: 0, cooldown: 3, damage: 28, buff: 4, buff_duration: 2, protection: 3, protection_duration: 2 },
    { name: "Voile protecteur", type_capacity: 1, cooldown: 1, protection: 6, protection_duration: 7 },
    { name: "Colère divine", type_capacity: 2, cooldown: 1, buff_duration: 2, buff: 20},

    # Ninja capacities
    { name: "Assassinat", type_capacity: 0, cooldown: 2, damage: 32},
    { name: "Lame furtive", type_capacity: 0, cooldown: 1, damage: 12, buff_duration: 2, buff: 5},
    { name: "Camouflage", type_capacity: 1, cooldown: 1, protection: 10, protection_duration: 3},
    { name: "Débridage", type_capacity: 2, cooldown: 1, buff_duration: 1, buff: 30},

    # Dwarf capacities
    { name: "Décapitation", type_capacity: 0, cooldown: 2, damage: 28, buff_duration: 2, buff: 3},
    { name: "Tranchage", type_capacity: 0, cooldown: 1, damage: 10},
    { name: "Armure de pierre", type_capacity: 1, cooldown: 1, protection: 15, protection_duration: 2},
    { name: "Hurlement", type_capacity: 2, cooldown: 1, buff_duration: 3, buff: 10},

    # Zob capacities
    { name: "Jeté de bâton", type_capacity: 0, cooldown: 1, damage: 9 },
    { name: "Castrage magistral", type_capacity: 0, cooldown: 2, damage: 18, protection: 5, protection_duration: 3},
    { name: "Initulité", type_capacity: 1, cooldown: 5, protection: 150, protection_duration: 5},
    { name: "Viagra magique", type_capacity: 2, cooldown: 1, buff_duration: 3, buff: 10},


    # Mobs capacities attack
    { name: "Eventration", type_capacity: 0, cooldown: 1, damage: 10, buff_duration: 2, buff: 3},
    { name: "Fauchage", type_capacity: 0, cooldown: 1, damage: 8, buff_duration: 3, buff: 3, protection: 3, protection_duration: 2},
    { name: "Charge", type_capacity: 0, cooldown: 1, damage: 10},
    { name: "Coup bas", type_capacity: 0, cooldown: 2, damage: 25},
    { name: "Coup du lapin", type_capacity: 0, cooldown: 2, damage: 20, buff_duration: 0, protection: 4, protection_duration: 2},

    # Mobs capacities defensives
    { name: "Position défensive", type_capacity: 1, cooldown: 1, protection_duration: 3, protection: 8},
    { name: "Bouclier sombre", type_capacity: 1, cooldown: 1, protection_duration: 1, protection: 25},

    # Mobs capacities buff attack
    { name: "Colère", type_capacity: 1, cooldown: 1, buff_duration: 1, buff: 25},
    { name: "Position agressive", type_capacity: 1, cooldown: 1, buff_duration: 3, buff: 8},


    # Boss 1 Spectre capacities
    { name: "Frappe ténébreuse", type_capacity: 0, cooldown: 1, damage: 13, buff_duration: 5, buff: 5},
    { name: "Néant", type_capacity: 0, cooldown: 2, damage: 30, buff_duration: 2, buff: 8 },
    { name: "Ténèbres intérieur", type_capacity: 2, cooldown: 1, buff_duration: 2, buff: 4, protection: 4, protection_duration: 6},
    { name: "Correction de réalité", type_capacity: 1, cooldown: 1, protection: 5, protection_duration: 6, buff: 3, buff_duration: 3},

    # Boss 2 Stone Paladin capacities
    { name: "Temps ancien", type_capacity: 0, cooldown: 2, damage: 32, protection: 5, protection_duration: 4},
    { name: "Tranchage de pierre", type_capacity: 0, cooldown: 1, damage: 15, protection: 5, protection_duration: 4},
    { name: "Coup de bouclier", type_capacity: 0, cooldown: 1, damage: 12, protection: 10, protection_duration: 3},
    { name: "Armure d'antan", type_capacity: 1, cooldown: 1, protection: 15, protection_duration: 4},

    # Boss 3 Electric Wolf capacities
    { name: "Foudre oubliée", type_capacity: 0, cooldown: 1, damage: 25, buff: 5, buff_duration: 4},
    { name: "Souffle de foudre", type_capacity: 0, cooldown: 1, damage: 35},
    { name: "Jugement", type_capacity: 0, cooldown: 4, damage: 85},
    { name: "Duracel", type_capacity: 2, cooldown: 2, buff: 15, buff_duration: 2},

])
Artefact.create([
    {name: "Sandales du commencement", bonus_type: 0, bonus: 12, drop: 10},
    {name: "Pilier de bannissement", bonus_type: 0, bonus: 10, drop: 15},
    {name: "Corne d'extermination", bonus_type: 0, bonus: 8,  drop: 20},
    {name: "Livre d'or", bonus_type: 0, bonus: 5,  drop: 30},

    {name: "Manteau d'immunité", bonus_type: 1, bonus: 12,  drop: 10},
    {name: "Arche d'obsidienne", bonus_type: 1, bonus: 10,  drop: 15},
    {name: "Microlithe d'ouragan", bonus_type: 1, bonus: 8,  drop: 20},
    {name: "Collier de spectre", bonus_type: 1, bonus: 5,  drop: 30},

    {name: "Urne d'arrogance", bonus_type: 2, bonus: 12,  drop: 10},
    {name: "Fontaine d'agonie", bonus_type: 2, bonus: 10,  drop: 15},
    {name: "Tiare des gloutons", bonus_type: 2, bonus: 8,  drop: 20},
    {name: "Bracelet de faim", bonus_type: 2, bonus: 5,  drop: 30},

    {name: "Latex de stérilité percé", bonus_type: 1, bonus: 3,  drop: 50},

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
# relationships



p "created default values"
