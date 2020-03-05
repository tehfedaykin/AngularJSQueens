import IQueen from "../queens/Iqueen";

export default interface ISeason {
  id: number;
  number: number;
  winnerId: string;
  image_url: string;
  queens: IQueen[];
}