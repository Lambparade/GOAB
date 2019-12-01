export default class Player {
    _Name: string;
    _Comments: string;
    _PlayerAttributes: TPlayerAttributes;
    _Star: boolean;

    constructor(
        name: string,
        comments: string,
        player_attribures: TPlayerAttributes,
        star: boolean) {
        this._Name = name;
        this._Comments = comments;
        this._PlayerAttributes = player_attribures;
        this._Star = star;
    }
}

export type TPlayerAttributes = {
    _Position: TPosition ;
    _PlayerLeague: TLeague;
    _Ratings: TRatings;
    _ManagerType: TManagerType;
}


type TPosition = {
    OF: boolean;
    IF: boolean
    P: boolean
    RP: boolean
    C: boolean
}

type TLeague = {
    American: boolean,
    National: boolean,
}

type TManagerType = {
    A: boolean,
    B: boolean,
    C: boolean
}

type TRatings = {
    1949: number,
    1952: number,
    1955: number,
    1958: number,
    1961: number,
    1964: number,
    1967: number,
    1970: number
}