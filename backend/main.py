from flask import Flask, g, request
from flask_cors import CORS
import pymysql
import logging
import datetime

app = Flask(__name__)
CORS(app)


@app.before_request
def before_request():
    # print("Establishing connection with the database")
    g.db = pymysql.connect(
        host="localhost", user="root", password="12345", db="portfolio_website", autocommit=True
    )
    g.cursor = g.db.cursor()


@app.teardown_request
def teardown_request(exception):
    # print("Teardown")
    g.db.close()
    g.cursor.close()


@app.route("/api/recommendations", methods=["GET"])
def get_recommendation():
    try:
        # print("recommendation")
        # Database connecton
        # db = pymysql.connect(
        #     host="localhost", user="root", password="12345", db="portfolio_website", autocommit=True
        # )
        # cursor = db.cursor()
        # SQL query
        query = "SELECT * FROM recommendations WHERE onShowcase=True;"
        # Fetch the data
        g.cursor.execute(query)
        recommendations = g.cursor.fetchall()
        # Process the data
        results = []
        for recommendation in recommendations:
            recommendation_obj = {
                "id": recommendation[0],
                "name": recommendation[1],
                "company": recommendation[3],
                "designation": recommendation[4],
                "message": recommendation[5],
            }
            results.append(recommendation_obj)
        #     # Clean up
        # cursor.close()
        # db.close()
        # REtun the results
        return {"isSuccessful": True, "results": results}

    except Exception as e:
        # Handle errors
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/skills", methods=["GET"])
def get_skills():
    try:
        # print("skills")
        # Database connecton
        # db = pymysql.connect(
        #     host="localhost", user="root", password="12345", db="portfolio_website", autocommit=True
        # )
        # cursor = db.cursor()
        # SQL query
        query = "SELECT * FROM skills;"
        # Fetch the data
        g.cursor.execute(query)
        skills = g.cursor.fetchall()
        # Process the data
        results = []
        for skill in skills:
            skill_obj = {
                "id": skill[0],
                "imageUrl": skill[1],
                "name": skill[2],
                "starsTotal": skill[3],
                "starsActive": skill[4],
            }

            results.append(skill_obj)
            # print(results)
        #     # Clean up
        # cursor.close()
        # db.close()
        # REtun the results
        return {"isSuccessful": True, "results": results}

    except Exception as e:
        # Handle errors
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/projects", methods=["GET"])
def get_projects():
    try:
        # print("projects")
        # Database connecton
        # db = pymysql.connect(
        #     host="localhost", user="root", password="12345", db="portfolio_website", autocommit=True
        # )
        # cursor = db.cursor()
        # SQL query
        query = "SELECT * FROM projects WHERE isPublished=True ORDER BY lastModified DESC;"
        # Fetch the data
        g.cursor.execute(query)
        projects = g.cursor.fetchall()
        # Process the data
        results = []
        for project in projects:
            project_obj = {
                "id": project[0],
                "imageUrl": project[1],
                "title": project[2],
                "excerpt": project[3],
                "body": project[4],
            }
            results.append(project_obj)
        #     # Clean up
        # cursor.close()
        # db.close()
        # REtun the results
        return {"isSuccessful": True, "results": results}

    except Exception as e:
        # Handle errors
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/blogs", methods=["GET"])
def get_blogs():
    try:
        # print("blogs")
        # Database connecton
        # db = pymysql.connect(
        #     host="localhost", user="root", password="12345", db="portfolio_website", autocommit=True
        # )
        # cursor = db.cursor()
        # SQL query
        query = "SELECT * FROM blogs WHERE isPublished=True ORDER BY lastModified DESC;"
        # Fetch the data
        g.cursor.execute(query)
        blogs = g.cursor.fetchall()
        # Process the data
        results = []
        for blog in blogs:
            blog_obj = {
                "id": blog[0],
                "imageUrl1": blog[1],
                "title1": blog[2],
                "excerpt1": blog[3],
                "body1": blog[4],
            }
            results.append(blog_obj)
        #     # Clean up
        # cursor.close()
        # db.close()
        # REtun the results
        return {"isSuccessful": True, "results": results}

    except Exception as e:
        # Handle errors
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/project", methods=["POST"])
def add_projects():
    try:
        project = request.json
        print(project)
        # SQL query
        query = "INSERT INTO projects VALUES(%s,%s,%s,%s,%s,%s,%s);"
        g.cursor.execute(query, [project["id"], project["imageUrl"],
                         project["title"], project["excerpt"], project["body"], True, datetime.datetime.now()],)
        return {"isSuccessful": True}

    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route("/api/project", methods=["GET"])
def get_blog_by_id():
    try:
        id = request.args.get("id")
        # SQL query
        query = "SELECT imageUrl,title,body FROM projects WHERE id=%s;"
        g.cursor.execute(query, [id])
        project = g.cursor.fetchone()
        project_obj = {"imageUrl": project[0],
                       "title": project[1], "body": project[2]}
        print(project)
        return {"isSuccessful": True, "result": project_obj}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "result": {}}


if __name__ != "__main__":
    waitress_logger = logging.getLogger("waitress.error")
    app.logger.handlers = waitress_logger.handlers
    app.logger.setLevel(waitress_logger.level)

if __name__ == "__main__":
    app.run()
