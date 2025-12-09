import time
from playwright.sync_api import sync_playwright
import os

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    # Construct the file path using os.path.join for compatibility
    file_path = os.path.join(os.getcwd(), 'index.html')
    page.goto(f'file://{file_path}')
    # Add a delay to allow the dynamic text to change to a long word
    time.sleep(9)
    hero_section = page.locator('.hero-title')
    hero_section.screenshot(path='hero-screenshot-long.png')
    browser.close()
