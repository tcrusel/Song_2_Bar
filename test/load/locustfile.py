from locust import HttpUser, task, between
import random

COMMON_HEADERS = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
}

class WebsiteUser(HttpUser):
    host = "http://localhost:3000"
    wait_time = between(1, 3)

    @task(1)
    def home(self):
        self.client.get("/", headers=COMMON_HEADERS, name="/")

    @task(4)
    def events(self):
        self.client.get("/events", headers=COMMON_HEADERS, name="/events")
    
    @task(4)
    def eventDetail(self):
        event_id = random.choice([1, 2, 3, 4, 5])
        self.client.get(f"/events/{event_id}", headers=COMMON_HEADERS, name="/events/:id")

    @task(4)
    def musicGroup(self):
        group_id = random.choice([1, 2, 3, 4, 5])
        self.client.get(f"/groups/{group_id}", headers=COMMON_HEADERS, name="/groups/:id")

    @task(4)
    def bar(self):
        bar_id = random.choice([1, 2, 3, 4, 5])
        self.client.get(f"/bars/{bar_id}", headers=COMMON_HEADERS, name="/bars/:id")

    @task(4)
    def profile(self):
        self.client.get("/profile", headers=COMMON_HEADERS, name="/profile")
    
class ApiUser(HttpUser):
    host = "http://localhost:3310"
    wait_time = between(1, 3)

    EMAIL = "crusel.thomas@gmail.com"
    PASSWORD = "12345678"

    def on_start(self):
        """
        Appelé une fois au démarrage de chaque utilisateur virtuel.
        On s'authentifie et on stocke le JWT.
        """
        payload = {"email": self.EMAIL, "password": self.PASSWORD}

        with self.client.post(
            "/api/login",
            json=payload,
            name="POST /api/login",
            catch_response=True,
        ) as resp:
            if resp.status_code == 200:
                data = resp.json()
                self.token = data["token"]
                self.user_id = data["user"]["id"]
                resp.success()
            else:
                resp.failure(f"Login failed: {resp.status_code} {resp.text}")
                self.token = None
                self.user_id = None

    @task(5)
    def favourite_event(self):
        if not getattr(self, "token", None):
            return  

        event_id = random.randint(60, 180)

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.token}",
        }

        body = {
            "userId": self.user_id,
            "eventId": event_id,
        }

        with self.client.post(
            "/api/favourite_event",
            json=body,
            headers=headers,
            name="POST /api/favourite_event",
            catch_response=True,
        ) as resp:
            if resp.status_code in (200, 201, 204):
                resp.success()
            elif resp.status_code == 401:
                resp.failure("401 Unauthorized (token invalid/expired?)")
            else:
                resp.failure(f"{resp.status_code} {resp.text}")