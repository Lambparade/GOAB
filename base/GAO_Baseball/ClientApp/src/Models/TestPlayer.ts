import Player, { TPlayerAttributes } from './Player';

export default class TestPlayer {

    private static CreateAttributes = () => {

        let attributes: TPlayerAttributes;

        attributes = {
            _Position: {
                OF: false,
                IF: true,
                P: false,
                RP: false,
                C: false
            },

            _PlayerLeague: {
                American: false,
                National: true
            },

            _Ratings: {
                1949: 2,
                1952: 4,
                1955: 5,
                1958: 0,
                1961: 0,
                1964: 0,
                1967: 0,
                1970: 0
            },

            _ManagerType: {
                A: false,
                B: true,
                C: true
            }
        }

        return attributes;
    }

    public static CreatePlayer = (playerName: string) => {
        let Name = playerName;
        let Comments = "A player used for testing";

        let playerAttributes: TPlayerAttributes = TestPlayer.CreateAttributes();


        console.log(playerAttributes);

        let PlayerObject = new Player(Name, Comments, playerAttributes, false);

        console.log(PlayerObject);

        return PlayerObject;
    }

}
