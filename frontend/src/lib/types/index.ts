export type User = {
  id: string;
  email: string;
  created_at: string; // ISO string
};

export type PreferenceQuestion = {
  id: string;
  question_text: string;
};

export type UserPreference = {
  id: string;
  user_id: string;
  question_id: string;
  answer?: string | null;
};

export type UserEvent = {
  id: string;
  user_id: string;
  title: string;
  start_time: string; // ISO string
  end_time?: string | null;
  description?: string | null;
  location_place?: string | null;
  is_recurring: boolean;
  recurrence_pattern?: string | null;
  recurrence_start_date?: string | null;
  recurrence_end_date?: string | null;
  is_generated: boolean;
  break_time?: string | null;
  created_at: string;
  deadline_id?: string | null;
};

export type UserDeadline = {
  id: string;
  user_id: string;
  event_id?: string | null;
  title: string;
  due_time?: string | null;
  description?: string | null;
  priority?: string | null;
  projected_duration?: number | null;
  created_at: string;
};
