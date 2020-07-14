# NeetSec WebPage

This project was bootstrapped with [Create Next App](https://github.com/vercel/next.js#readme).

## Table of Contents

[[_TOC_]] 

## General Folder Structure

```sh
├── components
├── i18n.js
├── next.config.js
├── package.json
├── pages
├── README.md
├── server.js
├── static
│   ├── fonts
│   ├── images
│   │   ├── 1000
│   │   ├── 1400
│   │   ├── 200
│   │   ├── 450
│   │   ├── 800
│   └── locales
│       ├── en
│       └── es
└── styles
```

## Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js >= 10.13
* MacOS, Windows (including WSL), and Linux are supported

## Installation

**Download and install Node.js v10.x and npm.**

> Using Ubuntu

```sh
  $ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
  $ sudo apt-get install -y nodejs
```
> Using Debian, as root

```sh
  $ curl -sL https://deb.nodesource.com/setup_10.x | bash - 
  $ apt-get install -y nodejs
```

**Clone the repo, switch to v19.neetsec.com and run npm install**

```sh
  $ git clone https://gitlab.com/NH-DEVs/v19.neetsec.com.git
  $ cd v19.neetsec.com
  $ npm install
```

It's recommended to fix security vulnerabilities in dependencies using the command

```sh
  $ npm audit fix
```

In the project directory, you can run:

```sh
  $ npm run dev
```

This starts "development server" on port 3000

```sh
  $ npm run build
``` 

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Deploy

### Prerequisites

* Nginx >= 1.14.0
* Cerbot >= 1.6
* serve >= 11.3.2

** Optional 
* pm2 >= 4.4.0

Install Nginx 

```sh
  $ sudo apt update
  $ sudo apt install nginx
``` 

Install Certbot

```sh
  $ sudo add-apt-repository ppa:certbot/certbot
```

**clone the repo in /var/www/ and switch to v19.neetsec.com directory:**

```sh
 cd /var/www/
 sudo git clone https://gitlab.com/NH-DEVs/v19.neetsec.com.git
 cd v19.neetsec.com
```

**install the next dependencies:**

```sh
 sudo npm install
```

**Build project to deploy**

```sh
 sudo npm run build
```

```sh
> Neetsec@1.0.0 build /var/www/v19.neetsec.com
> next build

Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

Creating an optimized production build  

Compiled successfully.

Automatically optimizing pages  

Page                                 Size     First Load JS
┌ λ /                                3.81 kB         148 kB
├   /_app                            1.43 kB         102 kB
├ λ /404                             677 B           102 kB
├ λ /about                           3.76 kB         148 kB
├ λ /products                        4.38 kB         149 kB
└ λ /team                            4.23 kB         148 kB
+ First Load JS shared by all        102 kB
  ├ static/pages/_app.js             1.43 kB
  ├ chunks/880ed33e.e05b9c.js        64 B
  ├ chunks/commons.31cff5.js         51.1 kB
  ├ chunks/framework.d7272f.js       42.2 kB
  ├ chunks/styles.7ac91d.js          87 B
  ├ runtime/main.620602.js           6.19 kB
  ├ runtime/webpack.83bd83.js        746 B
  ├ css/880ed33e.60ac6a2d.chunk.css  76.5 kB
  └ css/styles.635d633c.chunk.css    93 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
```

Startup pm2 in systemd 

```sh 
  $ pm2 startup systemd
```

Run the command that was generated to set PM2 up to start on boot

```sh 
  $ sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u your-username --hp /home/your-username
```

In the forder run 

```sh 
  $ pm2 start npm --name "neetsec" --interpreter bash -- start
```

Check status should show **status:online**

```sh 
  $ pm2 show neetsec
```

In the nginx config add the proxy pass

```sh
  // If serving from root, use / instead of /your-path
  location ^~ /your-path {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $http_host;
    proxy_pass http://127.0.0.1:3000;
    proxy_redirect off;
  }
```

**Now restart up Nginx!**

**Note don't remember open the port in the firewall**

### Add SSL Certificate

```sh
  $ sudo certbot --nginx -d neetsec.com -d www.neetsec.com
```

**It is recommended to redirect all http traffic to https**


Finally renew the certificate with the following command and restart nginx

```sh
  $ sudo certbot renew --dry-run
  $ sudo service nginx restart
```

If you changed up your repository or made any changes to the configuration, just do a pull in repo and restart nginx:

```sh
  $ git pull
  $ npm install 
  $ npm build
  $ pm2 restart neetsec
  $ sudo service nginx restart
```
