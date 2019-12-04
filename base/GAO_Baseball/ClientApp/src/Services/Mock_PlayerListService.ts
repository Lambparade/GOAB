import TestPlayer from "../Models/TestPlayer";
import Player from "../Models/Player";

export default class Mock_PlayerListService {

    static GetMockData = () => {

        let playerList:Player[] = [];

        playerList.push(TestPlayer.CreatePlayer("Ben Eater"));
        playerList.push(TestPlayer.CreatePlayer("Dave Burger"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));
        playerList.push(TestPlayer.CreatePlayer("Connor Rules"));

        return playerList;
    }
}