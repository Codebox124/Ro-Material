export interface RainfallResponse {
  success: boolean;
  answer: Answer;
  cache: boolean;
}

export interface Answer {
  answer: number;
  computed_at: string;
}
