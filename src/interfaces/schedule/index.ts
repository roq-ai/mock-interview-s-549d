import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ScheduleInterface {
  id?: string;
  faculty_id?: string;
  student_id?: string;
  date_time: any;
  created_at?: any;
  updated_at?: any;

  user_schedule_faculty_idTouser?: UserInterface;
  user_schedule_student_idTouser?: UserInterface;
  _count?: {};
}

export interface ScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  faculty_id?: string;
  student_id?: string;
}
