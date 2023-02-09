<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <% if (htmlWebpackPlugin.options.BUILD_ENV === 'production') { %>
      <% if (htmlWebpackPlugin.options.BUILD_ENV === 'production') { %>
        <link rel="shortcut icon" href="<%=htmlWebpackPlugin.files.favicon%>" type="image/x-icon" />
      <% } %> 
      <%for (let i = 0, l = htmlWebpackPlugin.files.css.length; i < l; i += 1) {%>
        <link rel="stylesheet" href="<%=htmlWebpackPlugin.files.css[i]%>">
      <%}%>
    <% } %>
    <title>Bluepha UI</title>
    <meta name="description" content="Bluepha UI, 基于 Vue 2.0 的桌面端组件库" />
  </head>
  <body>
    <script>
      if (!window.Promise) {
        document.write('<script src="//cdn.jsdelivr.net/npm/es6-promise@4.1.1/dist/es6-promise.min.js"><\/script><script>ES6Promise.polyfill()<\/script>')
      }
    </script>
    <div id="app"></div>
  </body>
  <% if (htmlWebpackPlugin.options.BUILD_ENV === "development") { %><script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-84335471-1', 'auto');
    ga('send', 'pageview');

    window.addEventListener('hashchange', function () {
      ga('set', 'page', window.location.href);
      ga('send', 'pageview');
    });
  </script><% } %>
  <% if (htmlWebpackPlugin.options.BUILD_ENV !== 'production') { %><script>
    var ga = function() {
      console.log(arguments)
    };
  </script><% } %>
  <%for (let i = 0, l = htmlWebpackPlugin.files.js.length; i < l; i += 1) {%>
    <script type="text/javascript" src="<%=htmlWebpackPlugin.files.js[i]%>">console.log(<%=JSON.stringify(htmlWebpackPlugin.files)%>) </script>
  <%}%>
</html>
