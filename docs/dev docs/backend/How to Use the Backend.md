# How to Use the Backend
*Note: This text is partially generated using a large language model.*

## In short, what are HTTP requests?

## How can you send HTTP requests?

Let's consider the following controller:
```typescript
/**
   * Adds a new event to database using values in the request.
   * @param req.body - Fields have the same names of the columns in the
   *  `user_events` table. `id` will be ignored since an UUID will be generated.
   */
  public static async postEvent(req: Request, res: Response)
```
with the following database schema:
```prisma
model user_events {
  id                     String    @id @default(uuid())
  user_id                String
  title                  String    @db.VarChar(255)
  start_time             DateTime  @default(now())
  end_time               DateTime?
  description            String?
  location_place         String?   @db.VarChar(255)
  is_recurring           Boolean   @default(false)
  recurrence_pattern     String?   @db.VarChar(255)
  recurrence_start_date  DateTime?
  recurrence_end_date    DateTime?
  is_generated           Boolean   @default(false)
  break_time             String?
  created_at             DateTime  @default(now())
}
```

The controller is linked to the following route
```typescript
// Add an event
router.post('/events', EventController.postEvent);
```
which can be accessed using the URL `/api/calendar/events`.

### What are API routes and controllers in Express?

### Using the `axios` library from the frontend to access the API

## Testing the backend using `supertest`