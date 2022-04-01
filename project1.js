import SteamUser from 'steam-user';
import dotenv from 'dotenv';

dotenv.config();

const client = new SteamUser();

const logOnOptions = {
  accountName: process.env.STEAM_USERNAME,
  password: process.env.STEAM_PASSWORD
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam');

  client.setPersona(SteamUser.EPersonaState.Online);
  client.gamesPlayed('Making Big Money Moves');

});