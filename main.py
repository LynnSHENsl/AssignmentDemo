
# Basic code, check the lecture notes for how it works

import webapp2
from google.appengine.ext import ndb    

# handle the url /submit
class HandleForm(webapp2.RequestHandler):
    def post(self):
        name = self.request.get('name')
		
		gender = self.request.get('gender')
		age = self.request.get('age')
		experience = self.request.get('experience')
		url = self.request.get('url')
		
        self.response.write('Hello %s!'%name)
        saveForm(self)
        
# Define the model
class Form(ndb.Model):
    name = ndb.StringProperty()
	
	gender = ndb.StringProperty()
	
    email = ndb.StringProperty()
    age = ndb.IntegerProperty()
	
	experience = ndb.IntegerProperty()
	url = ndb.StringProperty()
	
    #date = ndb.DateTimeProperty(auto_now_add=True)

# a function to save the input
def saveForm(self):    
    age = int(self.request.get('age'))
    name = self.request.get('name')
    email = self.request.get('email')

	gender = self.request.get('gender')
	experience = int(self.request.get('experience'))
	url = self.request.get('url')
	
    if email:
        # use email as key name
        form = Form(key=ndb.Key('Form', email), name=name, age=age, gender=gender, experience=experience, url=url)
    else:
        form = Form(name=name,age=age)        
    form.put()    
    
    self.response.write('<br>Your form is saved')
    
# handle the url  / 
class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Hello!<br>')
        self.response.write('Html <a href="/html">form</a> <br>')
        self.response.write('Ajax <a href="/ajax">form</a>')


# in this app (main.py), we will handle the following two urls
app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/submit', HandleForm)
], debug=True)
