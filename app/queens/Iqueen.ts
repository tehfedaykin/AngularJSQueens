import IEpisode from "../episodes/Iepisode";

export default interface IQueen {
  id: number;
  name: string;
  winner: boolean;
  missCongeniality: string;
  quote: string;
  image_url: string;
  seasons?: IQueenSeason[];
  episodes?: IEpisode[];
  challenges?: IChallenge[];
  lipsyncs?: ILipsync[];
}

interface IQueenSeason {
  id: number;
  place: number;
}

interface IChallenge {
  id: number;
  type: string;
  description: string;
  won: boolean;
}

interface ILipsync {
  id: number;
  won: boolean;
  name: string;
  artist: string;
}