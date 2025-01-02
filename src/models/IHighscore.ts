class Player  {
  constructor (
  public playerName: string,
  public quizPoints: number,
  public time: string,
  public date: Date,
  ) {}
}

export interface IHighscore {
  players: Player[];
}
