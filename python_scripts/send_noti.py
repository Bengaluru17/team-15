from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import sys
from twilio.rest import Client

ac_sid = "AC98658f8d426358d972791b27b18bee41"
ac_pwd = "4b1db78143bafe356500abd0a9cf3bd7"


def send_sms(person, item):
	list_of_people = ["+918553065800"]
	client = Client(ac_sid, ac_pwd)
	for someone in list_of_people:
		client.messages.create(
			to = someone,
			from_ = "+12406249518",
			body = person+" is buying "+item
		)

 
driver = webdriver.Chrome('./drivers/chromedriver')
 
driver.get("https://web.whatsapp.com/")
wait = WebDriverWait(driver, 600)
print "hello"
def send_whatsapp(person, item):
	list_of_people = ['"Vishal"', '"Sanghamesh"','"Onam"', '"MG"']
	for target in list_of_people:
		string = person+" is buying "+item
		x_arg = '//span[contains(@title,' + target + ')]'
		group_title = wait.until(EC.presence_of_element_located((
		    By.XPATH, x_arg)))
		group_title.click()
		inp_xpath = '//div[@class="input"][@dir="auto"][@data-tab="1"]'
		input_box = wait.until(EC.presence_of_element_located((By.XPATH, inp_xpath)))
		input_box.send_keys(string + Keys.ENTER)
		time.sleep(1)

send_sms(sys.argv[1], sys.argv[2])
send_whatsapp(sys.argv[1], sys.argv[2])