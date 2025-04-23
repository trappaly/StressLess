# How to Use the Backend
*Note: This text is partially generated using a large language model.*

## In short, what are HTTP requests?
HTTP (Hypertext Transfer Protocol) requests are the foundation of communication between clients (like browsers or mobile apps) and servers on the web. There are several types of HTTP requests, also known as methods, but the most common ones include:

- `GET`: Retrieve data from the server.
- `POST`: Send data to the server, usually to create something new.
- `PUT`: Update existing data on the server.
- `DELETE`: Remove data from the server.

These requests usually contain:
- A URL (endpoint)
- A method (e.g., GET, POST)
- Headers (e.g., authentication tokens)
- A body (for POST/PUT requests) containing the data to be sent

## How can you send HTTP requests?
There are several ways to send HTTP requests, including:

- **Frontend JavaScript**: Using `fetch` or libraries like `axios`
- **Backend code**: Using libraries like `axios`, `node-fetch`, or built-in Node.js HTTP modules
- **Command line tools**: Such as `curl`
- **API testing tools**: Like Postman or Insomnia

## What are API routes and controllers in Express?
In an Express application, API routes define the endpoints the frontend can call, and controllers contain the logic for handling those requests.

For example:
```typescript
router.post('/events', EventController.postEvent);
```
- This route listens for POST requests at `/events`.
- It delegates the request to `EventController.postEvent`, which is a function responsible for processing the request.

### Controller Function Example
```typescript
public static async postEvent(req: Request, res: Response) {
  // Logic to insert a new event into the database
}
```

The controller reads the request body (`req.body`), validates it, and interacts with the database using an ORM like Prisma.

## Using the `axios` library from the frontend to access the API
To send data from the frontend to this backend endpoint, you can use `axios` like so:

```javascript
import axios from 'axios';

const newEvent = {
  user_id: '1234',
  title: 'Study Session',
  start_time: new Date().toISOString(),
  end_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  description: 'Math revision',
  location_place: 'Library',
  is_recurring: false,
};

axios.post('/api/calendar/events', newEvent)
  .then(response => {
    console.log('Event created:', response.data);
  })
  .catch(error => {
    console.error('Error creating event:', error);
  });
```

Make sure the API endpoint `/api/calendar/events` is correctly proxied or reachable by your frontend.

## Testing the backend using `supertest`
You can test your Express routes using the `supertest` library, which lets you simulate HTTP requests in your tests.

Example test for `postEvent`:
```typescript
import request from 'supertest';
import app from '../src/app'; // Your Express app instance

describe('POST /api/calendar/events', () => {
  it('should create a new event', async () => {
    const response = await request(app)
      .post('/api/calendar/events')
      .send({
        user_id: 'test-user',
        title: 'Test Event',
        start_time: new Date().toISOString(),
      });

    expect(response.status).toBe(200); // or 201, depending on your setup
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test Event');
  });
});
```

This test checks if the route correctly creates an event and returns the expected response.