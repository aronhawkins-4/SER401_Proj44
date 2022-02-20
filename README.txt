Researched a way to use dynamic URLs to pass the message 
number in the url in order to retrieve that message number 
from the log 

This will be doing by using a dynamic url and need to pull
the id value in the router to route accordingly

will also include a special character in order to parse the 
message number from the url. The route will be something 
along the lines of /msg? followed by the message ID and that 
way I can parse the string by looking up the ? character 
