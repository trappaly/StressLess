# Database Schema Design

[https://dbdiagram.io/d/StressLess-67cb5f29263d6cf9a0a32612](https://dbdiagram.io/d/StressLess-67cb5f29263d6cf9a0a32612) (We do not have PRO account so contact @Khanh Phuong Do to suggest edits)

## Design Entities

| Entities | Purpose |
| --- | --- |
| `users` | Stores all users |
| `user_preferences` | Stores all user answers to `preference_questions` that will be used to help the app generate schedules for the user |
| `preference_questions` | Store all the questions like `what's your preferred study method?` |
| `user_events` | Store all user events |
| `user_deadlines` | Store all user deadlines, some can be connected to `user_events` |

## Schema Design - Table / Relationship

```sql
// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table users {
  id uuid [primary key]
  username varchar
  password_hash varchar
  created_at timestamp
}

Table preference_questions {
  id uuid [primary key]
  question_text varchar [not null, unique]
}

Table user_preferences {
  id uuid [primary key]
  user_id uuid [not null]
  question_id uuid
  answer text
}

Table user_events {
  id uuid [primary key]
  user_id uuid [not null]
  title varchar(255) [not null]
  start_time timestamp [not null]
  end_time timestamp [not null]
  description text
  location varchar(255)
  is_recurring boolean [default: false]
  recurrence_pattern varchar(255) [note: 'e.g., daily, weekly, monthly, custom']
  recurrence_start_date timestamp
  recurrence_end_date timestamp
  is_generated boolean [default: false]
  break_time varchar
  created_at timestamp
}

Table user_deadlines {
  id uuid [primary key]
  user_id uuid [not null]
  event_id uuid
  title varchar(255) [not null]
  due_time timestamp [not null]
  description text
  priority varchar(50)
  projected_duration integer
  created_at timestamp
}

// Relationships

// Users and User Preferences
Ref: users.id < user_preferences.user_id // A user can have many preferences

// Users and Questions
Ref: preference_questions.id < user_preferences.question_id // A question can have many answers (user preferences)

// Events and Users 
Ref: users.id < user_events.user_id // A user can have many events

// Deadlines and Users
Ref: users.id < user_deadlines.user_id // A user can have many deadlines

// Deadlines and Events (if applicable)
Ref: user_events.id < user_deadlines.event_id // An event can have an associated deadline
```