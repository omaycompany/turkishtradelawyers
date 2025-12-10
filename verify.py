
import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Construct the absolute file path
        file_path = "file://" + os.path.abspath("index.html")

        await page.goto(file_path)

        # Wait for the hero section to be visible
        await page.wait_for_selector('.hero')

        # Take a screenshot of the hero section
        hero_element = await page.query_selector('.hero')
        await hero_element.screenshot(path="hero-screenshot.png")

        # Take a screenshot of a long word in the hero section
        await page.evaluate('document.getElementById("dynamic-keyword").textContent = "Intellectual Assets"')
        await hero_element.screenshot(path="hero-screenshot-long.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
