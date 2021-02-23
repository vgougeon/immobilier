import { IHouse } from "../interfaces/house.interface";

export const HOUSES: IHouse[] = [
    { address: "105 rue Saint Germain", name: "T4 Toulouse", ownerId: 1, price: 90000 },
    { address: "6 rue Patrick Fiori", name: "T3 Paris", ownerId: 1, price: 70000 },
    { address: "18 impasse Charles", name: "T3 Lyon", ownerId: 1, price: 50000 },

    { address: "12 rue Georges", name: "Enorme immeuble", ownerId: 2, price: 10000000},
    { address: "254 rue Mbappé", name: "T1 Toulouse", ownerId: 2, price: 40000 },
    { address: "105 rue du Giroud", name: "T1 Toulouse", ownerId: 2, price: 35000 },
    
    { address: "6 chemin Lenglet", name: "Maison simple Bouloc", ownerId: 3, price: 100000 },
    { address: "125 route de Fronton", name: "Maison simple Fronton", ownerId: 3, price: 120000 },
    { address: "14 impasse suli", name: "Maison simple Grenade", ownerId: 3, price: 80000 },
]