import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import moment from 'moment';
import { HydratedDocument } from 'mongoose';

export type DiaryDocument = HydratedDocument<Diary>;

const checkDate = (val: string) => {
  return moment(val, 'DD/MM/YYYY HH:mm').isValid();
};

@Schema()
export class Diary {
  @Prop({
    type: String,
    required: [true, 'Please provide a name for this diary'],
  })
  content: string;

  @Prop({
    type: String,
    required: [true, 'Please provide a date for this diary'],
    validate: [checkDate, 'Please enter the correct date format'],
  })
  day: string;

  @Prop({
    required: true,
  })
  interest: string;
}

export const DiarySchema = SchemaFactory.createForClass(Diary);
