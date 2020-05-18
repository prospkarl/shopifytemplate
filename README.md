# Shopify Guide
This is a guide for Shopify Conversion

## Table of Contents

- [Template Components](#edit-template-files)
- [Uploading Template Files](#uploading-template-files)
- [Edit Template](#edit-template-files)

## Template Components

- header.liquid
- banner.liquid
- middle.liquid
- footer.liquid

![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/sections.png?raw=true)

**Note** _Check "theme.liquid" for the page layout_

## Uploading Template Files

### 1. GO TO "THEMES" PAGE ON YOUR SHOPIFY WEBSITE
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/themes_page.png?raw=true)

### 2. SCROLL DOWN AND CLICK "UPLOAD THEME" BUTTON
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/upload_btn.png?raw=true)

### 3. UPLOAD THE TEMPLATE FILES (.ZIP FILE FROM OUR /TEMPLATE FOLDER)
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/upload_template.png?raw=true)

### 4. PREVIEW WEBSITE
Click on the "Eye" icon from the sidebar.

_The website must look like this:_
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/done_upload.png?raw=true)

## Edit Template files

Make sure you've installed "Theme Kit". Install theme kit here: https://shopify.github.io/themekit/

**Important Theme Kit Actions**
```
theme download - download current website files
theme deploy - upload changes from local
theme watch - listen for file changes
```

### 1. CREATE A BLANK FOLDER AND CREATE A FILE NAMED AS "CONFIG.YML"
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/createconfig.PNG?raw=true)

### 2. EDIT FILE USING "NOTEPAD" AND COPY PASTE THE CODE BELOW:

```
development:
  password: [ADMIN API]
  theme_id: [THEME ID ]
  store: [samplewebsite.myshopify.com]
```

#### ADMIN API
To get these credentials go to your account and get to Sidebar > Apps. And click "Manage private apps". Create an app, set the permission of "Theme Templates and theme assets" from "No access" => "Read and write". Get the API from there.
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/adminapi.png?raw=true)

#### THEME ID
Click themes > Actions > Edit Code > Get the last key of the url /admin/themes/0128042
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/theme_id.png?raw=true)

##### _'CONFIG.YML'_ MUST LOOK LIKE THIS
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/configuration.png?raw=true)

### 4. OPEN GIT BASH ON THE SAME FOLDER.
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/gitbash.png?raw=true)

### 5. RUN "THEME DOWNLOAD".
_this will download all theme files from your website_
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/themedownload.png?raw=true)

### 5. TO LISTEN TO CHANGES, RUN "THEME WATCH".
_changes will be automatically saved after running this command_
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/themewatch.png?raw=true)
