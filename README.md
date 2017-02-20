
Sometimes we get `Script error.` `lineno: 0, colno: 0` from cross domain scripts.

Details described at:

* https://blog.bugsnag.com/script-error/
* https://blog.sentry.io/2016/05/17/what-is-script-error.html

The fix:

```html
crossorigin="anonymous"
```

Nginx 配置:

```nginx
server {
  listen 80;
  server_name cors-error-1 cors-error-2 cors-error-3;
  add_header 'Access-Control-Allow-Origin' '*';
  root /Users/chen/work/cors-error/;
  autoindex on;
  index index.html;

  location ~ /\.git {
    deny all;
  }
}
```

In this repo, I just tried the demo. Remove `crossorigin="anonymous"` in HTML file to reproduce the problem.

And the conlusion: `crossorigin="anonymous"` to the script that may throw errors.
