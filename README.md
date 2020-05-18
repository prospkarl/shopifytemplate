# Shopify Guide
This is a guide for Shopify Conversion

## Table of Contents

- [Uploading Template Files](#uploading-template-files)
- [Edit Template](#edit-template-files)

## Uploading Template Files

### 1. Go to "Themes" page on your shopify website
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/themes_page.png?raw=true)

### 2. Scroll down and Click "Upload Theme" button
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/upload_btn.png?raw=true)

### 3. Upload the template files (.zip file from our /template folder)
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/upload_template.png?raw=true)

### 4. Preview Website
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

### 1. Create a blank folder and create a file named as "config.yml"
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/createconfig.PNG?raw=true)

### 2. Edit file using "Notepad" and copy paste the code below:

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

##### _'config.yml'_ must look like this
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/configuration.png?raw=true)

### 4. Open git bash on the same folder.
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/gitbash.png?raw=true)

### 5. Run "theme download".
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/themedownload.png?raw=true)

### 5. To listen to changes, run "theme watch".
![alt text](https://github.com/prospkarl/shopifytemplate/blob/master/images/themewatch.png?raw=true)
