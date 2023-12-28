export class CreateDiaryDTO {
  content: string;
  day: string;
  interest: boolean;
}

export class UpdateDiaryDTO {
  _id: string;
  content: string;
  day: string;
  interest: boolean;
}

export class QueryDiaryDTO {
  limit: number;
}
