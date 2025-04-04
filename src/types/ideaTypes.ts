
export interface IdeaRequest {
  businessIdea: string;
}

export interface IdeaScore {
  score: number;
  text: string;
}

export interface IdeaCompetition {
  name: string;
  description: string;
}

export interface IdeaResponse {
  ideaScore: number;
  originality: IdeaScore;
  marketPotential: IdeaScore;
  scalability: IdeaScore;
  improvements: string[];
  competition: IdeaCompetition[];
}
