export default interface IEpisode {
  id: number;
  seasonId: number;
  episodeInSeason: number;
  title: string;
  airDate: Date;
}